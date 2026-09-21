<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import { fmtDate } from '$lib/format';
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.user.name} · NeuralGist</title>
	<meta name="description" content={data.user.bio ?? `${data.user.name} on NeuralGist`} />
</svelte:head>

<section class="container-x py-12">
	<div class="flex flex-wrap items-center gap-5">
		<Avatar name={data.user.name} src={data.user.avatarUrl} size={72} />
		<div>
			<h1 class="font-display text-3xl font-bold">{data.user.name} {#if data.user.role === 'ADMIN'}<span class="tag ml-2 border-lime/40 align-middle text-lime">editor</span>{/if}</h1>
			<p class="text-sm text-muted">@{data.user.username} · joined {fmtDate(data.user.createdAt)}</p>
			{#if data.user.bio}<p class="mt-2 max-w-xl text-muted">{data.user.bio}</p>{/if}
			{#if data.user.website}<a href={data.user.website} target="_blank" rel="noopener noreferrer" class="mt-1 inline-block text-sm text-cyan">{data.user.website.replace(/^https?:\/\//, '')}</a>{/if}
		</div>
	</div>
	<h2 class="font-display mt-12 text-xl font-semibold">Articles <span class="font-mono text-sm text-dim">({data.posts.length})</span></h2>
	<div class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.posts as post (post.id)}<PostCard {post} />{:else}<p class="text-muted">No published articles yet.</p>{/each}
	</div>
</section>
