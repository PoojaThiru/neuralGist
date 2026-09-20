import { requireAdmin } from '$lib/server/guard';
import type { LayoutServerLoad } from './$types';
// Server-side gate for every /admin page. Form actions re-verify on their own (layout loads don't run for actions).
export const load: LayoutServerLoad = async (event) => ({ admin: await requireAdmin(event) });
