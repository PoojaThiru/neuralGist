<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/site';
	import { page } from '$app/state';

	let { children, data } = $props();
	const origin = $derived(page.url.origin);
</script>

<svelte:head>
	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href={origin + page.url.pathname} />
</svelte:head>

<div class="flex min-h-full flex-col">
	<Nav user={data.user} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
