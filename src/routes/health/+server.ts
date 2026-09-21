import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';

// Liveness for the Lambda Web Adapter readiness probe: always 200 once the server is up.
// The body reports DB reachability so a human (or a monitor) can still see a broken connection.
export const GET = async () => {
	let database = 'ok';
	try {
		await db.$queryRaw`SELECT 1`;
	} catch (e) {
		database = e instanceof Error ? e.message.split('\n')[0].slice(0, 200) : 'error';
	}
	return json({ ok: true, database });
};
