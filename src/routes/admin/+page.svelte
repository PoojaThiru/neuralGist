<script lang="ts">
	import { fmtDate, fmtNum } from '$lib/format';
	let { data } = $props();
	const tiles = $derived([
		['Members', data.stats.users],
		['Published', data.stats.published],
		['In review', data.stats.pending],
		['Drafts', data.stats.drafts],
		['Comments', data.stats.comments],
		['Total views', fmtNum(data.stats.views)]
	]);
</script>

<svelte:head><title>Admin · Neuralgist</title></svelte:head>

<h1 class="font-display text-2xl font-bold">Overview</h1>
<div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
	{#each tiles as [label, v] (label)}
		<div class="card p-4"><p class="text-xs text-dim">{label}</p><p class="font-display text-2xl font-bold">{v}</p></div>
	{/each}
</div>
<h2 class="font-display mt-10 text-lg font-semibold">Review queue</h2>
<ul class="card mt-3 divide-y divide-line">
	{#each data.recent as p (p.id)}
		<li class="flex items-center gap-3 p-4 text-sm">
			<a href="/articles/{p.slug}" class="font-medium hover:text-cyan">{p.title}</a>
			<span class="text-dim">by {p.author.name} · {fmtDate(p.updatedAt)}</span>
			<a href="/admin/posts" class="btn-ghost ml-auto h-8 px-2 text-xs">Review</a>
		</li>
	{:else}
		<li class="p-4 text-sm text-muted">Queue is empty. Nice.</li>
	{/each}
</ul>
