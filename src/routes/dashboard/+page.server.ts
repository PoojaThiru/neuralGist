import { db } from '$lib/server/db';
import { requireUser } from '$lib/server/guard';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const me = await requireUser(event);
	const posts = await db.post.findMany({
		where: { authorId: me.id },
		orderBy: { updatedAt: 'desc' },
		select: { id: true, slug: true, title: true, status: true, views: true, updatedAt: true, publishedAt: true, topic: { select: { name: true } }, _count: { select: { comments: true } } }
	});
	return { me, posts, saved: event.url.searchParams.get('saved'), deleted: event.url.searchParams.get('deleted') === '1' };
};
