import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { requireAdmin } from '$lib/server/guard';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q')?.trim() ?? '';
	const users = await db.user.findMany({
		where: q ? { OR: [{ email: { contains: q, mode: 'insensitive' } }, { name: { contains: q, mode: 'insensitive' } }, { username: { contains: q, mode: 'insensitive' } }] } : {},
		orderBy: { createdAt: 'desc' },
		take: 200,
		select: { id: true, email: true, name: true, username: true, role: true, isBanned: true, createdAt: true, _count: { select: { posts: true, comments: true } } }
	});
	return { users, q };
};

export const actions: Actions = {
	role: async (event) => {
		const me = await requireAdmin(event);
		const f = await event.request.formData();
		const id = String(f.get('id') ?? '');
		const role = String(f.get('role') ?? '') === 'ADMIN' ? 'ADMIN' : 'USER';
		if (id === me.id) return fail(400, { error: "You can't change your own role." });
		await db.user.update({ where: { id }, data: { role } });
		return { ok: true };
	},
	ban: async (event) => {
		const me = await requireAdmin(event);
		const f = await event.request.formData();
		const id = String(f.get('id') ?? '');
		if (id === me.id) return fail(400, { error: "You can't ban yourself." });
		const u = await db.user.findUniqueOrThrow({ where: { id }, select: { isBanned: true } });
		await db.user.update({ where: { id }, data: { isBanned: !u.isBanned } });
		return { ok: true };
	}
};
