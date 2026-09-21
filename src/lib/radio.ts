// NeuralGist Radio — shared between the site and the radio worker (radio-worker/index.ts). No server-only imports.
import { z } from 'zod';

export const SHOW = { name: 'NeuralGist Radio', tagline: 'Two hosts, one AI idea at a time.' } as const;

// ElevenLabs premade voices. Theo: Brian (deep, resonant American male). Maya: Matilda (warm American female).
export const HOSTS = {
	theo: {
		name: 'Theo',
		voiceId: 'nPczCjzI2devNBz1zQrb',
		blurb: 'Deep, unhurried voice. A systems person who likes infrastructure, failure modes and dry understatement. Always asks what breaks.'
	},
	maya: {
		name: 'Maya',
		voiceId: 'XrExE9yKIg1WjnnlVkGX',
		blurb: 'Warm and quick. Thinks about the people who use these systems and the product decisions behind them. Always asks why it matters to someone building next week.'
	}
} as const;
export type HostKey = keyof typeof HOSTS;

export const LineSchema = z.object({ speaker: z.enum(['theo', 'maya']), text: z.string() });
export type Line = z.infer<typeof LineSchema>;

/** What Claude returns (structured output). Length rules are enforced after parsing, not in the schema. */
export const ScriptSchema = z.object({
	title: z.string(),
	summary: z.string(),
	lines: z.array(LineSchema)
});
export type Script = z.infer<typeof ScriptSchema>;

export const JobSchema = z.object({
	episodeId: z.string(),
	theme: z.string().nullable(),
	articles: z.array(z.object({ title: z.string(), topic: z.string(), url: z.string(), content: z.string() }))
});
export type RadioJob = z.infer<typeof JobSchema>;

export const CallbackSchema = z.discriminatedUnion('ok', [
	z.object({
		ok: z.literal(true),
		episodeId: z.string(),
		title: z.string().min(1).max(200),
		summary: z.string().max(1000),
		lines: z.array(LineSchema).min(1),
		audioPath: z.string().startsWith('/media/radio/'),
		durationSec: z.number().int().min(0),
		characters: z.number().int().min(0)
	}),
	z.object({ ok: z.literal(false), episodeId: z.string(), error: z.string().max(1000) })
]);
export type RadioCallback = z.infer<typeof CallbackSchema>;

/** Remove ElevenLabs v3 audio tags like [laughs] for on-screen transcripts. */
export const stripTags = (s: string) => s.replace(/\[[a-z][a-z ,'-]{0,30}\]\s*/gi, '').trim();

export function fmtDuration(sec: number): string {
	const m = Math.floor(sec / 60);
	const s = Math.max(0, Math.round(sec % 60));
	return `${m}:${String(s).padStart(2, '0')}`;
}
