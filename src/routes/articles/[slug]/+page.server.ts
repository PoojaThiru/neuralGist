import { error, fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { renderMarkdown } from '$lib/server/markdown';
import { currentUser, requireUser } from '$lib/server/guard';
import { limited } from '$lib/server/ratelimit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	const post = await db.post.findUnique({
		where: { slug: event.params.slug },
		include: {
			author: { select: { id: true, username: true, name: true, avatarUrl: true, bio: true } },
			topic: { select: { slug: true, name: true, section: true } },
			comments: { orderBy: { createdAt: 'asc' }, include: { author: { select: { username: true, name: true, avatarUrl: true } } } }
		}
	});
	if (!post) error(404, 'Article not found');
	const me = await currentUser(event);
	const canSee = post.status === 'PUBLISHED' || me?.id === post.authorId || me?.role === 'ADMIN';
	if (!canSee) error(404, 'Article not found');
	if (post.status === 'PUBLISHED' && me?.id !== post.authorId) {
		db.post.update({ where: { id: post.id }, data: { views: { increment: 1 } } }).catch(() => {});
	}
	const related = await db.post.findMany({
		where: { status: 'PUBLISHED', topicId: post.topicId, id: { not: post.id } },
		select: { slug: true, title: true, readingMinutes: true },
		orderBy: { publishedAt: 'desc' },
		take: 4
	});
	const { content, ...rest } = post;
	return { post: { ...rest, html: renderMarkdown(content) }, related, me: me ? { id: me.id, role: me.role } : null };
};

const commentSchema = z.object({ content: z.string().trim().min(2).max(2000) });

export const actions: Actions = {
	comment: async (event) => {
		const me = await requireUser(event);
		const post = await db.post.findUnique({ where: { slug: event.params.slug }, select: { id: true, status: true } });
		if (!post || post.status !== 'PUBLISHED') return fail(404, { commentError: 'Article not found.' });
		const parsed = commentSchema.safeParse(Object.fromEntries(await event.request.formData()));
		if (!parsed.success) return fail(400, { commentError: 'Comments need to be 2–2000 characters.' });
		if (limited(`comment:${me.id}`, 10, 600)) return fail(429, { commentError: 'Slow down — try again in a few minutes.' });
		await db.comment.create({ data: { content: parsed.data.content, postId: post.id, authorId: me.id } });
		return { commented: true };
	},
	deleteComment: async (event) => {
		const me = await requireUser(event);
		const id = String((await event.request.formData()).get('id') ?? '');
		const c = await db.comment.findUnique({ where: { id }, select: { authorId: true, post: { select: { authorId: true } } } });
		if (!c) return fail(404, { commentError: 'Gone already.' });
		if (c.authorId !== me.id && c.post.authorId !== me.id && me.role !== 'ADMIN') return fail(403, { commentError: 'Not yours to delete.' });
		await db.comment.delete({ where: { id } });
		redirect(303, `/articles/${event.params.slug}#comments`);
	}
};
