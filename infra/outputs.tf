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

# So CI can read back the CIDR already in state and pass it through unchanged. `admin_cidr` has no default — it is
# the developer's own IP and the only address besides the Lambda that may reach Postgres — so a deploy that does not
# know it would otherwise have to invent one and would silently rewrite the database's security group.
output "admin_cidr" {
  value       = var.admin_cidr
  description = "The address allowed to reach Postgres for migrations. CI reads this and passes it back unchanged."
}
