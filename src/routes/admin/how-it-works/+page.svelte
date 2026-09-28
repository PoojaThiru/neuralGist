<script lang="ts">
	// The diagrams are drawn here rather than in an image, so they update when the architecture does — a picture
	// exported once is stale the week after, and this system changed four times in a day.
	import { HOWITWORKS, type Lesson } from '$lib/learn.generated';
	import LessonPlayer from '$lib/components/LessonPlayer.svelte';
	import { Play, Clock } from '@lucide/svelte';

	let playing = $state<Lesson | null>(null);

	const STAGES = [
		{ n: '1', name: 'Brief', out: 'topic, audience, hosts, running example', who: 'person' },
		{ n: '2', name: 'Script', out: 'scenes with narration split into turns', who: 'sonnet' },
		{ n: '3', name: 'Describe', out: 'a spec per scene, against the contract', who: 'haiku' },
		{ n: '4', name: 'Gate', out: 'nothing undescribed reaches a render', who: 'code' },
		{ n: '5', name: 'Proof', out: '480p · 15fps, deliberately cheap', who: 'fargate' },
		{ n: '6', name: 'Rubric', out: 'five scores per scene, from frames', who: 'haiku vision' },
		{ n: '7', name: 'Repair', out: 're-describe and re-render only what failed', who: 'haiku' },
		{ n: '8', name: 'Final', out: '1080p · 60fps, once', who: 'fargate' },
		{ n: '9', name: 'Review', out: 'reads the narration for errors', who: 'haiku' },
		{ n: '10', name: 'Publish', out: 'a person decides', who: 'person' }
	];

	const PIECES = [
		{ k: 'AI service', d: 'app/agent/media.py — owns the job lifecycle', t: 'python' },
		{ k: 'Contract', d: 'app/contracts/scene_spec.py — pure functions, no I/O', t: 'python' },
		{ k: 'Renderer', d: 'render/render.py + house.py — one container per lesson', t: 'container' },
		{ k: 'Job store', d: 'DynamoDB — scenes, specs, events, meter', t: 'aws' },
		{ k: 'Artefacts', d: 'S3 — payload, scenes, final, captions, voice cache', t: 'aws' },
		{ k: 'Compute', d: 'ECS Fargate — 2 vCPU, 8 GB, ~30 at once', t: 'aws' },
		{ k: 'Harness', d: 'harness/board.py, harness/factory.py — operator tools', t: 'python' },
		{ k: 'Delivery', d: 'CloudFront over the media bucket — unauthenticated', t: 'aws' }
	];

	const COSTS = [
		{ part: 'Script + storyboard', drv: 'once per lesson, re-run on a re-draft' },
		{ part: 'Describing scenes', drv: 'per scene, plus one call per contract rejection' },
		{ part: 'Rubric + repair', drv: 'per flagged scene, per round, up to three rounds' },
		{ part: 'Speech', drv: 'per character, cached by voice|model|text' },
		{ part: 'Render', drv: 'scales with runtime; the final pass is 8x the pixels of the proof' }
	];
</script>

<svelte:head>
	<title>How the videos are made · Admin · NeuralGist</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex flex-wrap items-end justify-between gap-3">
	<div>
		<h1 class="font-display text-2xl font-bold">How the videos are made</h1>
		<p class="mt-1 max-w-3xl text-sm text-muted">
			Internal onboarding. Ten lessons plus the diagrams they refer to, kept here rather than exported so they
			change when the system does.
		</p>
	</div>
	<p class="font-mono text-xs text-dim">Admin only · not indexed</p>
</div>

<section class="mt-8">
	<h2 class="font-display text-lg font-bold">The pipeline, end to end</h2>
	<p class="mt-1 text-sm text-muted">One lesson, from a sentence to a published video. Who does each step is in the last column.</p>
	<ol class="mt-4 space-y-1.5">
		{#each STAGES as s (s.n)}
			<li class="flex items-center gap-3 border-l-2 border-violet/40 bg-black/[0.02] py-2 pl-3 dark:bg-white/[0.03]">
				<span class="w-6 shrink-0 text-right font-mono text-xs text-dim">{s.n}</span>
				<span class="w-24 shrink-0 font-semibold">{s.name}</span>
				<span class="min-w-0 flex-1 text-sm text-muted">{s.out}</span>
				<span class="shrink-0 rounded-sm bg-violet/10 px-2 py-0.5 font-mono text-[11px] text-violet">{s.who}</span>
			</li>
		{/each}
	</ol>
	<p class="mt-3 text-xs text-dim">
		Median 53 minutes end to end. Steps 6 and 7 loop up to three times; step 10 is never automatic.
	</p>
</section>

<section class="mt-10">
	<h2 class="font-display text-lg font-bold">The architecture</h2>
	<div class="mt-4 grid gap-3 sm:grid-cols-2">
		{#each PIECES as p (p.k)}
			<div class="border-2 border-slate-900/10 p-3 dark:border-white/10">
				<div class="flex items-baseline justify-between gap-2">
					<span class="font-semibold">{p.k}</span>
					<span class="font-mono text-[11px] text-dim">{p.t}</span>
				</div>
				<div class="mt-1 font-mono text-xs text-muted">{p.d}</div>
			</div>
		{/each}
	</div>
	<p class="mt-3 text-xs text-dim">
		Two boundaries worth knowing: the renderer receives a NAMED list of scene fields, so anything added to a scene
		is invisible to it until it is added there; and the contract never touches the network, which is why its rules
		are tested in milliseconds.
	</p>
</section>

<section class="mt-10">
	<h2 class="font-display text-lg font-bold">What a video costs</h2>
	<div class="mt-4 space-y-1.5">
		{#each COSTS as c (c.part)}
			<div class="flex flex-wrap items-baseline gap-x-3 border-b border-slate-900/10 py-2 dark:border-white/10">
				<span class="w-52 shrink-0 font-semibold">{c.part}</span>
				<span class="min-w-0 flex-1 text-sm text-muted">{c.drv}</span>
			</div>
		{/each}
	</div>
	<p class="mt-3 text-sm text-muted">
		Measured across one day of production, the same pipeline produced lessons at <strong>$2.39</strong> and at
		<strong>$7.22</strong>. The difference was entirely re-work: a clean lesson used 44 model calls, a twice-re-drafted
		one used 88. The lever is catching a defect <em>before</em> a render, not a cheaper model.
	</p>
</section>

<section class="mt-10">
	<h2 class="font-display text-lg font-bold">The lessons</h2>
	{#if !HOWITWORKS.length}
		<p class="mt-3 text-sm text-muted">Rendering. They appear here as they land.</p>
	{/if}
	<ul class="mt-4 divide-y divide-slate-900/10 dark:divide-white/10">
		{#each HOWITWORKS as l (l.n)}
			<li class="flex items-center gap-3 py-3">
				<span class="w-6 shrink-0 text-right font-mono text-xs text-dim">{l.n}</span>
				<button
					type="button"
					class="min-w-0 flex-1 text-left hover:underline"
					onclick={() => (playing = l)}
				>
					<span class="font-semibold">{l.title}</span>
					<span class="mt-0.5 block text-sm text-muted">{l.summary}</span>
				</button>
				<span class="shrink-0 font-mono text-xs text-dim"><Clock class="inline h-3 w-3" /> {l.runs}</span>
				<Play class="h-4 w-4 shrink-0 text-violet" />
			</li>
		{/each}
	</ul>
</section>

{#if playing}
	<LessonPlayer lesson={playing} onclose={() => (playing = null)} />
{/if}
