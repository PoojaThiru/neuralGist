# NeuralGist Radio: a worker Lambda outside the VPC (it needs the internet for Anthropic and ElevenLabs; the site's
# Lambda is inside the VPC for RDS and has no egress). Every 5 minutes it asks the site for a queued episode over
# HTTPS with a shared secret, generates it, uploads the MP3 to S3, and reports back. CloudFront serves /media/*.

data "aws_caller_identity" "me" {}

# The owner reuses admitcrew's keys (same person, same bill). Read-only lookups; nothing in admitcrew changes.
data "aws_ssm_parameter" "anthropic" {
  name = "/admitcrew/anthropic"
}
data "aws_ssm_parameter" "elevenlabs" {
  name = "/admitcrew/elevenlabs"
}

resource "random_password" "radio_secret" {
  length  = 48
  special = false
}

# ---- Media bucket (private; CloudFront reads it through Origin Access Control) ----
resource "aws_s3_bucket" "media" {
  bucket = "neuralgist-media-${data.aws_caller_identity.me.account_id}"
}

resource "aws_s3_bucket_public_access_block" "media" {
  bucket                  = aws_s3_bucket.media.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_origin_access_control" "media" {
  name                              = "neuralgist-media"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_s3_bucket_policy" "media" {
  count  = var.dns_ready ? 1 : 0
  bucket = aws_s3_bucket.media.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "CloudFrontRead"
      Effect    = "Allow"
      Principal = { Service = "cloudfront.amazonaws.com" }
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.media.arn}/media/*"
      Condition = { StringEquals = { "AWS:SourceArn" = aws_cloudfront_distribution.app[0].arn } }
    }]
  })
}

# ---- Worker Lambda (zip built by `npm run build:worker`) ----
data "archive_file" "radio_worker" {
  type        = "zip"
  source_file = "${path.module}/../radio-worker/dist/index.mjs"
  output_path = "${path.module}/.build/radio-worker.zip"
}

resource "aws_iam_role" "radio_worker" {
  name               = "neuralgist-radio-worker"
  assume_role_policy = data.aws_iam_policy_document.assume.json
}

resource "aws_iam_role_policy_attachment" "radio_worker_logs" {
  role       = aws_iam_role.radio_worker.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "radio_worker_s3" {
  name = "put-radio-audio"
  role = aws_iam_role.radio_worker.id
  policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [{ Effect = "Allow", Action = ["s3:PutObject"], Resource = "${aws_s3_bucket.media.arn}/media/radio/*" }]
  })
}

resource "aws_cloudwatch_log_group" "radio_worker" {
  name              = "/aws/lambda/neuralgist-radio"
  retention_in_days = 30
}

resource "aws_lambda_function" "radio_worker" {
  function_name    = "neuralgist-radio"
  role             = aws_iam_role.radio_worker.arn
  runtime          = "nodejs22.x"
  architectures    = ["arm64"]
  handler          = "index.handler"
  filename         = data.archive_file.radio_worker.output_path
  source_code_hash = data.archive_file.radio_worker.output_base64sha256
  timeout          = 900
  memory_size      = 512

  logging_config {
    log_format = "Text"
    log_group  = aws_cloudwatch_log_group.radio_worker.name
  }

  environment {
    variables = {
      SITE_URL           = "https://${var.domain}"
      RADIO_SECRET       = random_password.radio_secret.result
      MEDIA_BUCKET       = aws_s3_bucket.media.bucket
      ANTHROPIC_API_KEY  = data.aws_ssm_parameter.anthropic.value
      ELEVENLABS_API_KEY = data.aws_ssm_parameter.elevenlabs.value
      RADIO_TARGET_WORDS = "800" # the model runs ~30% long; 800 lands near 7 minutes
      RADIO_MAX_CHARS    = "9000"
    }
  }

  depends_on = [aws_iam_role_policy_attachment.radio_worker_logs]
}

# Poll every 5 minutes. A poll with nothing queued is one short HTTPS call (well inside the Lambda free tier).
resource "aws_cloudwatch_event_rule" "radio_poll" {
  name                = "neuralgist-radio-poll"
  schedule_expression = "rate(5 minutes)"
}

resource "aws_cloudwatch_event_target" "radio_poll" {
  rule = aws_cloudwatch_event_rule.radio_poll.name
  arn  = aws_lambda_function.radio_worker.arn
}

resource "aws_lambda_permission" "radio_poll" {
  statement_id  = "AllowEventBridgePoll"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.radio_worker.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.radio_poll.arn
}
