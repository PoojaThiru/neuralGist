import { db } from '$lib/server/db';
import { requireUser } from '$lib/server/guard';
import { savePost } from '$lib/server/post-actions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const me = await requireUser(event);
	const topics = await db.topic.findMany({ orderBy: [{ section: 'asc' }, { order: 'asc' }], select: { id: true, name: true, section: true } });
	return { topics, isAdmin: me.role === 'ADMIN', post: null };
};

export const actions: Actions = { save: (e) => savePost(e) };
