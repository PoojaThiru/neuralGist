import crypto from 'node:crypto';
import { env } from '$env/dynamic/private';

// SIGNED MEDIA. The files sit in a bucket CloudFront reads; without this anybody with a URL has the lesson for
// ever and can hand it to anybody else. A signed URL is good for a short while and for one path, so a link that
// escapes is a link that stops working — which is the difference between asking and preventing.
//
// WHY THIS SITE NEEDS IT TOO. neuralknowledge.ai and this site are served by different CloudFront distributions
// in front of THE SAME media bucket, and both read media/learn. Requiring a signature at one door and not the
// other is not a lock: on 2026-10-02 the same lesson answered 403 through neuralknowledge.ai and 206 through
// neuralgist.ai, unsigned. A shared library is locked at every door it has, with one key group for both.
//
// The private key never leaves this server. It is read once per container from SSM, because a key fetched on
// every request is a key in a log somewhere eventually.
const KEY_ID = env.CF_KEY_ID ?? '';
const DOMAIN = env.CF_MEDIA_DOMAIN || 'https://neuralgist.ai';

//: Long enough to watch a ten-minute lesson twice over and seek about in it, short enough that a copied link
//: is worthless by the time it is pasted anywhere.
const TTL_SECONDS = 60 * 60 * 3;

let cached: string | null = null;

async function privateKey(): Promise<string | null> {
	if (cached !== null) return cached;
	const inline = env.CF_PRIVATE_KEY;
	if (inline) return (cached = inline.replace(/\\n/g, '\n'));
	const name = env.CF_PRIVATE_KEY_SSM;
	if (!name) return null;
	try {
		const { SSMClient, GetParameterCommand } = await import('@aws-sdk/client-ssm');
		const ssm = new SSMClient({});
		const out = await ssm.send(new GetParameterCommand({ Name: name, WithDecryption: true }));
		return (cached = out.Parameter?.Value ?? null);
	} catch {
		return null;
	}
}

export function signingConfigured(): boolean {
	return Boolean(KEY_ID && (env.CF_PRIVATE_KEY || env.CF_PRIVATE_KEY_SSM));
}

/** CloudFront's canned policy: one URL, one expiry, nothing else to get wrong. */
export async function signedUrl(path: string, ttl = TTL_SECONDS): Promise<string | null> {
	const key = await privateKey();
	if (!key || !KEY_ID) return null;
	const url = path.startsWith('http') ? path : `${DOMAIN}${path.startsWith('/') ? '' : '/'}${path}`;
	const expires = Math.floor(Date.now() / 1000) + ttl;
	const policy = JSON.stringify({
		Statement: [{ Resource: url, Condition: { DateLessThan: { 'AWS:EpochTime': expires } } }]
	});
	try {
		const signature = crypto.createSign('RSA-SHA1').update(policy).sign(key);
		// CloudFront's alphabet: + / = are not safe in a query string and it expects these substitutions
		const safe = signature.toString('base64').replace(/\+/g, '-').replace(/=/g, '_').replace(/\//g, '~');
		const join = url.includes('?') ? '&' : '?';
		return `${url}${join}Expires=${expires}&Signature=${safe}&Key-Pair-Id=${KEY_ID}`;
	} catch {
		return null;
	}
}
