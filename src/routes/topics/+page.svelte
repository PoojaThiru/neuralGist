<script lang="ts">
	import { SECTIONS } from '$lib/site';
	let { data } = $props();
</script>

<svelte:head>
	<title>Topics · NeuralGist</title>
	<meta name="description" content="Foundations, trends, patterns and tooling: every topic NeuralGist covers." />
</svelte:head>

<section class="container-x py-12">
	<h1 class="font-display text-4xl font-bold">Topics</h1>
	<p class="mt-2 max-w-xl text-muted">Four layers, from the math up to the plumbing. Pick a layer, pick a topic.</p>
	{#each SECTIONS as s (s.key)}
		<div id={s.key.toLowerCase()} class="mt-12 scroll-mt-24">
			<p class="font-mono text-xs text-cyan">// {s.label.toLowerCase()}</p>
			<h2 class="font-display mt-1 text-2xl font-bold">{s.label}</h2>
			<p class="text-sm text-muted">{s.blurb}</p>
			<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.topics.filter((t) => t.section === s.key) as t (t.id)}
					<a href="/topics/{t.slug}" class="card p-5 transition-colors hover:border-violet">
						<h3 class="font-display text-lg font-semibold">{t.name}</h3>
						<p class="mt-1 line-clamp-2 text-sm text-muted">{t.description}</p>
						<p class="mt-3 font-mono text-xs text-dim">{t._count.posts} article{t._count.posts === 1 ? '' : 's'}</p>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</section>
