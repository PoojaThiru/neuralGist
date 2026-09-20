import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { listPublished } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	const topic = await db.topic.findUnique({ where: { slug: params.slug } });
	if (!topic) error(404, 'Topic not found');
	const page = Number(url.searchParams.get('page') ?? '1') || 1;
	return { topic, ...(await listPublished({ topic: params.slug, page })) };
};
