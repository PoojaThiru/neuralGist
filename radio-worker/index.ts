// NeuralGist Radio worker (AWS Lambda, Node 22, outside the VPC so it can reach Anthropic and ElevenLabs).
// Each invocation: ask the site for a queued episode → Claude writes a two-host script → ElevenLabs v3 voices it
// (text-to-dialogue) → MP3 to S3 (served by CloudFront at /media/radio/…) → report back to the site.
import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { HOSTS, JobSchema, ScriptSchema, SHOW, type Line, type RadioCallback, type RadioJob, type Script } from '../src/lib/radio';

const env = process.env;
const SITE = (env.SITE_URL ?? 'https://neuralgist.ai').replace(/\/$/, '');
const TARGET_WORDS = Number(env.RADIO_TARGET_WORDS ?? 1100); // ~7 minutes of audio
const MAX_CHARS = Number(env.RADIO_MAX_CHARS ?? 9000); // hard cap on voiced characters (ElevenLabs credits)
const CHUNK_CHARS = 1800; // per text-to-dialogue request
const MP3_KBPS = 128;

const SYSTEM = `You write ${SHOW.name}, a short audio show from NeuralGist (neuralgist.ai), a student-run publication about how modern AI actually gets built. Listeners are students and working engineers who want substance without hype, often listening while commuting or coding.

The hosts are friends who sometimes genuinely disagree. Neither one lectures.
- Theo: ${HOSTS.theo.blurb}
- Maya: ${HOSTS.maya.blurb}

Write the episode as spoken dialogue.
- Open with a one- or two-line hook, then a quick welcome that names the show. Close with a short sign-off that points listeners to the articles on neuralgist dot A I.
- Build the conversation from the source articles. Explain ideas with concrete examples and analogies, the way you'd explain them to a smart friend, and push on the trade-offs.
- Stay accurate. Don't invent statistics, quotes, product announcements, release dates, or claims about specific companies or people. If the sources don't give a number, talk about it qualitatively.
- This is audio: no markdown, lists, URLs, code, or stage directions. Say "neuralgist dot A I" for the site. Most turns are one to four sentences, with an occasional longer explanation. Real conversations have quick agreements, follow-up questions, and the odd interruption.
- You may start a line with one ElevenLabs audio tag in square brackets to shape delivery: [laughs], [chuckles], [curious], [thoughtful], [excited], [sighs], [warmly]. Use one every few lines at most.
- The title is specific and inviting (never "Episode 1"). The summary is one or two sentences for the episode list.`;

function userMessage(job: RadioJob): string {
	const theme = job.theme?.trim() || 'Find the thread that connects these articles and build the episode around it.';
	const articles = job.articles
		.map((a) => `<article title="${a.title.replace(/"/g, "'")}" topic="${a.topic}">\n${a.content}\n</article>`)
		.join('\n');
	return `<episode>\nTheme: ${theme}\nLength: about ${TARGET_WORDS} words of dialogue.\n</episode>\n${articles ? `<articles>\n${articles}\n</articles>\n` : ''}Write the episode.`;
}

export async function writeScript(job: RadioJob): Promise<Script> {
	const client = new Anthropic(); // ANTHROPIC_API_KEY
	const res = await client.beta.messages.parse({
		model: 'claude-opus-5',
		max_tokens: 16000,
		betas: ['server-side-fallback-2026-07-01'],
		fallbacks: 'default', // if the primary model declines, the API re-runs on a fallback model
		output_config: { effort: 'medium', format: betaZodOutputFormat(ScriptSchema) },
		system: SYSTEM,
		messages: [{ role: 'user', content: userMessage(job) }]
	});
	if (res.stop_reason === 'refusal') throw new Error('The script request was declined.');
	if (res.stop_reason === 'max_tokens') throw new Error('The script was cut off (max_tokens).');
	if (!res.parsed_output) throw new Error('The script did not match the expected format.');
	return tidy(res.parsed_output);
}

/** Drop empty lines and enforce the character cap (keeping the sign-off). */
export function tidy(script: Script): Script {
	let lines: Line[] = script.lines.map((l) => ({ ...l, text: l.text.replace(/\s+/g, ' ').trim() })).filter((l) => l.text);
	const total = () => lines.reduce((n, l) => n + l.text.length, 0);
	if (total() > MAX_CHARS) {
		const outro = lines.slice(-2);
		lines = lines.slice(0, -2);
		while (lines.length && total() + outro.reduce((n, l) => n + l.text.length, 0) > MAX_CHARS) lines.pop();
		lines = [...lines, ...outro];
	}
	if (lines.length < 4) throw new Error('The script came back too short.');
	return { title: script.title.trim().slice(0, 200), summary: script.summary.trim().slice(0, 1000), lines };
}

