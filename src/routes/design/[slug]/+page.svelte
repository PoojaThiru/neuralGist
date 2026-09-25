<script lang="ts">
	import { page } from '$app/state';
	import { pieceBySlug } from '$lib/design';
	import Mermaid from '$lib/components/Mermaid.svelte';

	const piece = $derived(pieceBySlug(page.params.slug ?? ''));
</script>

<svelte:head>
	<title>{piece?.title ?? 'Design'} · NeuralGist</title>
	{#if piece}<meta name="description" content={piece.blurb} />{/if}
</svelte:head>

<section class="container-x py-12">
	<a href="/design" class="font-mono text-[11px] text-violet hover:underline">← Design</a>

	{#if !piece}
		<h1 class="font-display mt-4 text-3xl font-bold">Not found</h1>
		<p class="mt-2 text-muted">There is no piece called “{page.params.slug}”.</p>
	{:else}
		<header class="mt-4 border-b border-line pb-6">
			<h1 class="font-display text-3xl font-bold sm:text-4xl">{piece.title}</h1>
			<p class="mt-3 max-w-3xl text-lg text-muted">{piece.blurb}</p>
			<div class="mt-4 flex flex-wrap gap-2">
				<span class="font-mono text-[11px] text-dim">{piece.minutes} min</span>
				{#each piece.tags as t (t)}
					<span class="rounded-full border border-line px-2 py-0.5 font-mono text-[10.5px] text-dim">{t}</span>
				{/each}
			</div>
		</header>

		<article class="doc mt-8">
			{#each piece.blocks as b, i (i)}
				{#if b.kind === 'h'}
					<h2 class="font-display mt-12 text-2xl font-semibold text-ink">{b.text}</h2>
				{:else if b.kind === 'p'}
					<p class="mt-4 text-[16.5px] leading-[1.8] text-muted">{b.text}</p>
				{:else if b.kind === 'list'}
					<ul class="mt-4 space-y-2 pl-5">
						{#each b.items as item (item)}
							<li class="list-disc text-[16.5px] leading-[1.7] text-muted marker:text-violet">{item}</li>
						{/each}
					</ul>
				{:else if b.kind === 'code'}
					<figure class="full mt-6">
						{#if b.caption}
							<figcaption class="mb-1 font-mono text-[11px] uppercase tracking-wide text-dim">{b.caption}</figcaption>
						{/if}
						<pre class="overflow-x-auto rounded-xl border border-line bg-surface p-5 font-mono text-[13px] leading-relaxed text-ink">{b.text}</pre>
					</figure>
				{:else if b.kind === 'table'}
					<div class="full mt-6 overflow-x-auto rounded-xl border border-line">
						<table class="w-full min-w-[34rem] border-collapse text-[15px]">
							<thead>
								<tr class="bg-raised">
									{#each b.head as h (h)}
										<th class="border-b border-line px-4 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-wide text-dim">{h}</th>
									{/each}
								</tr>
							</thead>
							<tbody>
								{#each b.rows as row, r (r)}
									<tr class="even:bg-surface/60">
										{#each row as cell, c (c)}
											<td class="border-b border-line px-4 py-2.5 align-top leading-relaxed {c === 0 ? 'font-semibold text-ink' : 'text-muted'}">{cell}</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{:else if b.kind === 'note'}
					<aside class="mt-7 rounded-xl border-l-2 border-amber bg-surface px-5 py-4">
						<div class="font-display text-sm font-semibold text-amber">{b.title}</div>
						<p class="mt-1 text-[15.5px] leading-relaxed text-muted">{b.text}</p>
					</aside>
				{:else if b.kind === 'diagram'}
					<div class="full"><Mermaid src={b.src} caption={b.caption} /></div>
				{/if}
			{/each}
		</article>
	{/if}
</section>

<style>
	/* Prose keeps a readable measure; diagrams, tables and code take the page. */
	.doc {
		display: grid;
		grid-template-columns:
			[full-start] minmax(0, 1fr)
			[content-start] minmax(0, 46rem) [content-end]
			minmax(0, 1fr) [full-end];
	}
	.doc > :global(*) {
		grid-column: content;
	}
	.doc > :global(.full) {
		grid-column: full;
	}
	@media (max-width: 62rem) {
		.doc { display: block; }
	}
</style>
