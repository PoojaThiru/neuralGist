// See https://svelte.dev/docs/kit/types#app.d.ts
import type { Role } from './generated/prisma/client';

declare global {
	namespace App {
		interface Error {
			message: string;
		}
		interface Locals {
			// Provided by @auth/sveltekit's handle — resolves the current session (JWT) without a DB round-trip.
			auth(): Promise<{
				user?: {
					id?: string;
					name?: string | null;
					email?: string | null;
					image?: string | null;
					username?: string;
					role?: Role;
				};
				expires?: string;
			} | null>;
		}
	}
}

export {};
