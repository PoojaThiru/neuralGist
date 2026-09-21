# Neuralgist — SvelteKit (adapter-node). Runs anywhere Node runs; the Lambda Web Adapter layer lets the
# identical image run on AWS Lambda behind CloudFront (same pattern as admitcrew).
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .
RUN npx svelte-kit sync && npx prisma generate && npm run build && npm prune --omit=dev

FROM node:22-slim
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
WORKDIR /app
ENV NODE_ENV=production PORT=8080 AWS_LWA_PORT=8080 HOST=0.0.0.0 AWS_LWA_READINESS_CHECK_PATH=/health
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
CMD ["node", "build"]
