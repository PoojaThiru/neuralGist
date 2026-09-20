// Shared by /write (new) and /write/[id] (edit). Authors save drafts and submit for review;
// admins publish directly. Every action re-checks ownership — layout loads don't run for actions.
import { fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from './db';
import { requireUser } from './guard';
import { excerptOf, readingMinutes } from './markdown';
import { uniquePostSlug } from './slug';

export const postSchema = z.object({
	title: z.string().trim().min(4, 'Title is too short').max(140, 'Title is too long'),
	excerpt: z.string().trim().max(300, 'Excerpt: 300 characters max').optional().default(''),
	content: z.string().trim().min(50, 'Write at least a paragraph').max(200_000),
	topicId: z.string().min(1, 'Pick a topic'),
	coverUrl: z.union([z.literal(''), z.url('Cover must be an https URL').startsWith('https://')]).optional().default('')
});

export async function loadEditable(event: RequestEvent, id: string) {
	const me = await requireUser(event);
	const post = await db.post.findUnique({ where: { id } });
	if (!post || (post.authorId !== me.id && me.role !== 'ADMIN')) return { me, post: null };
	return { me, post };
}

async function parse(event: RequestEvent) {
	const raw = Object.fromEntries(await event.request.formData());
	const parsed = postSchema.safeParse(raw);
	const values = { title: String(raw.title ?? ''), excerpt: String(raw.excerpt ?? ''), content: String(raw.content ?? ''), topicId: String(raw.topicId ?? ''), coverUrl: String(raw.coverUrl ?? '') };
	return { parsed, values, intent: String(raw.intent ?? 'save') };
}

/** Create or update; `intent` is 'save' (draft) or 'submit' (pending / published for admins). */
export async function savePost(event: RequestEvent, id?: string) {
	const me = await requireUser(event);
	const { parsed, values, intent } = await parse(event);
	if (!parsed.success) return fail(400, { error: parsed.error.issues[0]?.message, values });
	const d = parsed.data;
	const excerpt = d.excerpt || excerptOf(d.content);
	const isAdmin = me.role === 'ADMIN';
	const status = intent === 'submit' ? (isAdmin ? 'PUBLISHED' : 'PENDING') : undefined;

	if (id) {
		const existing = await db.post.findUnique({ where: { id } });
		if (!existing || (existing.authorId !== me.id && !isAdmin)) return fail(403, { error: 'Not your article.', values });
		const nextStatus = status ?? (existing.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT');
		await db.post.update({
			where: { id },
			data: {
				title: d.title,
				excerpt,
				content: d.content,
				topicId: d.topicId,
				coverUrl: d.coverUrl || null,
				readingMinutes: readingMinutes(d.content),
				slug: existing.status === 'PUBLISHED' ? existing.slug : await uniquePostSlug(d.title, id),
				status: nextStatus,
				publishedAt: nextStatus === 'PUBLISHED' && !existing.publishedAt ? new Date() : existing.publishedAt
			}
		});
		redirect(303, nextStatus === 'PUBLISHED' ? `/articles/${existing.status === 'PUBLISHED' ? existing.slug : await uniquePostSlug(d.title, id)}` : `/dashboard?saved=${nextStatus.toLowerCase()}`);
	}

	const post = await db.post.create({
		data: {
			title: d.title,
			excerpt,
			content: d.content,
			topicId: d.topicId,
			coverUrl: d.coverUrl || null,
			readingMinutes: readingMinutes(d.content),
			slug: await uniquePostSlug(d.title),
			status: status ?? 'DRAFT',
			publishedAt: status === 'PUBLISHED' ? new Date() : null,
			authorId: me.id
		}
	});
	redirect(303, post.status === 'PUBLISHED' ? `/articles/${post.slug}` : `/dashboard?saved=${post.status.toLowerCase()}`);
}

export async function deletePost(event: RequestEvent, id: string) {
	const me = await requireUser(event);
	const post = await db.post.findUnique({ where: { id }, select: { authorId: true } });
	if (!post || (post.authorId !== me.id && me.role !== 'ADMIN')) return fail(403, { error: 'Not your article.' });
	await db.post.delete({ where: { id } });
	redirect(303, '/dashboard?deleted=1');
}
