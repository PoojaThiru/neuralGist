import { error, json } from '@sveltejs/kit';
import { claimJob, workerAuthorized } from '$lib/server/radio';
import type { RequestHandler } from './$types';

// Polled by the radio worker every few minutes. 204 = nothing to do.
export const GET: RequestHandler = async ({ request }) => {
	if (!workerAuthorized(request)) error(401, 'Unauthorized');
	const job = await claimJob();
	return job ? json(job) : new Response(null, { status: 204 });
};
