import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

// Public playlist for the radio player: published episodes, newest first.
export const GET: RequestHandler = async () => {
	const episodes = await db.episode.findMany({
		where: { status: 'PUBLISHED', audioPath: { not: null } },
		orderBy: { publishedAt: 'desc' },
		take: 50,
		select: { id: true, title: true, summary: true, audioPath: true, durationSec: true, publishedAt: true }
	});
	return json(
		{ episodes: episodes.map(({ audioPath, ...e }) => ({ ...e, audioUrl: audioPath })) },
		{ headers: { 'cache-control': 'public, max-age=60' } }
	);
};
