import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const topics = await db.topic.findMany({
		orderBy: [{ section: 'asc' }, { order: 'asc' }],
		include: { _count: { select: { posts: { where: { status: 'PUBLISHED' } } } } }
	});
	return { topics };
};