async function dialogueChunk(lines: Line[]): Promise<Buffer> {
	const body = JSON.stringify({ model_id: 'eleven_v3', inputs: lines.map((l) => ({ text: l.text, voice_id: HOSTS[l.speaker].voiceId })) });
	for (let attempt = 1; ; attempt++) {
		const res = await fetch(`https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_${MP3_KBPS}`, {
			method: 'POST',
			headers: { 'xi-api-key': env.ELEVENLABS_API_KEY ?? '', 'content-type': 'application/json', accept: 'audio/mpeg' },
			body
		});
		if (res.ok) return Buffer.from(await res.arrayBuffer());
		const detail = (await res.text()).slice(0, 300);
		if (attempt >= 3 || (res.status < 500 && res.status !== 429)) throw new Error(`ElevenLabs ${res.status}: ${detail}`);
		await new Promise((r) => setTimeout(r, attempt * 5000));
	}
}

/**
 * Each ElevenLabs response is a standalone MP3: an ID3v2 tag, a LAME "Info"/"Xing" frame that records that chunk's own
 * length, then CBR audio frames. Strip both so the joined chunks form one clean CBR stream whose duration players
 * compute correctly from the bitrate.
 */
export function cleanMp3(buf: Buffer): Buffer {
	let off = 0;
	if (buf.subarray(0, 3).toString('latin1') === 'ID3') {
		const size = ((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f);
		off = 10 + size + (buf[5] & 0x10 ? 10 : 0);
	}
	if (buf[off] === 0xff && (buf[off + 1] & 0xe0) === 0xe0) {
		const h = buf.readUInt32BE(off);
		const version = (h >> 19) & 3; // 3 = MPEG-1
		const brIdx = (h >> 12) & 0xf;
		const srIdx = (h >> 10) & 3;
		const pad = (h >> 9) & 1;
		const bitrates = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
		const rates = [44100, 48000, 32000];
		if (version === 3 && brIdx > 0 && brIdx < 15 && srIdx < 3) {
			const frameLen = Math.floor((144 * bitrates[brIdx] * 1000) / rates[srIdx]) + pad;
			const head = buf.subarray(off, off + 64).toString('latin1');
			if (head.includes('Info') || head.includes('Xing')) off += frameLen;
		}
	}
	return buf.subarray(off);
}

export async function voice(script: Script): Promise<{ audio: Buffer; characters: number }> {
	const chunks: Line[][] = [[]];
	let size = 0;
	for (const line of script.lines) {
		if (size + line.text.length > CHUNK_CHARS && chunks.at(-1)!.length) {
			chunks.push([]);
			size = 0;
		}
		chunks.at(-1)!.push(line);
		size += line.text.length;
	}
	const parts: Buffer[] = [];
	for (const c of chunks) parts.push(cleanMp3(await dialogueChunk(c))); // sequential: stays inside plan concurrency limits
	return { audio: Buffer.concat(parts), characters: script.lines.reduce((n, l) => n + l.text.length, 0) };
}

async function store(episodeId: string, audio: Buffer): Promise<string> {
	const key = `media/radio/${episodeId}.mp3`;
	if (env.LOCAL_MEDIA_DIR) {
		mkdirSync(join(env.LOCAL_MEDIA_DIR, 'media', 'radio'), { recursive: true });
		writeFileSync(join(env.LOCAL_MEDIA_DIR, key), audio);
	} else {
		await new S3Client({}).send(
			new PutObjectCommand({ Bucket: env.MEDIA_BUCKET, Key: key, Body: audio, ContentType: 'audio/mpeg', CacheControl: 'public, max-age=31536000, immutable' })
		);
	}
	return `/${key}`;
}

async function site(path: string, init: RequestInit = {}) {
	return fetch(SITE + path, { ...init, headers: { 'x-radio-secret': env.RADIO_SECRET ?? '', 'content-type': 'application/json', ...(init.headers ?? {}) } });
}

async function report(cb: RadioCallback) {
	const res = await site('/api/radio/callback', { method: 'POST', body: JSON.stringify(cb) });
	if (!res.ok) throw new Error(`callback ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

export async function handler() {
	const res = await site('/api/radio/jobs');
	if (res.status === 204) return { job: null };
	if (!res.ok) throw new Error(`jobs endpoint ${res.status}`);
	const job = JobSchema.parse(await res.json());
	const started = Date.now();
	try {
		const script = await writeScript(job);
		const { audio, characters } = await voice(script);
		const audioPath = await store(job.episodeId, audio);
		const durationSec = Math.round((audio.length * 8) / (MP3_KBPS * 1000));
		await report({ ok: true, episodeId: job.episodeId, title: script.title, summary: script.summary, lines: script.lines, audioPath, durationSec, characters });
		const result = { job: job.episodeId, title: script.title, lines: script.lines.length, characters, durationSec, seconds: Math.round((Date.now() - started) / 1000) };
		console.log(JSON.stringify(result));
		return result;
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		console.error('radio job failed', job.episodeId, message);
		await report({ ok: false, episodeId: job.episodeId, error: message.slice(0, 1000) }).catch(() => {});
		throw e;
	}
}
