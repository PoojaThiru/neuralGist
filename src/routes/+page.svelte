<script lang="ts">
	import { site, SECTIONS } from '$lib/site';
	import PostCard from '$lib/components/PostCard.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import VideoEmbed from '$lib/components/VideoEmbed.svelte';
	import { ArrowRight, Sparkles } from '@lucide/svelte';

	let { data } = $props();
	const bySection = $derived(SECTIONS.map((s) => ({ ...s, topics: data.topics.filter((t) => t.section === s.key) })));
</script>

<svelte:head>
	<title>{site.name} — {site.tagline}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content="{site.name} — {site.tagline}" />
	<meta property="og:description" content={site.description} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden border-b border-line">
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(139,92,246,.25),transparent_70%)]"></div>
	<div class="container-x relative grid gap-10 py-16 sm:py-24 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<p class="tag border-violet/40 text-violet"><Sparkles size={12} class="mr-1" /> a Purdue AI senior's field notes</p>
			<h1 class="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
				How modern AI <span class="gradient-text">actually</span> gets built.
			</h1>
			<p class="mt-5 max-w-xl text-lg text-muted">
				Prompt & context engineering, agent loops, harnesses, MCP servers, model routing, GPUs, observability, and the
				foundations underneath. Written by students, read by builders.
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="/articles" class="btn-primary">Start reading <ArrowRight size={16} /></a>
				<a href="/register" class="btn-secondary">Write for NeuralGist</a>
			</div>
			<dl class="mt-10 flex gap-8 font-mono text-sm text-dim">
				<div><dt class="sr-only">Articles</dt><dd><span class="text-2xl font-semibold text-ink">{data.stats.posts}</span> articles</dd></div>
				<div><dt class="sr-only">Members</dt><dd><span class="text-2xl font-semibold text-ink">{data.stats.members}</span> members</dd></div>
				<div><dt class="sr-only">Topics</dt><dd><span class="text-2xl font-semibold text-ink">{data.topics.length}</span> topics</dd></div>
			</dl>
		</div>
		<div class="lg:col-span-5">
			<div class="card glow p-5 font-mono text-xs leading-relaxed text-muted">
				<p class="text-dim">// what you'll find here</p>
				<p><span class="text-violet">const</span> <span class="text-ink">neuralgist</span> = &#123;</p>
				<p class="pl-4">foundations: [<span class="text-lime">'ml'</span>, <span class="text-lime">'deep learning'</span>, <span class="text-lime">'models'</span>, <span class="text-lime">'gpus'</span>],</p>
				<p class="pl-4">trends: [<span class="text-lime">'prompt eng'</span>, <span class="text-lime">'context eng'</span>, <span class="text-lime">'harnesses'</span>, <span class="text-lime">'loops'</span>],</p>
				<p class="pl-4">patterns: [<span class="text-lime">'semantic layer'</span>, <span class="text-lime">'agents'</span>, <span class="text-lime">'model switching'</span>],</p>
				<p class="pl-4">tooling: [<span class="text-lime">'mcp'</span>, <span class="text-lime">'workflows'</span>, <span class="text-lime">'observability'</span>],</p>
				<p class="pl-4">author: <span class="text-cyan">'purdue ai, class of 2027'</span></p>
				<p>&#125;;</p>
			</div>
		</div>
	</div>
</section>

<!-- Featured -->
{#if data.hero}
	<section class="container-x py-14">
		<SectionHead eyebrow="// featured" title="Start here" href="/articles" />
		<PostCard post={data.hero} big />
	</section>
{/if}

<!-- Latest -->
{#if data.latest.length}
	<section class="container-x py-6">
		<SectionHead eyebrow="// latest" title="Fresh off the notebook" href="/articles" />
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.latest as post (post.id)}
				<PostCard {post} />
			{/each}
		</div>
	</section>
{/if}

<!-- Topics by section -->
<section class="container-x py-14">
	<SectionHead eyebrow="// map" title="Explore by topic" href="/topics" />
	<div class="grid gap-5 md:grid-cols-2">
		{#each bySection as s (s.key)}
			<div class="card p-5">
				<h3 class="font-display text-lg font-semibold">{s.label}</h3>
				<p class="text-sm text-muted">{s.blurb}</p>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each s.topics as t (t.id)}
						<li><a href="/topics/{t.slug}" class="tag py-1 text-xs hover:border-violet hover:text-ink">{t.name} <span class="ml-1 text-dim">{t._count.posts}</span></a></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<!-- Videos -->
{#if data.videos.length}
	<section class="container-x py-6">
		<SectionHead eyebrow="// watch" title="Videos worth your time" href="/videos" />
		<div class="grid gap-5 md:grid-cols-3">
			{#each data.videos as v (v.id)}
				<div>
					<VideoEmbed youtubeId={v.youtubeId} title={v.title} />
					<p class="mt-2 text-sm font-medium">{v.title}</p>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- CTA -->
<section class="container-x py-16">
	<div class="card relative overflow-hidden p-8 text-center sm:p-12">
		<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_100%,rgba(34,211,238,.18),transparent_70%)]"></div>
		<h2 class="font-display relative text-3xl font-bold">Got a take on AI? Publish it here.</h2>
		<p class="relative mx-auto mt-3 max-w-lg text-muted">Create an account, write in Markdown, and submit. Articles are reviewed before they go live so the signal stays high.</p>
		<div class="relative mt-6 flex justify-center gap-3">
			<a href="/register" class="btn-primary">Create an account</a>
			<a href="/about" class="btn-secondary">About the site</a>
		</div>
	</div>
</section>
