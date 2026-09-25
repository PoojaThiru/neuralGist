<script lang="ts">
	import { PIECES } from '$lib/design';
	import { Clock, ArrowRight } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Design · NeuralGist</title>
	<meta name="description" content="Architecture written up properly — the whole path, not a summary." />
</svelte:head>

<section class="container-x py-12">
	<p class="font-mono text-[11px] uppercase tracking-[0.12em] text-violet">Design</p>
	<h1 class="font-display mt-1 text-4xl font-bold">Architecture, written up properly</h1>
	<p class="mt-2 max-w-2xl text-muted">
		Systems explained hop by hop rather than summarised — the port numbers, the version pins, the failure modes and
		what each one actually cost. Written from real systems, after the thing broke.
	</p>

	<div class="mt-10 grid gap-4">
		{#each PIECES as p (p.slug)}
			<a
				href="/design/{p.slug}"
				class="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-violet/50 hover:bg-raised"
			>
				<h2 class="font-display text-xl font-semibold text-ink group-hover:text-violet">{p.title}</h2>
				<p class="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{p.blurb}</p>
				<div class="mt-4 flex flex-wrap items-center gap-3">
					<span class="inline-flex items-center gap-1 font-mono text-[11px] text-dim"><Clock size={11} />{p.minutes} min</span>
					{#each p.tags as t (t)}
						<span class="rounded-full border border-line px-2 py-0.5 font-mono text-[10.5px] text-dim">{t}</span>
					{/each}
					<span class="ml-auto inline-flex items-center gap-1 text-sm font-medium text-violet">
						Read <ArrowRight size={14} />
					</span>
				</div>
			</a>
		{/each}
	</div>
</section>
