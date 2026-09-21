<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { sectionLabel } from '$lib/site';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.topic.name} · NeuralGist</title>
	<meta name="description" content={data.topic.description} />
</svelte:head>

<section class="container-x py-12">
	<p class="font-mono text-xs text-cyan">// {sectionLabel(data.topic.section).toLowerCase()}</p>
	<h1 class="font-display mt-1 text-4xl font-bold">{data.topic.name}</h1>
	<p class="mt-3 max-w-2xl text-lg text-muted">{data.topic.description}</p>
	{#if data.items.length}
		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.items as post (post.id)}<PostCard {post} />{/each}
		</div>
		<Pagination page={data.page} pages={data.pages} base="/topics/{data.topic.slug}" />
	{:else}
		<div class="card mt-10 p-10 text-center text-muted">No articles here yet. <a href="/write" class="text-cyan">Write the first one.</a></div>
	{/if}
</section>
