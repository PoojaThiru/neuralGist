import { redirect, error, type RequestEvent } from '@sveltejs/kit';
import { db } from './db';

/** The signed-in user, freshly loaded from the DB (role/ban state is live, not the JWT snapshot). */
export async function currentUser(event: RequestEvent) {
	const session = await event.locals.auth();
	const id = session?.user?.id;
	if (!id) return null;
	const user = await db.user.findUnique({
		where: { id },
		select: { id: true, email: true, username: true, name: true, role: true, isBanned: true, avatarUrl: true, bio: true, website: true }
	});
	if (!user || user.isBanned) return null;
	return user;
}

export async function requireUser(event: RequestEvent) {
	const user = await currentUser(event);
	if (!user) redirect(303, `/login?next=${encodeURIComponent(event.url.pathname + event.url.search)}`);
	return user;
}

export async function requireAdmin(event: RequestEvent) {
	const user = await requireUser(event);
	if (user.role !== 'ADMIN') error(403, 'Admins only');
	return user;
}
