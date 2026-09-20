import { json, error } from '@sveltejs/kit';
import { renderMarkdown } from '$lib/server/markdown';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!(await locals.auth())?.user?.id) error(401, 'Log in');
	const { content } = (await request.json().catch(() => ({}))) as { content?: string };
	if (typeof content !== 'string' || content.length > 200_000) error(400, 'Bad content');
	return json({ html: renderMarkdown(content) });
};
