# Postgres in the default VPC. Not reachable from the internet except from admin_cidr (for migrations);
# the Lambda reaches it inside the VPC via security-group rule.
data "aws_vpc" "default" {
  default = true
}

# t4g instances aren't offered in us-east-1e; keep the DB and the Lambda in a/b/c.
data "aws_subnets" "app" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
  filter {
    name   = "availability-zone"
    values = ["${var.region}a", "${var.region}b", "${var.region}c"]
  }
}

resource "aws_security_group" "lambda" {
  name        = "neuralgist-lambda"
  description = "Neuralgist app (Lambda)"
  vpc_id      = data.aws_vpc.default.id
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "db" {
  name        = "neuralgist-db"
  description = "Neuralgist Postgres"
  vpc_id      = data.aws_vpc.default.id
  ingress {
    description     = "app"
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.lambda.id]
  }
  ingress {
    description = "admin (migrations/seed)"
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [var.admin_cidr]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_subnet_group" "db" {
  name       = "neuralgist"
  subnet_ids = data.aws_subnets.app.ids
}

resource "random_password" "db" {
  length  = 40
  special = false
}

resource "aws_db_instance" "db" {
  identifier                   = "neuralgist"
  engine                       = "postgres"
  engine_version               = "16"
  auto_minor_version_upgrade   = true
  instance_class               = var.db_instance_class
  allocated_storage            = 20
  max_allocated_storage        = 50
  storage_type                 = "gp3"
  storage_encrypted            = true
  db_name                      = "neuralgist"
  username                     = "neuralgist"
  password                     = random_password.db.result
  db_subnet_group_name         = aws_db_subnet_group.db.name
  vpc_security_group_ids       = [aws_security_group.db.id]
  publicly_accessible          = true # SG limits it to admin_cidr + the Lambda
  backup_retention_period      = 7
  deletion_protection          = true
  skip_final_snapshot          = false
  final_snapshot_identifier    = "neuralgist-final"
  performance_insights_enabled = false
  apply_immediately            = true
}

locals {
  database_url = "postgresql://${aws_db_instance.db.username}:${random_password.db.result}@${aws_db_instance.db.address}:5432/${aws_db_instance.db.db_name}?sslmode=require"
}

# Recorded in SSM so it can be read back without Terraform (deploy.sh uses it for migrations).
resource "aws_ssm_parameter" "database_url" {
  name  = "/neuralgist/database_url"
  type  = "SecureString"
  value = local.database_url
}
