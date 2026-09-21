output "nameservers" {
  description = "Set these at Namecheap for neuralgist.ai (Custom DNS)"
  value       = aws_route53_zone.zone.name_servers
}
output "api_endpoint" {
  value = aws_apigatewayv2_api.http.api_endpoint
}
output "cloudfront_domain" {
  value = var.dns_ready ? aws_cloudfront_distribution.app[0].domain_name : "(apply with -var dns_ready=true after the NS switch)"
}
output "db_endpoint" {
  value = aws_db_instance.db.address
}
output "ecr_repository" {
  value = aws_ecr_repository.app.repository_url
}

output "media_bucket" {
  value = aws_s3_bucket.media.bucket
}
