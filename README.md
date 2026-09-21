# NeuralGist — neuralgist.ai

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

### Option A — AWS (what's live): Lambda + API Gateway + CloudFront + RDS, via Terraform in `infra/`

State: S3 bucket `neuralgist-tfstate-<account>`, key `neuralgist/terraform.tfstate`. Everything is tagged `Project=neuralgist`.

```bash
./infra/deploy.sh                     # build arm64 image → ECR → terraform apply → Lambda picks up the new digest
./infra/deploy.sh --infra             # Terraform only
ADMIN_PASSWORD=… ./infra/deploy.sh --migrate   # prisma migrate deploy + seed against RDS (from an allowed IP)
```

First-time DNS (two phases, so the first apply doesn't block on the registrar):
1. Apply once; take `nameservers` from the output and set them as Custom DNS at Namecheap for neuralgist.ai.
2. When `dig NS neuralgist.ai` shows the AWS servers, run `./infra/deploy.sh --infra -var dns_ready=true`. That validates the
   certificate, creates the CloudFront distribution and the apex/www alias records.

The RDS security group only admits the Lambda and `admin_cidr` (your current IP, auto-detected by deploy.sh). The app verifies
the database's TLS certificate against Amazon's CA bundle in `certs/`.

#### Original notes

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

## NeuralGist Radio

Two AI hosts, **Theo** (ElevenLabs "Brian", deep male) and **Maya** ("Matilda", warm female), talk through NeuralGist
articles in roughly seven-minute episodes. Visitors press **Radio** in the header; a player docks at the bottom of the page and
keeps playing across navigation, newest episode first. Episodes, transcripts and sources are listed at `/radio`.

**How an episode is made**

1. An admin queues one at `/admin/radio` (optional theme + up to 5 source articles), or the weekly auto-schedule does.
2. The `neuralgist-radio` Lambda (outside the VPC) polls `GET /api/radio/jobs` every 5 minutes with the `x-radio-secret` header
   and claims the oldest queued episode.
3. Claude (`claude-opus-5`, structured output, server-side refusal fallback) writes the two-host script.
4. ElevenLabs `eleven_v3` text-to-dialogue voices it in ~1,800-character chunks; the MP3 goes to S3 at `media/radio/<id>.mp3`,
   which CloudFront serves at `/media/radio/<id>.mp3`.
5. The worker reports to `POST /api/radio/callback`; the episode becomes READY (or PUBLISHED if auto-publish is on). An admin
   listens and publishes.

**Cost**: roughly 6,000–9,000 ElevenLabs credits per episode (the Creator plan's 100k/month covers about a dozen), plus a few
cents of Claude API usage. Idle polls are free-tier Lambda invocations. Keys come from SSM `/admitcrew/elevenlabs` and
`/admitcrew/anthropic`. To change voices, edit `HOSTS` in `src/lib/radio.ts`.

**Run the worker locally** against the dev server (writes the MP3 into `static/media/radio/`):

```bash
export SITE_URL=http://localhost:5173 RADIO_SECRET=<from .env> LOCAL_MEDIA_DIR=static \
  ANTHROPIC_API_KEY=… ELEVENLABS_API_KEY=… RADIO_TARGET_WORDS=150   # short test episode
npx tsx radio-worker/local.ts
```

## Database

Schema in `prisma/schema.prisma`: `User` (role USER/ADMIN, ban flag), `Topic` (section + order), `Post`
(DRAFT → PENDING → PUBLISHED / ARCHIVED, featured, views, reading time), `Comment`, `Video`.
Change the schema → `npm run db:dev --name <change>` → commit the migration.
