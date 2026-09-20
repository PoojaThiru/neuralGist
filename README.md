# Neuralgist — neuralgist.ai

A student-run publication on AI engineering: prompt & context engineering, agent loops, harnesses, MCP servers,
model routing, GPUs, observability, and the foundations underneath. Members create accounts, write in Markdown,
and submit articles; admins review, publish, feature, and moderate.

## Stack

| Layer | Choice |
|---|---|
| Framework | **SvelteKit 2** (Svelte 5 runes), TypeScript, **Tailwind CSS 4** |
| Server | `@sveltejs/adapter-node` — runs on any Node host, or on AWS Lambda via the Web Adapter (`Dockerfile`) |
| Database | **PostgreSQL** via **Prisma 7** (`@prisma/adapter-pg`) |
| Auth | **Auth.js** (`@auth/sveltekit`): email + password (Argon2id), optional Google / GitHub |
| Content | Markdown → `marked` + `highlight.js`, sanitized with `sanitize-html` |
| Security | CSP with per-render nonces, HSTS, frame denial, rate-limited login/register/comments, CSRF via SvelteKit form actions |

## Features

- Public: home, articles (search + topic filter + pagination), article page with comments and related posts,
  topics grouped into Foundations / Trends / Patterns / Tooling, videos (YouTube), about, member profiles.
- Members: register/login, write & edit in Markdown with live preview, save drafts, submit for review,
  dashboard, profile settings, change password, comment.
- Admin (`/admin`): stats, review queue, publish / unpublish / feature / archive / delete any article,
  members (promote to admin, ban), videos, topics.
- SEO: per-page meta + Open Graph, JSON-LD on articles, `sitemap.xml`, `robots.txt`. `/health` for load balancers.

## Local development

```bash
cp .env.example .env         # then fill in DATABASE_URL, AUTH_SECRET, ADMIN_EMAILS, ADMIN_PASSWORD
npm install                  # also runs `prisma generate`
npm run db:dev               # apply migrations to your local Postgres
npm run db:seed              # topics, 14 starter articles, 3 videos, and your admin account
npm run dev                  # http://localhost:5173
```

The admin account is the first email in `ADMIN_EMAILS` with `ADMIN_PASSWORD`. Any account whose email is
in `ADMIN_EMAILS` is promoted to admin on its next sign-in, so you can add admins without touching the DB.

Useful scripts: `npm run check` (svelte-check), `npm run db:studio` (Prisma Studio), `npm run build && npm start`.

## Editing the site

- `src/lib/site.ts` — name, tagline, author bio, **social links** (blank ones are hidden), nav.
- `src/app.css` — the theme tokens (colors, fonts) and the article typography.
- `content/seed/*.md` — the starter articles (re-run `npm run db:seed` to update them; it upserts).
- Videos and topics are managed in `/admin` once you're logged in.

## Deploying

### Option A — AWS, same pattern as admitcrew (Lambda + CloudFront)

1. `docker build -t neuralgist .` and push to ECR.
2. Lambda from the image (the Web Adapter layer is baked in), env vars from SSM: `DATABASE_URL`, `AUTH_SECRET`,
   `AUTH_URL=https://neuralgist.ai`, `ADMIN_EMAILS`, `PUBLIC_SITE_URL=https://neuralgist.ai`.
3. API Gateway (HTTP) → Lambda; CloudFront in front with the ACM cert for `neuralgist.ai` + `www`.
4. Route 53: alias A/AAAA records for the apex and `www` → the CloudFront distribution.
5. Postgres: Neon / Supabase / Prisma Postgres (free tiers) or RDS. Run `npm run db:migrate` once against it, then `npm run db:seed`.

### Option B — any Node host (Fly.io, Railway, Render, a VPS)

Build the Docker image or run `npm run build && node build` with `PORT` set. Point the domain's A/CNAME at the host
and let it issue TLS. Same env vars as above.

### Optional social sign-in

Set `AUTH_GOOGLE_ID/SECRET` or `AUTH_GITHUB_ID/SECRET` with callback `https://neuralgist.ai/auth/callback/<provider>`;
the buttons appear automatically.

## Database

Schema in `prisma/schema.prisma`: `User` (role USER/ADMIN, ban flag), `Topic` (section + order), `Post`
(DRAFT → PENDING → PUBLISHED / ARCHIVED, featured, views, reading time), `Comment`, `Video`.
Change the schema → `npm run db:dev --name <change>` → commit the migration.
