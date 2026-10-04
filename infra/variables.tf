variable "region" {
  default = "us-east-1"
}
variable "domain" {
  default = "neuralgist.ai"
}
# Where the Postgres migrations/seed are run from (this Mac). Only this CIDR + the Lambda may reach the DB.
# THE SIGNING KEY IS SHARED AND IS NOT MANAGED HERE. It was created for neuralknowledge.ai and both sites sign
# with it, because both serve the same library through their own CDN. Terraform in one repo must not own a key the
# other depends on, so these name what exists. Rotating means a new public key in the group, then these two values.
variable "media_key_group_id" {
  type        = string
  default     = "8215b3f9-3d9b-48a7-b240-8a7d15899c37" # key group "neuralknowledge-media"
  description = "CloudFront key group whose signature /media/learn/* requires."
}

variable "media_key_id" {
  type        = string
  default     = "K1K7E8YDUAMBD" # public key "neuralknowledge-media"
  description = "The Key-Pair-Id the site puts in a signed URL."
}

variable "media_key_ssm" {
  type        = string
  default     = "/vansur/cf_signing"
  description = "SSM parameter holding the RSA private key that pairs with media_key_id. Written by hand."
}

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

# The CloudFront distribution of neuralknowledge.ai, which serves the same media bucket as a second origin. It is
# declared in that project, so this only needs its id in order to grant it read access to the media (2026-09-30).
variable "sibling_distribution_id" {
  type        = string
  default     = "E3OE3X36DPHKVD"
  description = "CloudFront distribution id of the sibling site that plays this media"
}

# The security group of the learningbrains web function, which shares this Postgres instance with its own
# database and its own role. Named here because this group's ingress is written inline.
variable "sibling_lambda_sg" {
  type    = string
  default = "sg-051e40ca2c2a429dc"
}
