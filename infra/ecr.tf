resource "aws_ecr_repository" "app" {
  name                 = "neuralgist"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
  image_scanning_configuration {
    scan_on_push = true
  }
}

# Keep the last 10 images so the repo doesn't grow forever.
resource "aws_ecr_lifecycle_policy" "app" {
  repository = aws_ecr_repository.app.name
  policy = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "keep last 10"
      selection    = { tagStatus = "any", countType = "imageCountMoreThan", countNumber = 10 }
      action       = { type = "expire" }
    }]
  })
}

data "aws_ecr_image" "app" {
  repository_name = aws_ecr_repository.app.name
  image_tag       = "latest"
}
