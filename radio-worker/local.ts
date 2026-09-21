// Run one worker poll on this machine: npx tsx radio-worker/local.ts (env: see README → Radio).
import { handler } from './index';
handler().then((r) => console.log(JSON.stringify(r, null, 2)), (e) => { console.error(e); process.exit(1); });
