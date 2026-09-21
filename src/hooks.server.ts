import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { handle as authHandle } from './auth';

// Behind CloudFront the API Gateway URL is public; only accept requests carrying the shared header CloudFront adds.
// Skipped when the secret isn't configured (local dev, other hosts). /health stays open for the Lambda readiness probe.
const originGuard: Handle = async ({ event, resolve }) => {
	const secret = env.ORIGIN_VERIFY_SECRET;
	if (secret && event.url.pathname !== '/health' && event.request.headers.get('x-origin-verify') !== secret) {
		return new Response('Forbidden', { status: 403 });
	}
	return resolve(event);
};

const SECURITY_HEADERS: Record<string, string> = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'DENY',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()'
};

const securityHeaders: Handle = async ({ event, resolve }) => {
	let res = await resolve(event);
	try {
		for (const [k, v] of Object.entries(SECURITY_HEADERS)) res.headers.set(k, v);
	} catch {
		res = new Response(res.body, { status: res.status, statusText: res.statusText, headers: res.headers });
		for (const [k, v] of Object.entries(SECURITY_HEADERS)) res.headers.set(k, v);
	}
	return res;
};

export const handle = sequence(originGuard, authHandle, securityHeaders);
