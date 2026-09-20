import type { LayoutServerLoad } from './$types';

// Resolve the session on the server so the nav renders the right signed-in state on first paint.
export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth();
	const u = session?.user;
	return {
		user: u?.id
			? { id: u.id, name: u.name ?? '', username: u.username ?? '', role: u.role ?? 'USER', image: u.image ?? null }
			: null
	};
};
