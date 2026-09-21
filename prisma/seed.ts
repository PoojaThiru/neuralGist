// Seed: topics, the admin account, sample videos and one article per topic from content/seed/*.md.
// Idempotent: re-running updates existing rows instead of duplicating them.
import 'dotenv/config';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { argon2id } from 'hash-wasm';

const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

const TOPICS = [
	['FOUNDATIONS', 'machine-learning', 'Machine Learning', 'The learning loop: models, loss, gradients, generalization, and how not to fool yourself.'],
	['FOUNDATIONS', 'deep-learning', 'Deep Learning', 'Layers, backprop, transformers and attention: the machinery behind modern models.'],
	['FOUNDATIONS', 'models', 'Models', 'Base, instruct, reasoning, open-weight, hosted: what the names mean and how to choose.'],
	['FOUNDATIONS', 'gpus', 'GPUs', 'Memory, bandwidth, batching and precision: enough hardware to make good decisions.'],
	['TRENDS', 'prompt-engineering', 'Prompt Engineering', 'Writing the specification a model can actually follow, and testing it like code.'],
	['TRENDS', 'context-engineering', 'Context Engineering', 'Deciding what goes in the window, in what order, and what gets thrown out.'],
	['TRENDS', 'harness-engineering', 'Harness Engineering', 'The code around the model: tool execution, permissions, sandboxing, recovery.'],
	['TRENDS', 'loop-engineering', 'Loop Engineering', 'Designing the agent loop: state, stop conditions, budgets and failure modes.'],
	['PATTERNS', 'semantic-layer', 'Semantic Layer', 'Defining what your data words mean before a model guesses at SQL.'],
	['PATTERNS', 'chatbots', 'Chatbots & Agents', 'Grounded conversation, tools with side effects, escalation and evaluation.'],
	['PATTERNS', 'model-switching', 'Model Switching', 'Routing tasks to the cheapest model that works, and switching without breakage.'],
	['TOOLING', 'mcp-servers', 'MCP Servers', 'The Model Context Protocol: tools, resources, prompts and how to build a server.'],
	['TOOLING', 'workflows', 'Workflows', 'Chains, routers, parallel fan-out and durable execution for multi-step LLM jobs.'],
	['TOOLING', 'observability', 'Observability', 'Tracing, cost attribution, latency and quality signals for LLM systems.']
] as const;

const VIDEOS = [
	['Intro to Large Language Models — Andrej Karpathy', 'zjkBMFhNj_g', 'The one-hour talk that explains what an LLM is, how it is trained, and where it is going.', 0],
	["Let's build GPT: from scratch, in code — Andrej Karpathy", 'kCc8FmEb1nY', 'Write a transformer from an empty file. The best two hours you can spend on deep learning.', 1],
	['But what is a neural network? — 3Blue1Brown', 'aircAruvnKk', 'The visual intuition for layers, weights and activations.', 2]
] as const;

function frontmatter(md: string) {
	const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!m) throw new Error('missing frontmatter');
	const meta: Record<string, string> = {};
	for (const line of m[1].split('\n')) {
		const i = line.indexOf(':');
		if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
	}
	return { meta, body: m[2].trim() };
}

async function main() {
	for (const [i, [section, slug, name, description]] of TOPICS.entries()) {
		await db.topic.upsert({ where: { slug }, update: { name, description, section, order: i }, create: { slug, name, description, section, order: i } });
	}
	console.log(`topics: ${TOPICS.length}`);

	const email = (process.env.ADMIN_EMAIL ?? process.env.ADMIN_EMAILS?.split(',')[0] ?? 'admin@neuralgist.ai').trim().toLowerCase();
	const password = process.env.ADMIN_PASSWORD;
	if (!password) throw new Error('Set ADMIN_PASSWORD in .env before seeding');
	const salt = crypto.getRandomValues(new Uint8Array(16));
	const passwordHash = await argon2id({ password, salt, parallelism: 1, iterations: 3, memorySize: 19456, hashLength: 32, outputType: 'encoded' });
	const admin = await db.user.upsert({
		where: { email },
		update: { role: 'ADMIN' },
		create: {
			email,
			username: 'pooja',
			name: 'Pooja Thirupuranthakam',
			passwordHash,
			role: 'ADMIN',
			bio: 'Senior in Artificial Intelligence at Purdue. I write about how modern AI systems actually get built.',
			website: 'https://neuralgist.ai'
		}
	});
	console.log(`admin: ${admin.email} (${admin.role})`);

	for (const [i, [title, youtubeId, description, order]] of VIDEOS.entries()) {
		const existing = await db.video.findFirst({ where: { youtubeId } });
		if (!existing) await db.video.create({ data: { title, youtubeId, description, order, addedById: admin.id } });
		void i;
	}
	console.log(`videos: ${VIDEOS.length}`);

	const dir = join(process.cwd(), 'content', 'seed');
	const files = readdirSync(dir).filter((f) => f.endsWith('.md')).sort();
	let n = 0;
	for (const [i, f] of files.entries()) {
		const { meta, body } = frontmatter(readFileSync(join(dir, f), 'utf8'));
		const topic = await db.topic.findUniqueOrThrow({ where: { slug: meta.topic } });
		const slug = f.replace(/\.md$/, '');
		const words = body.split(/\s+/).length;
		// stagger publish dates so the list has an order
		const publishedAt = new Date(Date.now() - (files.length - i) * 86_400_000 * 3);
		const data = {
			title: meta.title,
			excerpt: meta.excerpt,
			content: body,
			topicId: topic.id,
			featured: meta.featured === 'true',
			readingMinutes: Math.max(1, Math.round(words / 220)),
			status: 'PUBLISHED' as const
		};
		await db.post.upsert({ where: { slug }, update: data, create: { ...data, slug, authorId: admin.id, publishedAt } });
		n++;
	}
	console.log(`articles: ${n}`);
}

main()
	.then(() => db.$disconnect())
	.catch((e) => {
		console.error(e);
		process.exit(1);
	});
