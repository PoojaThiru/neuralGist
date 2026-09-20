import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { requireUser } from '$lib/server/guard';
import { hashPassword, verifyPassword } from '$lib/server/password';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => ({ me: await requireUser(event) });

const profile = z.object({
	name: z.string().trim().min(2).max(60),
	bio: z.string().trim().max(280).optional().default(''),
	website: z.union([z.literal(''), z.url().startsWith('https://')]).optional().default(''),
	avatarUrl: z.union([z.literal(''), z.url().startsWith('https://')]).optional().default('')
});
const password = z.object({ current: z.string().min(1), next: z.string().min(8).max(128) });

export const actions: Actions = {
	profile: async (event) => {
		const me = await requireUser(event);
		const parsed = profile.safeParse(Object.fromEntries(await event.request.formData()));
		if (!parsed.success) return fail(400, { profileError: 'Check the fields: name 2–60 chars, links must be https.' });
		const d = parsed.data;
		await db.user.update({ where: { id: me.id }, data: { name: d.name, bio: d.bio || null, website: d.website || null, avatarUrl: d.avatarUrl || null } });
		return { profileSaved: true };
	},
	password: async (event) => {
		const me = await requireUser(event);
		const parsed = password.safeParse(Object.fromEntries(await event.request.formData()));
		if (!parsed.success) return fail(400, { passwordError: 'New password needs at least 8 characters.' });
		const u = await db.user.findUniqueOrThrow({ where: { id: me.id }, select: { passwordHash: true } });
		if (!(await verifyPassword(u.passwordHash, parsed.data.current))) return fail(400, { passwordError: 'Current password is wrong.' });
		await db.user.update({ where: { id: me.id }, data: { passwordHash: await hashPassword(parsed.data.next) } });
		return { passwordSaved: true };
	}
};
