// Auth.js (@auth/sveltekit). Stateless JWT sessions, so any node can verify a request without a session store.
// Credentials (email + password) always; Google / GitHub switch on when their keys are present in the env.
import { SvelteKitAuth, CredentialsSignin } from '@auth/sveltekit';
import Credentials from '@auth/sveltekit/providers/credentials';
import Google from '@auth/sveltekit/providers/google';
import GitHub from '@auth/sveltekit/providers/github';
import type { Provider } from '@auth/sveltekit/providers';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { verifyPassword, fakeVerify, hashPassword } from '$lib/server/password';
import { limited } from '$lib/server/ratelimit';
import { toSlug } from '$lib/server/slug';

const ADMIN_EMAILS = new Set(
	(env.ADMIN_EMAILS ?? env.ADMIN_EMAIL ?? '')
		.split(',')
		.map((e) => e.trim().toLowerCase())
		.filter(Boolean)
);
export const isAdminEmail = (email?: string | null) => Boolean(email && ADMIN_EMAILS.has(email.trim().toLowerCase()));

class RateLimited extends CredentialsSignin {
	code = 'RateLimited';
}
class Banned extends CredentialsSignin {
	code = 'Banned';
}

const providers: Provider[] = [
	Credentials({
		credentials: { email: {}, password: {} },
		authorize: async (creds, request) => {
			const email = String(creds?.email ?? '').trim().toLowerCase();
			const password = String(creds?.password ?? '');
			if (!email || !password) return null;
			const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
			if (limited(`login:${email}`, 10, 900) || limited(`login-ip:${ip}`, 40, 900)) throw new RateLimited();
			const user = await db.user.findUnique({ where: { email } });
			if (!user) {
				await fakeVerify(password);
				return null;
			}
			if (!(await verifyPassword(user.passwordHash, password))) return null;
			if (user.isBanned) throw new Banned();
			// Promote on sign-in if the email is on the allowlist (lets you add admins via env without a DB edit).
			if (user.role !== 'ADMIN' && isAdminEmail(user.email)) {
				await db.user.update({ where: { id: user.id }, data: { role: 'ADMIN' } });
				user.role = 'ADMIN';
			}
			return { id: user.id, email: user.email, name: user.name, image: user.avatarUrl, username: user.username, role: user.role };
		}
	})
];
if (env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET) providers.push(Google);
if (env.AUTH_GITHUB_ID && env.AUTH_GITHUB_SECRET) providers.push(GitHub);

export const enabledOAuth = providers.filter((p) => (typeof p === 'function' ? p() : p).type === 'oauth' || (typeof p === 'function' ? p() : p).type === 'oidc').map((p) => (typeof p === 'function' ? p() : p).id);

/** Social sign-in: find or create the local account for this email. */
async function upsertOAuthUser(email: string, name: string | null | undefined, image: string | null | undefined) {
	const existing = await db.user.findUnique({ where: { email } });
	if (existing) return existing;
	const base = toSlug(email.split('@')[0]).replace(/-/g, '') || 'user';
	let username = base;
	for (let i = 2; await db.user.findUnique({ where: { username }, select: { id: true } }); i++) username = `${base}${i}`;
	return db.user.create({
		data: {
			email,
			username,
			name: name || base,
			avatarUrl: image ?? null,
			passwordHash: await hashPassword(crypto.randomUUID()),
			role: isAdminEmail(email) ? 'ADMIN' : 'USER'
		}
	});
}

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers,
	session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 30 },
	trustHost: true,
	pages: { signIn: '/login', error: '/login' },
	callbacks: {
		async jwt({ token, user, account, trigger, session }) {
			if (user && account?.type !== 'credentials' && user.email) {
				const u = await upsertOAuthUser(user.email, user.name, user.image);
				if (u.isBanned) return null;
				token.sub = u.id;
				token.username = u.username;
				token.role = u.role;
				token.name = u.name;
				token.picture = u.avatarUrl;
			} else if (user) {
				token.sub = user.id;
				token.username = (user as { username?: string }).username;
				token.role = (user as { role?: string }).role;
			}
			if (trigger === 'update' && session?.name) token.name = session.name;
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.sub ?? '';
			(session.user as { username?: string }).username = token.username as string | undefined;
			(session.user as { role?: string }).role = token.role as string | undefined;
			return session;
		}
	}
});
