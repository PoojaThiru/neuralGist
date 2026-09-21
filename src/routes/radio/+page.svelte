<script lang="ts">
	import { radio } from '$lib/player.svelte';
	import { HOSTS, SHOW, fmtDuration, stripTags } from '$lib/radio';
	import { fmtDate } from '$lib/format';
	import { Pause, Play } from '@lucide/svelte';

	let { data } = $props();
	const isCurrent = (id: string) => radio.on && radio.current?.id === id;
	function toggle(id: string) {
		if (isCurrent(id)) radio.playing = !radio.playing;
		else void radio.play(id);
	}
</script>

<svelte:head>
	<title>Radio · NeuralGist</title>
	<meta name="description" content="{SHOW.name}: short two-host conversations about AI engineering, built from NeuralGist articles." />
</svelte:head>

<section class="container-x max-w-3xl py-12">
	<p class="font-mono text-xs text-cyan">// on air</p>
	<h1 class="font-display mt-1 text-4xl font-bold">{SHOW.name}</h1>
	<p class="mt-3 text-lg text-muted">{SHOW.tagline} Theo and Maya talk through one idea from the site at a time, in about seven minutes.</p>
	<div class="mt-6 flex flex-wrap items-center gap-3">
		<button class="btn-primary" onclick={() => radio.toggle()} disabled={!data.episodes.length}>
			{#if radio.on}<Pause size={16} /> Turn radio off{:else}<Play size={16} /> Turn radio on{/if}
		</button>
		<p class="text-xs text-dim">Plays newest first, then keeps going.</p>
	</div>

	<div class="card mt-8 grid gap-4 p-5 sm:grid-cols-2">
		{#each Object.values(HOSTS) as h (h.name)}
			<div>
				<p class="font-display font-semibold">{h.name}</p>
				<p class="text-sm text-muted">{h.blurb}</p>
			</div>
		{/each}
		<p class="text-xs text-dim sm:col-span-2">
			Theo and Maya are AI voices. Each episode is written by an AI model from NeuralGist articles and reviewed before it airs. The articles are the source of truth.
		</p>
	</div>

	<h2 class="font-display mt-12 text-2xl font-bold">Episodes</h2>
	<ul class="mt-5 space-y-4">
		{#each data.episodes as ep (ep.id)}
			<li id={ep.id} class="card scroll-mt-24 p-5 {isCurrent(ep.id) ? 'border-violet' : ''}">
				<div class="flex items-start gap-4">
					<button class="btn-primary h-11 w-11 shrink-0 rounded-full p-0" onclick={() => toggle(ep.id)} aria-label={isCurrent(ep.id) && radio.playing ? `Pause ${ep.title}` : `Play ${ep.title}`}>
						{#if isCurrent(ep.id) && radio.playing}<Pause size={18} />{:else}<Play size={18} />{/if}
					</button>
					<div class="min-w-0 flex-1">
						<h3 class="font-display text-lg font-semibold">{ep.title}</h3>
						<p class="mt-1 font-mono text-xs text-dim">{fmtDate(ep.publishedAt)} · {fmtDuration(ep.durationSec)}</p>
						<p class="mt-2 text-sm text-muted">{ep.summary}</p>
						{#if ep.sources.length}
							<p class="mt-3 text-xs text-dim">
								Based on:
								{#each ep.sources as s, i (s.slug)}<a href="/articles/{s.slug}" class="text-cyan hover:underline">{s.title}</a>{i < ep.sources.length - 1 ? ' · ' : ''}{/each}
							</p>
						{/if}
						{#if ep.transcript.length}
							<details class="mt-3">
								<summary class="cursor-pointer text-xs font-semibold text-muted hover:text-ink">Transcript</summary>
								<div class="mt-3 space-y-2 text-sm">
									{#each ep.transcript as line, i (i)}
										<p><span class="font-semibold {line.speaker === 'theo' ? 'text-cyan' : 'text-violet'}">{HOSTS[line.speaker]?.name ?? line.speaker}:</span> {stripTags(line.text)}</p>
									{/each}
								</div>
							</details>
						{/if}
					</div>
				</div>
			</li>
		{:else}
			<li class="card p-8 text-center text-muted">The first episode is being recorded. Check back soon.</li>
		{/each}
	</ul>
</section>
