import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const episodes = await db.episode.findMany({
		where: { status: 'PUBLISHED', audioPath: { not: null } },
		orderBy: { publishedAt: 'desc' },
		select: { id: true, title: true, summary: true, durationSec: true, publishedAt: true, transcript: true, sourceSlugs: true }
	});
	const slugs = [...new Set(episodes.flatMap((e) => e.sourceSlugs))];
	const posts = await db.post.findMany({ where: { slug: { in: slugs }, status: 'PUBLISHED' }, select: { slug: true, title: true } });
	const titles = Object.fromEntries(posts.map((p) => [p.slug, p.title]));
	return {
		episodes: episodes.map((e) => ({
			...e,
			transcript: (Array.isArray(e.transcript) ? e.transcript : []) as { speaker: 'theo' | 'maya'; text: string }[],
			sources: e.sourceSlugs.filter((s) => titles[s]).map((s) => ({ slug: s, title: titles[s] }))
		}))
	};
};
