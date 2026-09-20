import { db } from './db';
import type { Prisma } from '../../generated/prisma/client';

export const postCardSelect = {
	id: true,
	slug: true,
	title: true,
	excerpt: true,
	coverUrl: true,
	featured: true,
	views: true,
	readingMinutes: true,
	publishedAt: true,
	createdAt: true,
	status: true,
	author: { select: { username: true, name: true, avatarUrl: true } },
	topic: { select: { slug: true, name: true, section: true } }
} satisfies Prisma.PostSelect;

export type PostCard = Prisma.PostGetPayload<{ select: typeof postCardSelect }>;

export const PAGE_SIZE = 12;

export async function listPublished(opts: { topic?: string; q?: string; page?: number; section?: string } = {}) {
	const page = Math.max(1, opts.page ?? 1);
	const where: Prisma.PostWhereInput = { status: 'PUBLISHED' };
	if (opts.topic) where.topic = { slug: opts.topic };
	if (opts.section) where.topic = { ...(where.topic as object), section: opts.section as never };
	if (opts.q) {
		where.OR = [
			{ title: { contains: opts.q, mode: 'insensitive' } },
			{ excerpt: { contains: opts.q, mode: 'insensitive' } },
			{ content: { contains: opts.q, mode: 'insensitive' } }
		];
	}
	const [items, total] = await Promise.all([
		db.post.findMany({
			where,
			select: postCardSelect,
			orderBy: [{ publishedAt: 'desc' }],
			skip: (page - 1) * PAGE_SIZE,
			take: PAGE_SIZE
		}),
		db.post.count({ where })
	]);
	return { items, total, page, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}
