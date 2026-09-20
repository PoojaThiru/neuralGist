import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { requireAdmin } from '$lib/server/guard';
import { toSlug } from '$lib/server/slug';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	topics: await db.topic.findMany({ orderBy: [{ section: 'asc' }, { order: 'asc' }], include: { _count: { select: { posts: true } } } })
});

const schema = z.object({
	id: z.string().optional().default(''),
	name: z.string().trim().min(2).max(60),
	description: z.string().trim().min(10).max(300),
	section: z.enum(['FOUNDATIONS', 'TRENDS', 'PATTERNS', 'TOOLING']),
	order: z.coerce.number().int().min(0).max(999).optional().default(0)
});

export const actions: Actions = {
	save: async (event) => {
		await requireAdmin(event);
		const parsed = schema.safeParse(Object.fromEntries(await event.request.formData()));
		if (!parsed.success) return fail(400, { error: 'Name 2–60 chars, description 10–300, pick a section.' });
		const { id, ...d } = parsed.data;
		if (id) await db.topic.update({ where: { id }, data: d });
		else await db.topic.create({ data: { ...d, slug: toSlug(d.name) } });
		return { ok: true };
	},
	delete: async (event) => {
		await requireAdmin(event);
		const id = String((await event.request.formData()).get('id') ?? '');
		const n = await db.post.count({ where: { topicId: id } });
		if (n) return fail(400, { error: `That topic still has ${n} article(s). Move them first.` });
		await db.topic.delete({ where: { id } });
		return { ok: true };
	}
};
