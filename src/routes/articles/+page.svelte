<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { Search } from '@lucide/svelte';
	let { data } = $props();
	const base = $derived(`/articles?${new URLSearchParams({ ...(data.q ? { q: data.q } : {}), ...(data.topic ? { topic: data.topic } : {}) })}`);
</script>

<svelte:head>
	<title>Articles · Neuralgist</title>
	<meta name="description" content="Every published Neuralgist article on AI engineering, searchable by topic." />
</svelte:head>

<section class="container-x py-12">
	<h1 class="font-display text-4xl font-bold">Articles</h1>
	<p class="mt-2 text-muted">{data.total} published · newest first</p>

	<form class="mt-6 flex gap-2" method="GET">
		{#if data.topic}<input type="hidden" name="topic" value={data.topic} />{/if}
		<label class="relative flex-1">
			<Search size={16} class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-dim" />
			<input class="input pl-9" type="search" name="q" value={data.q} placeholder="Search titles and content…" />
		</label>
		<button class="btn-secondary">Search</button>
	</form>

	<div class="mt-4 flex flex-wrap gap-2">
		<a href="/articles{data.q ? `?q=${encodeURIComponent(data.q)}` : ''}" class="tag py-1 {data.topic ? '' : 'border-violet text-ink'}">all</a>
		{#each data.topics as t (t.slug)}
			<a href="/articles?topic={t.slug}{data.q ? `&q=${encodeURIComponent(data.q)}` : ''}" class="tag py-1 hover:text-ink {data.topic === t.slug ? 'border-violet text-ink' : ''}">{t.name}</a>
		{/each}
	</div>

	{#if data.items.length}
		<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.items as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
		<Pagination page={data.page} pages={data.pages} {base} />
	{:else}
		<div class="card mt-8 p-10 text-center text-muted">Nothing matched. Try another topic or a broader search.</div>
	{/if}
</section>
