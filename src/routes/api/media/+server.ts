import { json } from '@sveltejs/kit';
import { signedUrl, signingConfigured } from '$lib/server/signed-media';
import type { RequestHandler } from './$types';

// A lesson's address, good for a little while. Asked for when a video is pressed rather than minted for every
// lesson on the page: a page with hundreds of signed links is hundreds of links to leak.
//
// LESSONS ARE OPEN ON THIS SITE, so there is one lease and no tiers. What the signature stops is a URL living
// for ever in somebody's notes or being handed around — including, now that the CDN requires it, being used to
// read neuralknowledge.ai's library through this host's door.
export const GET: RequestHandler = async ({ url }) => {
	const path = url.searchParams.get('path') ?? '';
	// only our own media, and nothing that climbs out of it
	if (!/^\/media\/[A-Za-z0-9/_.-]+$/.test(path) || path.includes('..')) {
		return json({ ok: false, error: 'bad path' }, { status: 400 });
	}
	if (!signingConfigured()) return json({ ok: true, url: path, signed: false });
	const signed = await signedUrl(path);
	return signed
		? json({ ok: true, url: signed, signed: true })
		: json({ ok: false, error: 'could not sign' }, { status: 500 });
};
