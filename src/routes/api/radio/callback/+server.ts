import { error, json } from '@sveltejs/kit';
import { CallbackSchema } from '$lib/radio';
import { completeJob, workerAuthorized } from '$lib/server/radio';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	if (!workerAuthorized(request)) error(401, 'Unauthorized');
	const parsed = CallbackSchema.safeParse(await request.json().catch(() => null));
	if (!parsed.success) error(400, parsed.error.issues[0]?.message ?? 'Bad payload');
	const accepted = await completeJob(parsed.data);
	return json({ accepted });
};
