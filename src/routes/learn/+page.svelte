<script lang="ts">
	// Learn — the probability series as a playlist.
	//
	// A table rather than a grid of cards, because these thirteen are a SEQUENCE: someone arriving wants to see where
	// a lesson sits in the run, how long it is, and what it covers, and a card grid hides all three behind a
	// thumbnail. The numbering is real information here, not decoration.
	import { Play, Clock, ListVideo } from '@lucide/svelte';
	import { PROBABILITY, type Lesson } from '$lib/learn.generated';
	import LessonPlayer from '$lib/components/LessonPlayer.svelte';

	let playing = $state<Lesson | null>(null);
	let open = $state<number | null>(null);

	const total = PROBABILITY.reduce((n, l) => {
		const [m, s] = l.runs.split(':').map(Number);
		return n + (m || 0) * 60 + (s || 0);
	}, 0);
	const totalLabel = `${Math.round(total / 60)} minutes`;
</script>

<svelte:head>
	<title>Learn · Probability · NeuralGist</title>
	<meta
		name="description"
		content="A thirteen-part probability series for data science — two hosts, drawn explanations, {totalLabel} end to end."
	/>
</svelte:head>

<section class="container-x py-12">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-[11px] uppercase tracking-[0.12em] text-violet">Series 01</p>
			<h1 class="font-display mt-1 text-4xl font-bold">Probability for Data Science</h1>
			<p class="mt-2 max-w-2xl text-muted">
				Thirteen lessons, in order, from the five words you need to why a ninety-nine percent accurate test does
				not mean what you think. Two hosts — one asking, one explaining — over drawn boards.
			</p>
		</div>
		<dl class="flex gap-6">
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Lessons</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">{PROBABILITY.length}</dd>
			</div>
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Runtime</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">{totalLabel.split(' ')[0]}<span class="text-base font-normal text-muted"> min</span></dd>
			</div>
		</dl>
	</div>

	<ol class="mt-10 overflow-hidden rounded-2xl border border-line">
		{#each PROBABILITY as l (l.n)}
			<li class="border-b border-line last:border-b-0">
				<div class="group flex items-center gap-4 bg-surface px-4 py-4 transition-colors hover:bg-raised sm:px-5">
					<span class="w-8 shrink-0 text-center font-mono text-sm tabular-nums text-dim">{String(l.n).padStart(2, '0')}</span>

					<button
						type="button"
						onclick={() => (open = open === l.n ? null : l.n)}
						class="min-w-0 flex-1 text-left"
						aria-expanded={open === l.n}
					>
						<span class="font-display block truncate text-[15.5px] font-semibold text-ink">{l.title}</span>
						<span class="mt-0.5 flex items-center gap-3 font-mono text-[11px] text-dim">
							<span class="inline-flex items-center gap-1"><Clock size={11} />{l.runs}</span>
							{#if l.chapters.length}
								<span class="inline-flex items-center gap-1"><ListVideo size={11} />{l.chapters.length} chapters</span>
							{/if}
						</span>
					</button>

					<button
						type="button"
						onclick={() => (playing = l)}
						class="play shrink-0"
						aria-label="Play {l.title}"
						title="Play"
					>
						<Play size={16} fill="currentColor" />
					</button>
				</div>

				{#if open === l.n}
					<div class="border-t border-line bg-canvas px-4 py-4 sm:px-5 sm:pl-[4.5rem]">
						<p class="max-w-3xl text-sm leading-relaxed text-muted">{l.summary}</p>
						{#if l.chapters.length}
							<ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1">
								{#each l.chapters as c (c.at)}
									<li class="font-mono text-[11.5px] text-dim">
										<span class="text-violet">{c.at}</span>
										<span class="ml-1.5">{c.title}</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				{/if}
			</li>
		{/each}
	</ol>

	<p class="mt-6 font-mono text-[11px] text-dim">
		Made with FledgePath’s lesson pipeline — scripted, described against a contract, narrated by two voices, drawn
		with Manim, and checked before anyone watches.
	</p>
</section>

{#if playing}
	<LessonPlayer lesson={playing} onclose={() => (playing = null)} />
{/if}

<style>
	/* The play control is the one thing on each row that must read as pressable at a glance. */
	.play {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		border: 1px solid var(--color-line);
		color: var(--color-muted);
		background: var(--color-raised);
		transition:
			background-color 0.15s,
			color 0.15s,
			border-color 0.15s,
			transform 0.15s;
	}
	.play:hover,
	.play:focus-visible {
		background: var(--color-violet);
		border-color: var(--color-violet);
		color: #fff;
		transform: scale(1.06);
	}
	.group:hover .play {
		border-color: color-mix(in oklab, var(--color-violet) 55%, transparent);
		color: var(--color-ink);
	}
</style>
