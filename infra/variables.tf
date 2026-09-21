variable "region" {
  default = "us-east-1"
}
variable "domain" {
  default = "neuralgist.ai"
}
# Where the Postgres migrations/seed are run from (this Mac). Only this CIDR + the Lambda may reach the DB.
variable "admin_cidr" {
  type = string
}
# Emails that are admins on the site (comma-separated).
variable "admin_emails" {
  type    = string
  default = "tsuri@hotmail.com"
}
# Flip to true after neuralgist.ai's nameservers point at the Route 53 zone (outputs.nameservers).
# Gates the ACM validation wait, CloudFront and the DNS aliases, so the first apply doesn't block on Namecheap.
variable "dns_ready" {
  type    = bool
  default = false
}
variable "lambda_memory" {
  default = 1024
}
variable "db_instance_class" {
  default = "db.t4g.micro"
}
