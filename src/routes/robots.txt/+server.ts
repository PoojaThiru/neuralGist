import { env } from '$env/dynamic/public';
export const GET = ({ url }: { url: URL }) => {
	const base = (env.PUBLIC_SITE_URL || url.origin).replace(/\/$/, '');
	return new Response(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /write\nDisallow: /dashboard\nDisallow: /settings\nSitemap: ${base}/sitemap.xml\n`, { headers: { 'content-type': 'text/plain' } });
};
