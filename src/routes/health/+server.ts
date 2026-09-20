import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
export const GET = async () => {
	try {
		await db.$queryRaw`SELECT 1`;
		return json({ ok: true });
	} catch {
		return json({ ok: false }, { status: 503 });
	}
};
