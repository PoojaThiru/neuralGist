<script lang="ts">
	import VideoEmbed from '$lib/components/VideoEmbed.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Videos · Neuralgist</title>
	<meta name="description" content="Talks, lectures and walkthroughs on AI engineering, curated by Neuralgist." />
</svelte:head>

<section class="container-x py-12">
	<h1 class="font-display text-4xl font-bold">Videos</h1>
	<p class="mt-2 max-w-xl text-muted">Talks and lectures that changed how I think. Curated, not scraped.</p>
	<div class="mt-10 grid gap-8 md:grid-cols-2">
		{#each data.videos as v (v.id)}
			<div>
				<VideoEmbed youtubeId={v.youtubeId} title={v.title} />
				<h2 class="font-display mt-3 text-lg font-semibold">{v.title}</h2>
				{#if v.description}<p class="mt-1 text-sm text-muted">{v.description}</p>{/if}
			</div>
		{:else}
			<p class="text-muted">No videos yet.</p>
		{/each}
	</div>
</section>
