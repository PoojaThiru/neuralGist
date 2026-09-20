import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [users, published, pending, drafts, comments, views, recent] = await Promise.all([
		db.user.count(),
		db.post.count({ where: { status: 'PUBLISHED' } }),
		db.post.count({ where: { status: 'PENDING' } }),
		db.post.count({ where: { status: 'DRAFT' } }),
		db.comment.count(),
		db.post.aggregate({ _sum: { views: true } }),
		db.post.findMany({ where: { status: 'PENDING' }, orderBy: { updatedAt: 'desc' }, take: 5, select: { id: true, slug: true, title: true, updatedAt: true, author: { select: { name: true } } } })
	]);
	return { stats: { users, published, pending, drafts, comments, views: views._sum.views ?? 0 }, recent };
};
