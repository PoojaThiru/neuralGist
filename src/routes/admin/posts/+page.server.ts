import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { requireAdmin } from '$lib/server/guard';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const status = url.searchParams.get('status') ?? 'PENDING';
	const posts = await db.post.findMany({
		where: status === 'ALL' ? {} : { status: status as never },
		orderBy: [{ updatedAt: 'desc' }],
		take: 100,
		select: { id: true, slug: true, title: true, status: true, featured: true, views: true, updatedAt: true, author: { select: { name: true, username: true } }, topic: { select: { name: true } } }
	});
	return { posts, status };
};

const act = (fn: (id: string) => Promise<unknown>) => async (event: Parameters<Actions[string]>[0]) => {
	await requireAdmin(event);
	const id = String((await event.request.formData()).get('id') ?? '');
	if (!id) return fail(400);
	await fn(id);
	return { ok: true };
};

export const actions: Actions = {
	publish: act((id) => db.post.update({ where: { id }, data: { status: 'PUBLISHED', publishedAt: new Date() } })),
	unpublish: act((id) => db.post.update({ where: { id }, data: { status: 'DRAFT' } })),
	archive: act((id) => db.post.update({ where: { id }, data: { status: 'ARCHIVED' } })),
	feature: act(async (id) => {
		const p = await db.post.findUniqueOrThrow({ where: { id }, select: { featured: true } });
		return db.post.update({ where: { id }, data: { featured: !p.featured } });
	}),
	delete: act((id) => db.post.delete({ where: { id } }))
};
