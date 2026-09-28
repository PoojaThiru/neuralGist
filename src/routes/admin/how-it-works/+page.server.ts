import type { PageServerLoad } from './$types';

/**
 * The internal explainer playlist, and the living diagrams beside it.
 *
 * Gated by /admin/+layout.server.ts, which runs requireAdmin on every page under /admin — so there is no separate
 * check here. NOTE, and it is worth a new engineer knowing on day one: that gate protects this PAGE. The lesson
 * videos are served by CloudFront without authentication, so anyone holding an mp4 URL can watch it. Gating the
 * listing is not gating the media, and making it so needs signed URLs or a private distribution.
 */
export const load: PageServerLoad = async () => ({});
