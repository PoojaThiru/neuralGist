<script lang="ts">
	import { site, SECTIONS } from '$lib/site';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	const links = [
		{ key: 'x', label: 'X', href: site.social.x },
		{ key: 'linkedin', label: 'LinkedIn', href: site.social.linkedin },
		{ key: 'github', label: 'GitHub', href: site.social.github },
		{ key: 'youtube', label: 'YouTube', href: site.social.youtube },
		{ key: 'email', label: 'Email', href: site.social.email ? `mailto:${site.social.email}` : '' }
	].filter((l) => l.href);
</script>

<svelte:head>
	<title>About · NeuralGist</title>
	<meta name="description" content="Who writes NeuralGist, what it covers, and how to contribute." />
</svelte:head>

<section class="container-x max-w-3xl py-12">
	<p class="font-mono text-xs text-cyan">// about</p>
	<h1 class="font-display mt-1 text-4xl font-bold">Hi, I'm {site.author.name.split(' ')[0]}.</h1>
	<p class="mt-2 text-muted">{site.author.role}</p>

	<div class="prose-ng mt-8">
		<p>{site.author.blurb}</p>
		<p>
			<strong>NeuralGist</strong> started as my own notes: the concepts I kept re-deriving, the patterns I kept seeing in real
			systems, and the trends that were actually changing how people build with models rather than just trending on social
			media. It's now open to anyone who wants to write with the same standard: concrete, honest about trade-offs, and useful
			to someone shipping something next week.
		</p>
		<h2>What we cover</h2>
		<ul>
			{#each SECTIONS as s (s.key)}
				<li><strong>{s.label}</strong> — {s.blurb}</li>
			{/each}
		</ul>
		<h2>How publishing works</h2>
		<ol>
			<li>Create an account and write in Markdown (code blocks, tables and images all work).</li>
			<li>Submit for review. An editor reads it for accuracy and clarity, not for opinion.</li>
			<li>Once it's live, it's yours: your byline, your profile, your discussion thread.</li>
		</ol>
		<p>Ground rules: cite what you borrow, don't paste model output as your own analysis, and be specific.</p>
	</div>

	<div class="mt-10 flex flex-wrap gap-2">
		{#each links as l (l.label)}
			<a href={l.href} target="_blank" rel="noopener noreferrer" class="btn-secondary"><SocialIcon name={l.key as 'x'} size={16} /> {l.label}</a>
		{/each}
	</div>
	<div class="mt-10 flex gap-3">
		<a href="/register" class="btn-primary">Write for NeuralGist</a>
		<a href="/articles" class="btn-secondary">Read the articles</a>
	</div>
</section>
