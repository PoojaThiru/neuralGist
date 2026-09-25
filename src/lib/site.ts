// Site-wide facts. Edit here — nav, footer, About and metadata all read from this file.
export const site = {
	name: 'NeuralGist',
	domain: 'neuralgist.ai',
	tagline: 'Field notes on how modern AI actually gets built.',
	description:
		'NeuralGist is a student-run publication on AI engineering: prompt and context engineering, agent loops, harnesses, MCP servers, model routing, GPUs, observability, and the foundations underneath it all.',
	author: {
		name: 'Pooja Thirupuranthakam',
		role: 'Senior, Artificial Intelligence @ Purdue University',
		blurb:
			'I write about the stuff I actually wrestle with while building: how to shape context for a model, how agent loops go wrong, what a harness is for, and why the semantic layer matters more than the model.'
	},
	// Fill in your handles. Any left blank is hidden automatically.
	social: {
		x: 'https://x.com/',
		linkedin: 'https://www.linkedin.com/in/',
		github: 'https://github.com/',
		youtube: 'https://www.youtube.com/',
		instagram: '',
		email: 'hello@neuralgist.ai'
	},
	nav: [
		{ href: '/articles', label: 'Articles' },
		{ href: '/topics', label: 'Topics' },
		{ href: '/learn', label: 'Learn' },
		{ href: '/design', label: 'Design' },
		{ href: '/videos', label: 'Videos' },
		{ href: '/radio', label: 'Radio' },
		{ href: '/about', label: 'About' }
	]
} as const;

export const SECTIONS = [
	{ key: 'FOUNDATIONS', label: 'Foundations', blurb: 'The ideas everything else is built on.' },
	{ key: 'TRENDS', label: 'Trends', blurb: 'What the field is arguing about this month.' },
	{ key: 'PATTERNS', label: 'Patterns', blurb: 'Architectures that keep showing up in real systems.' },
	{ key: 'TOOLING', label: 'Tooling', blurb: 'The plumbing: servers, workflows, observability.' }
] as const;

export type SectionKey = (typeof SECTIONS)[number]['key'];
export const sectionLabel = (k: string) => SECTIONS.find((s) => s.key === k)?.label ?? k;
