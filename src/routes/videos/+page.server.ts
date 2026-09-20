import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({ videos: await db.video.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'desc' }] }) });
