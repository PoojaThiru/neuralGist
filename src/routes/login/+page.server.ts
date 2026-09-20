import { redirect, isRedirect } from '@sveltejs/kit';
import { AuthError } from '@auth/core/errors';
import { signIn, enabledOAuth } from '../../auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if ((await locals.auth())?.user?.id) redirect(303, url.searchParams.get('next') || '/');
	return { oauth: enabledOAuth, next: url.searchParams.get('next') || '/', registered: url.searchParams.get('registered') === '1', email: url.searchParams.get('email') ?? '' };
};

export const actions: Actions = {
	// Auth.js's signIn helper throws on a bad password instead of redirecting; turn that into ?error=… so the
	// page can show a message (and keep the ?next= target so the user lands where they were headed).
	default: async (event) => {
		const form = await event.request.clone().formData();
		const next = String(form.get('redirectTo') ?? '/');
		try {
			return await signIn(event);
		} catch (e) {
			if (isRedirect(e)) throw e;
			if (e instanceof AuthError) {
				const code = (e as { code?: string }).code ?? e.type;
				redirect(303, `/login?error=${encodeURIComponent(e.type)}&code=${encodeURIComponent(code)}&next=${encodeURIComponent(next)}`);
			}
			throw e;
		}
	}
};
