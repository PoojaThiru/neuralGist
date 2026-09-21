resource "aws_route53_zone" "zone" {
  name = var.domain
}

resource "aws_route53_record" "apex" {
  count   = var.dns_ready ? 1 : 0
  zone_id = aws_route53_zone.zone.zone_id
  name    = var.domain
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.app[0].domain_name
    zone_id                = aws_cloudfront_distribution.app[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "apex_v6" {
  count   = var.dns_ready ? 1 : 0
  zone_id = aws_route53_zone.zone.zone_id
  name    = var.domain
  type    = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.app[0].domain_name
    zone_id                = aws_cloudfront_distribution.app[0].hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  count   = var.dns_ready ? 1 : 0
  zone_id = aws_route53_zone.zone.zone_id
  name    = "www.${var.domain}"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.app[0].domain_name
    zone_id                = aws_cloudfront_distribution.app[0].hosted_zone_id
    evaluate_target_health = false
  }
}
