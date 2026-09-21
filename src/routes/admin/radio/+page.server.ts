import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { requireAdmin } from '$lib/server/guard';
import { getSetting, setSetting } from '$lib/server/radio';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [episodes, posts, autoWeekly, autoPublish] = await Promise.all([
		db.episode.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
		db.post.findMany({ where: { status: 'PUBLISHED' }, orderBy: { publishedAt: 'desc' }, take: 30, select: { slug: true, title: true } }),
		getSetting('radio.autoWeekly', 'false'),
		getSetting('radio.autoPublish', 'false')
	]);
	return {
		episodes: episodes.map((e) => ({ ...e, lines: Array.isArray(e.transcript) ? e.transcript.length : 0 })),
		posts,
		settings: { autoWeekly: autoWeekly === 'true', autoPublish: autoPublish === 'true' }
	};
};

const idOf = async (request: Request) => String((await request.formData()).get('id') ?? '');

export const actions: Actions = {
	create: async (event) => {
		await requireAdmin(event);
		const f = await event.request.formData();
		const parsed = z.object({ theme: z.string().trim().max(500) }).safeParse({ theme: String(f.get('theme') ?? '') });
		if (!parsed.success) return fail(400, { error: 'Theme: 500 characters max.' });
		const slugs = f.getAll('slugs').map(String).filter(Boolean).slice(0, 5);
		const busy = await db.episode.count({ where: { status: { in: ['QUEUED', 'GENERATING'] } } });
		if (busy >= 3) return fail(400, { error: 'Three episodes are already waiting. Let those finish first.' });
		await db.episode.create({ data: { theme: parsed.data.theme || null, sourceSlugs: slugs } });
		return { queued: true };
	},
	settings: async (event) => {
		await requireAdmin(event);
		const f = await event.request.formData();
		await setSetting('radio.autoWeekly', f.get('autoWeekly') ? 'true' : 'false');
		await setSetting('radio.autoPublish', f.get('autoPublish') ? 'true' : 'false');
		return { saved: true };
	},
	publish: async (event) => {
		await requireAdmin(event);
		const id = await idOf(event.request);
		await db.episode.updateMany({ where: { id, status: 'READY', audioPath: { not: null } }, data: { status: 'PUBLISHED', publishedAt: new Date() } });
		return { ok: true };
	},
	unpublish: async (event) => {
		await requireAdmin(event);
		await db.episode.updateMany({ where: { id: await idOf(event.request), status: 'PUBLISHED' }, data: { status: 'READY' } });
		return { ok: true };
	},
	retry: async (event) => {
		await requireAdmin(event);
		await db.episode.updateMany({ where: { id: await idOf(event.request), status: 'FAILED' }, data: { status: 'QUEUED', error: null } });
		return { ok: true };
	},
	delete: async (event) => {
		await requireAdmin(event);
		await db.episode.deleteMany({ where: { id: await idOf(event.request), status: { not: 'GENERATING' } } });
		return { ok: true };
	}
};
