import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { loadEditable, savePost, deletePost } from '$lib/server/post-actions';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { me, post } = await loadEditable(event, event.params.id);
	if (!post) error(404, 'Article not found');
	const topics = await db.topic.findMany({ orderBy: [{ section: 'asc' }, { order: 'asc' }], select: { id: true, name: true, section: true } });
	return { topics, isAdmin: me.role === 'ADMIN', post };
};

export const actions: Actions = {
	save: (e) => savePost(e, e.params.id),
	delete: (e) => deletePost(e, e.params.id)
};
