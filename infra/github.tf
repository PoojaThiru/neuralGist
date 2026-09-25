# The role GitHub Actions assumes to deploy — OIDC, no stored keys.
#
# WHY (2026-09-25). The image was built on a laptop: deploy.sh ran docker build, docker push and terraform apply
# locally, so a deploy was possible from exactly one machine and only while Docker Desktop was healthy on it. It was
# not — a four-day-old com.docker.backend held the daemon's sockets and ignored SIGTERM, and an hour went into a
# build that was never building. AdmitCrew has never had that failure because its images are built by CI.
#
# The account already has the GitHub OIDC provider (AdmitCrew's role uses it), so this adds a role, not a provider.
# That role was made by hand and appears in no Terraform; this one is declared, which is the difference between
# infrastructure and something somebody clicked once and now nobody can reproduce.

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_role" "github_actions" {
  name        = "github-actions-neuralgist"
  description = "Assumed by GitHub Actions to build the image and apply the Terraform. Declared in infra/github.tf."

  # THE TRUST POLICY IS THE SECURITY BOUNDARY, not the permission policy below. Only GitHub can assume this role,
  # only from this repository, and only from main — a pull request, including one from a fork, presents a different
  # subject claim and is refused. Nothing is stored: no access key exists to leak.
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = data.aws_iam_openid_connect_provider.github.arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = { "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com" }
        StringLike   = { "token.actions.githubusercontent.com:sub" = "repo:PoojaThiru/neuralGist:ref:refs/heads/main" }
      }
    }]
  })
}

# Administrator, deliberately and with the reason written down (owner approved 2026-09-25).
#
# This role runs `terraform apply` over the whole stack: RDS, CloudFront, Lambda, ECR, API Gateway, Route 53, ACM,
# IAM and S3. A policy enumerating every action across those fails closed the first time a resource type is added —
# mid-deploy, at the least convenient moment — and the habitual response to that is to widen it in a hurry, which
# ends up here anyway but without anyone having decided it. The same grant as github-actions-admitcrew.
#
# If this is ever narrowed, narrow the TRUST policy first: a shorter-lived branch condition or an environment gate
# buys more than a shorter action list.
resource "aws_iam_role_policy_attachment" "github_actions_admin" {
  role       = aws_iam_role.github_actions.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "Set as the AWS_ROLE_ARN repository variable on PoojaThiru/neuralGist."
}
