<script lang="ts">
	// Learn — the video series, one collapsible playlist each.
	//
	// A table rather than a grid of cards, because each series is a SEQUENCE: someone arriving wants to see where a
	// lesson sits in the run, how long it is, and what it covers, and a card grid hides all three behind a thumbnail.
	// The numbering is real information here, not decoration.
	//
	// Collapsible because there is more than one series now (owner, 2026-09-25). Twenty lessons in one flat list is a
	// scroll, not a menu — and on a phone, which is where this gets read, it is a very long scroll. The first series
	// opens; the rest are one tap away and announce their size before you commit to them.
	import { Play, Clock, ListVideo, ChevronDown } from '@lucide/svelte';
	import { PROBABILITY, NEO4J, type Lesson } from '$lib/learn.generated';
	import LessonPlayer from '$lib/components/LessonPlayer.svelte';

	type Series = { key: string; eyebrow: string; title: string; blurb: string; lessons: Lesson[] };

	const SERIES: Series[] = [
		{
			key: 'probability',
			eyebrow: 'Series 01',
			title: 'Probability for Data Science',
			blurb:
				'Thirteen lessons, in order, from the five words you need to why a ninety-nine percent accurate test does not mean what you think.',
			lessons: PROBABILITY
		},
		{
			key: 'neo4j',
			eyebrow: 'Series 02',
			title: 'Neo4j from the Ground Up',
			blurb:
				'Seven lessons on graph databases: what a knowledge graph is, the property graph model, why traversal stays fast, Cypher for reading and writing, embeddings and GraphRAG, and running it in production.',
			lessons: NEO4J
		}
	];

	const secondsOf = (l: Lesson) => {
		const [m, s] = l.runs.split(':').map(Number);
		return (m || 0) * 60 + (s || 0);
	};
	const minutesOf = (ls: Lesson[]) => Math.round(ls.reduce((n, l) => n + secondsOf(l), 0) / 60);

	let playing = $state<Lesson | null>(null);
	let open = $state<string | null>(null);              // which lesson's detail is expanded, as "<series>:<n>"
	let shown = $state<string[]>([SERIES[0].key]);       // which series are expanded

	const toggle = (key: string) =>
		(shown = shown.includes(key) ? shown.filter((k) => k !== key) : [...shown, key]);

	const totalMinutes = minutesOf(SERIES.flatMap((s) => s.lessons));
</script>

<svelte:head>
	<title>Learn · NeuralGist</title>
	<meta
		name="description"
		content="Video series on probability and graph databases — two hosts, drawn explanations, {totalMinutes} minutes end to end."
	/>
</svelte:head>

<section class="container-x py-12">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-[11px] uppercase tracking-[0.12em] text-violet">Learn</p>
			<h1 class="font-display mt-1 text-4xl font-bold">Watch it explained</h1>
			<p class="mt-2 max-w-2xl text-muted">
				Two hosts — one asking, one explaining — over drawn boards. Pick a series.
			</p>
		</div>
		<dl class="flex gap-6">
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Series</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">{SERIES.length}</dd>
			</div>
			<div>
				<dt class="font-mono text-[10.5px] uppercase tracking-wide text-dim">Runtime</dt>
				<dd class="font-display text-2xl font-bold tabular-nums">
					{totalMinutes}<span class="text-base font-normal text-muted"> min</span>
				</dd>
			</div>
		</dl>
	</div>

	{#each SERIES as s (s.key)}
		{@const isOpen = shown.includes(s.key)}
		<div class="mt-8">
			<button
				type="button"
				onclick={() => toggle(s.key)}
				aria-expanded={isOpen}
				class="flex w-full items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-4 text-left transition-colors hover:bg-raised sm:px-5"
			>
				<ChevronDown
					size={18}
					class="shrink-0 text-dim transition-transform duration-200 {isOpen ? '' : '-rotate-90'}"
				/>
				<span class="min-w-0 flex-1">
					<span class="font-mono text-[10.5px] uppercase tracking-[0.12em] text-violet">{s.eyebrow}</span>
					<span class="font-display block text-xl font-bold text-ink">{s.title}</span>
					<span class="mt-1 block max-w-3xl text-[13.5px] leading-relaxed text-muted">{s.blurb}</span>
				</span>
				<span class="shrink-0 text-right font-mono text-[11px] text-dim">
					<span class="block tabular-nums">{s.lessons.length} lessons</span>
					<span class="block tabular-nums">{minutesOf(s.lessons)} min</span>
				</span>
			</button>

			{#if isOpen}
				<ol class="mt-3 overflow-hidden rounded-2xl border border-line">
					{#each s.lessons as l (l.n)}
						{@const id = `${s.key}:${l.n}`}
						<li class="border-b border-line last:border-b-0">
							<div class="group flex items-center gap-4 bg-surface px-4 py-4 transition-colors hover:bg-raised sm:px-5">
								<span class="w-8 shrink-0 text-center font-mono text-sm tabular-nums text-dim">
									{String(l.n).padStart(2, '0')}
								</span>

								<button
									type="button"
									onclick={() => (open = open === id ? null : id)}
									class="min-w-0 flex-1 text-left"
									aria-expanded={open === id}
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

							{#if open === id}
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
			{/if}
		</div>
	{/each}

	<p class="mt-8 font-mono text-[11px] text-dim">
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
