data "aws_cloudfront_cache_policy" "disabled" {
  name = "Managed-CachingDisabled"
}
data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_origin_request_policy" "app" {
  name    = "neuralgist-forward-except-host"
  comment = "All viewer headers except Host (API Gateway needs its own)"
  cookies_config {
    cookie_behavior = "all"
  }
  query_strings_config {
    query_string_behavior = "all"
  }
  headers_config {
    header_behavior = "allExcept"
    headers {
      items = ["host"]
    }
  }
}

# www -> apex, keeping path and query.
resource "aws_cloudfront_function" "canonical_host" {
  name    = "neuralgist-canonical-host"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<-EOT
    function handler(event) {
      var req = event.request;
      var host = (req.headers.host && req.headers.host.value) || '';
      if (host && host !== '${var.domain}') {
        var parts = [];
        for (var k in req.querystring) {
          var v = req.querystring[k];
          if (v.multiValue) { for (var i = 0; i < v.multiValue.length; i++) parts.push(k + '=' + v.multiValue[i].value); }
          else parts.push(v.value === '' ? k : k + '=' + v.value);
        }
        return { statusCode: 301, statusDescription: 'Moved Permanently', headers: { location: { value: 'https://${var.domain}' + req.uri + (parts.length ? '?' + parts.join('&') : '') } } };
      }
      return req;
    }
  EOT
}

resource "aws_cloudfront_distribution" "app" {
  count           = var.dns_ready ? 1 : 0
  enabled         = true
  is_ipv6_enabled = true
  comment         = "Neuralgist"
  aliases         = [var.domain, "www.${var.domain}"]
  price_class     = "PriceClass_100"

  origin {
    domain_name = replace(aws_apigatewayv2_api.http.api_endpoint, "https://", "")
    origin_id   = "lambda"
    custom_header {
      name  = "x-origin-verify"
      value = random_password.origin_secret.result
    }
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  origin {
    domain_name              = aws_s3_bucket.media.bucket_regional_domain_name
    origin_id                = "media"
    origin_access_control_id = aws_cloudfront_origin_access_control.media.id
  }

  default_cache_behavior {
    target_origin_id         = "lambda"
    viewer_protocol_policy   = "redirect-to-https"
    allowed_methods          = ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"]
    cached_methods           = ["GET", "HEAD"]
    compress                 = true
    cache_policy_id          = data.aws_cloudfront_cache_policy.disabled.id
    origin_request_policy_id = aws_cloudfront_origin_request_policy.app.id
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.canonical_host.arn
    }
  }

  # Hashed build assets: cache at the edge for a year.
  ordered_cache_behavior {
    path_pattern           = "/_app/immutable/*"
    target_origin_id       = "lambda"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    cache_policy_id        = data.aws_cloudfront_cache_policy.optimized.id
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.canonical_host.arn
    }
  }

  # Radio audio and other media from S3, cached at the edge (keys are immutable).
  ordered_cache_behavior {
    path_pattern           = "/media/*"
    target_origin_id       = "media"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    compress               = false
    cache_policy_id        = data.aws_cloudfront_cache_policy.optimized.id
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.canonical_host.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  depends_on = [aws_acm_certificate_validation.cert]
}
