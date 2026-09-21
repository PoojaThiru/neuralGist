#!/usr/bin/env bash
# Build the image, push to ECR, apply Terraform, and point the Lambda at the new image.
#   ./infra/deploy.sh            # full deploy (build + push + apply)
#   ./infra/deploy.sh --infra    # Terraform only (no image build)
#   ./infra/deploy.sh --migrate  # run prisma migrate deploy + seed against the production DB
# Extra args after the mode are passed to terraform apply (e.g. -var dns_ready=true).
set -euo pipefail
cd "$(dirname "$0")/.."
REGION=us-east-1
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
BUCKET="neuralgist-tfstate-${ACCOUNT}"
ADMIN_CIDR="${ADMIN_CIDR:-$(curl -s https://checkip.amazonaws.com)/32}"
MODE="${1:-}"; [[ "$MODE" == --* ]] && shift || MODE=""

if ! aws s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
  echo "creating state bucket $BUCKET"
  aws s3api create-bucket --bucket "$BUCKET" --region "$REGION" >/dev/null
  aws s3api put-bucket-versioning --bucket "$BUCKET" --versioning-configuration Status=Enabled
  aws s3api put-public-access-block --bucket "$BUCKET" --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
fi

tf() { terraform -chdir=infra "$@"; }
tf init -input=false -backend-config="bucket=$BUCKET" -backend-config="key=neuralgist/terraform.tfstate" -backend-config="region=$REGION" -backend-config="use_lockfile=true" >/dev/null

if [[ "$MODE" == "--migrate" ]]; then
  DATABASE_URL=$(aws ssm get-parameter --name /neuralgist/database_url --with-decryption --query Parameter.Value --output text)
  export DATABASE_URL PGSSLROOTCERT=certs/rds-global-bundle.pem
  npx prisma migrate deploy
  [[ -n "${ADMIN_PASSWORD:-}" ]] && npx prisma db seed || echo "ADMIN_PASSWORD not set: skipping seed"
  exit 0
fi

if [[ "$MODE" != "--infra" ]]; then
  # The Lambda references the image by digest, so the repo must exist before the first build.
  tf apply -input=false -auto-approve -var "admin_cidr=$ADMIN_CIDR" -target=aws_ecr_repository.app >/dev/null
  REPO=$(tf output -raw ecr_repository)
  aws ecr get-login-password --region "$REGION" | docker login --username AWS --password-stdin "${REPO%%/*}" >/dev/null
  docker build --platform linux/arm64 -t "${REPO}:latest" .
  docker push --platform linux/arm64 "${REPO}:latest"
fi

tf apply -input=false -auto-approve -var "admin_cidr=$ADMIN_CIDR" "$@"
tf output
