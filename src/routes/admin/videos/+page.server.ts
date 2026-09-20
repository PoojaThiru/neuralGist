import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { requireAdmin } from '$lib/server/guard';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({ videos: await db.video.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] }) });

/** Accepts a full YouTube URL or a bare 11-char ID. */
function youtubeId(input: string): string | null {
	const s = input.trim();
	if (/^[\w-]{11}$/.test(s)) return s;
	const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
	return m?.[1] ?? null;
}

const schema = z.object({ title: z.string().trim().min(2).max(140), url: z.string().trim().min(1), description: z.string().trim().max(300).optional().default(''), order: z.coerce.number().int().min(0).max(999).optional().default(0) });

export const actions: Actions = {
	add: async (event) => {
		const me = await requireAdmin(event);
		const parsed = schema.safeParse(Object.fromEntries(await event.request.formData()));
		if (!parsed.success) return fail(400, { error: 'Title 2–140 chars; description up to 300.' });
		const id = youtubeId(parsed.data.url);
		if (!id) return fail(400, { error: 'Paste a YouTube URL or video ID.' });
		await db.video.create({ data: { title: parsed.data.title, youtubeId: id, description: parsed.data.description || null, order: parsed.data.order, addedById: me.id } });
		return { ok: true };
	},
	delete: async (event) => {
		await requireAdmin(event);
		const id = String((await event.request.formData()).get('id') ?? '');
		await db.video.delete({ where: { id } });
		return { ok: true };
	}
};
