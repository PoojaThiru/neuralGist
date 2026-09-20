import { db } from '$lib/server/db';
import { postCardSelect } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [featured, latest, topics, videos, counts] = await Promise.all([
		db.post.findFirst({ where: { status: 'PUBLISHED', featured: true }, select: postCardSelect, orderBy: { publishedAt: 'desc' } }),
		db.post.findMany({ where: { status: 'PUBLISHED' }, select: postCardSelect, orderBy: { publishedAt: 'desc' }, take: 7 }),
		db.topic.findMany({ orderBy: [{ section: 'asc' }, { order: 'asc' }], include: { _count: { select: { posts: { where: { status: 'PUBLISHED' } } } } } }),
		db.video.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }], take: 3 }),
		Promise.all([db.post.count({ where: { status: 'PUBLISHED' } }), db.user.count()])
	]);
	const hero = featured ?? latest[0] ?? null;
	return {
		hero,
		latest: latest.filter((p) => p.id !== hero?.id).slice(0, 6),
		topics,
		videos,
		stats: { posts: counts[0], members: counts[1] }
	};
};
