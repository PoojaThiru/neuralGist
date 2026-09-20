import { db } from '$lib/server/db';
import { env } from '$env/dynamic/public';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const base = (env.PUBLIC_SITE_URL || url.origin).replace(/\/$/, '');
	const [posts, topics, users] = await Promise.all([
		db.post.findMany({ where: { status: 'PUBLISHED' }, select: { slug: true, updatedAt: true } }),
		db.topic.findMany({ select: { slug: true } }),
		db.user.findMany({ where: { posts: { some: { status: 'PUBLISHED' } } }, select: { username: true } })
	]);
	const urls = [
		{ loc: '/', p: '1.0' },
		{ loc: '/articles', p: '0.9' },
		{ loc: '/topics', p: '0.8' },
		{ loc: '/videos', p: '0.6' },
		{ loc: '/about', p: '0.6' },
		...posts.map((p) => ({ loc: `/articles/${p.slug}`, p: '0.8', mod: p.updatedAt.toISOString() })),
		...topics.map((t) => ({ loc: `/topics/${t.slug}`, p: '0.7' })),
		...users.map((u) => ({ loc: `/u/${u.username}`, p: '0.4' }))
	];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((u) => `  <url><loc>${base}${u.loc}</loc>${'mod' in u && u.mod ? `<lastmod>${u.mod}</lastmod>` : ''}<priority>${u.p}</priority></url>`)
		.join('\n')}\n</urlset>`;
	return new Response(xml, { headers: { 'content-type': 'application/xml', 'cache-control': 'public, max-age=3600' } });
};
