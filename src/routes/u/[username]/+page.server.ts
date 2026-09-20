import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { postCardSelect } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const user = await db.user.findUnique({
		where: { username: params.username.toLowerCase() },
		select: { id: true, username: true, name: true, bio: true, website: true, avatarUrl: true, role: true, createdAt: true, isBanned: true }
	});
	if (!user || user.isBanned) error(404, 'No such member');
	const posts = await db.post.findMany({ where: { authorId: user.id, status: 'PUBLISHED' }, select: postCardSelect, orderBy: { publishedAt: 'desc' } });
	return { user, posts };
};
