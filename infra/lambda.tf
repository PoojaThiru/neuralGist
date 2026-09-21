data "aws_iam_policy_document" "assume" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda" {
  name               = "neuralgist-lambda"
  assume_role_policy = data.aws_iam_policy_document.assume.json
}

resource "aws_iam_role_policy_attachment" "logs" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# ENI management for a Lambda inside the VPC.
resource "aws_iam_role_policy_attachment" "vpc" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

resource "aws_cloudwatch_log_group" "app" {
  name              = "/aws/lambda/neuralgist"
  retention_in_days = 30
}

resource "random_password" "auth_secret" {
  length  = 48
  special = false
}

resource "random_password" "origin_secret" {
  length  = 40
  special = false
}

resource "aws_lambda_function" "app" {
  function_name = "neuralgist"
  role          = aws_iam_role.lambda.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.app.repository_url}@${data.aws_ecr_image.app.image_digest}"
  architectures = ["arm64"]
  memory_size   = var.lambda_memory
  timeout       = 30

  vpc_config {
    subnet_ids         = data.aws_subnets.app.ids
    security_group_ids = [aws_security_group.lambda.id]
  }

  logging_config {
    log_format = "Text"
    log_group  = aws_cloudwatch_log_group.app.name
  }

  environment {
    variables = {
      NODE_ENV             = "production"
      ORIGIN               = "https://${var.domain}"
      AUTH_URL             = "https://${var.domain}"
      AUTH_TRUST_HOST      = "true"
      AUTH_SECRET          = random_password.auth_secret.result
      ORIGIN_VERIFY_SECRET = random_password.origin_secret.result
      DATABASE_URL         = local.database_url
      ADMIN_EMAILS         = var.admin_emails
      PUBLIC_SITE_URL      = "https://${var.domain}"
    }
  }

  depends_on = [aws_iam_role_policy_attachment.logs, aws_iam_role_policy_attachment.vpc]
}
