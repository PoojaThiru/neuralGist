import { timingSafeEqual } from 'node:crypto';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { db } from './db';
import type { RadioCallback, RadioJob } from '$lib/radio';

const STALE_MS = 20 * 60 * 1000;
const WEEK_MS = 7 * 86_400_000;

/** The worker authenticates with a shared secret header (constant-time compare). */
export function workerAuthorized(request: Request): boolean {
	const secret = env.RADIO_SECRET;
	const got = request.headers.get('x-radio-secret') ?? '';
	if (!secret) return false;
	const a = Buffer.from(secret);
	const b = Buffer.from(got);
	return a.length === b.length && timingSafeEqual(a, b);
}

export async function getSetting(key: string, fallback = ''): Promise<string> {
	return (await db.setting.findUnique({ where: { key } }))?.value ?? fallback;
}
export async function setSetting(key: string, value: string) {
	await db.setting.upsert({ where: { key }, update: { value }, create: { key, value } });
}

/**
 * Called by the worker on every poll. Times out stuck jobs, creates the weekly auto episode when due,
 * then atomically claims the oldest queued episode and returns its source material (or null).
 */
export async function claimJob(): Promise<RadioJob | null> {
	await db.episode.updateMany({
		where: { status: 'GENERATING', updatedAt: { lt: new Date(Date.now() - STALE_MS) } },
		data: { status: 'FAILED', error: 'Generation timed out.' }
	});

	if ((await getSetting('radio.autoWeekly', 'false')) === 'true') {
		const [busy, recentAuto] = await Promise.all([
			db.episode.count({ where: { status: { in: ['QUEUED', 'GENERATING'] } } }),
			db.episode.count({ where: { auto: true, createdAt: { gt: new Date(Date.now() - WEEK_MS) } } })
		]);
		if (!busy && !recentAuto) await db.episode.create({ data: { auto: true } });
	}

	const next = await db.episode.findFirst({ where: { status: 'QUEUED' }, orderBy: { createdAt: 'asc' } });
	if (!next) return null;
	const claimed = await db.episode.updateMany({
		where: { id: next.id, status: 'QUEUED' },
		data: { status: 'GENERATING', attempts: { increment: 1 }, error: null }
	});
	if (claimed.count !== 1) return null;

	const select = { slug: true, title: true, content: true, topic: { select: { name: true } } } as const;
	let posts: { slug: string; title: string; content: string; topic: { name: string } }[] = [];
	if (next.sourceSlugs.length) {
		posts = await db.post.findMany({ where: { slug: { in: next.sourceSlugs }, status: 'PUBLISHED' }, select });
	} else if (!next.theme) {
		// No theme and no picks: the three newest articles that no earlier episode has covered.
		const used = new Set(
			(await db.episode.findMany({ where: { status: { in: ['READY', 'PUBLISHED'] } }, select: { sourceSlugs: true } })).flatMap((e) => e.sourceSlugs)
		);
		const recent = await db.post.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, take: 30, select });
		posts = recent.filter((p) => !used.has(p.slug)).slice(0, 3);
		if (!posts.length) posts = recent.slice(0, 3);
		await db.episode.update({ where: { id: next.id }, data: { sourceSlugs: posts.map((p) => p.slug) } });
	}

	const base = (publicEnv.PUBLIC_SITE_URL || 'https://neuralgist.ai').replace(/\/$/, '');
	return {
		episodeId: next.id,
		theme: next.theme,
		articles: posts.map((p) => ({ title: p.title, topic: p.topic.name, url: `${base}/articles/${p.slug}`, content: p.content.slice(0, 8000) }))
	};
}

export async function completeJob(cb: RadioCallback): Promise<boolean> {
	const ep = await db.episode.findUnique({ where: { id: cb.episodeId }, select: { status: true } });
	if (!ep || ep.status !== 'GENERATING') return false;
	if (!cb.ok) {
		await db.episode.update({ where: { id: cb.episodeId }, data: { status: 'FAILED', error: cb.error } });
		return true;
	}
	const autoPublish = (await getSetting('radio.autoPublish', 'false')) === 'true';
	await db.episode.update({
		where: { id: cb.episodeId },
		data: {
			title: cb.title,
			summary: cb.summary,
			transcript: cb.lines,
			audioPath: cb.audioPath,
			durationSec: cb.durationSec,
			characters: cb.characters,
			status: autoPublish ? 'PUBLISHED' : 'READY',
			publishedAt: autoPublish ? new Date() : null,
			error: null
		}
	});
	return true;
}
