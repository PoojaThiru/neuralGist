import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from '$lib/server/db';
import { hashPassword } from '$lib/server/password';
import { limited, clientIp } from '$lib/server/ratelimit';
import { isAdminEmail } from '../../auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if ((await locals.auth())?.user?.id) redirect(303, '/');
	return {};
};

const schema = z.object({
	name: z.string().trim().min(2, 'Name is too short').max(60),
	username: z
		.string()
		.trim()
		.toLowerCase()
		.regex(/^[a-z0-9_]{3,24}$/, 'Username: 3–24 letters, numbers or underscores'),
	email: z.email('Enter a valid email').transform((e) => e.trim().toLowerCase()),
	password: z.string().min(8, 'Password needs at least 8 characters').max(128)
});

export const actions: Actions = {
	default: async ({ request }) => {
		const raw = Object.fromEntries(await request.formData());
		const parsed = schema.safeParse(raw);
		const values = { name: String(raw.name ?? ''), username: String(raw.username ?? ''), email: String(raw.email ?? '') };
		if (!parsed.success) return fail(400, { error: parsed.error.issues[0]?.message ?? 'Check the form.', values });
		if (limited(`register:${clientIp(request)}`, 5, 3600)) return fail(429, { error: 'Too many sign-ups from this network. Try later.', values });
		const { name, username, email, password } = parsed.data;
		const clash = await db.user.findFirst({ where: { OR: [{ email }, { username }] }, select: { email: true } });
		if (clash) return fail(400, { error: clash.email === email ? 'That email already has an account.' : 'That username is taken.', values });
		await db.user.create({ data: { name, username, email, passwordHash: await hashPassword(password), role: isAdminEmail(email) ? 'ADMIN' : 'USER' } });
		redirect(303, `/login?registered=1&email=${encodeURIComponent(email)}`);
	}
};
