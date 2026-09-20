import slugify from 'slugify';
import { db } from './db';

export function toSlug(s: string): string {
	return slugify(s, { lower: true, strict: true, trim: true }).slice(0, 80) || 'post';
}

/** A slug unique among posts; appends -2, -3… on collision (ignoring `exceptId`). */
export async function uniquePostSlug(title: string, exceptId?: string): Promise<string> {
	const base = toSlug(title);
	let slug = base;
	for (let i = 2; i < 1000; i++) {
		const hit = await db.post.findUnique({ where: { slug }, select: { id: true } });
		if (!hit || hit.id === exceptId) return slug;
		slug = `${base}-${i}`;
	}
	return `${base}-${Date.now()}`;
}
