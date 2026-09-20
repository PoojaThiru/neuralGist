import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
import { handle as authHandle } from './auth';

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

export const handle = sequence(authHandle, securityHeaders);
