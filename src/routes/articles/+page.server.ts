import { db } from '$lib/server/db';
import { listPublished } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q')?.trim() ?? '';
	const topic = url.searchParams.get('topic') ?? '';
	const page = Number(url.searchParams.get('page') ?? '1') || 1;
	const [result, topics] = await Promise.all([listPublished({ q, topic, page }), db.topic.findMany({ orderBy: [{ section: 'asc' }, { order: 'asc' }], select: { slug: true, name: true } })]);
	return { ...result, q, topic, topics };
};
