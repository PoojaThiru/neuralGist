<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import Avatar from '$lib/components/Avatar.svelte';
	import { fmtDate, fmtNum } from '$lib/format';
	import { site } from '$lib/site';
	import { Clock, Eye, PenLine, Trash2 } from '@lucide/svelte';

	let { data, form } = $props();
	const p = $derived(data.post);
	const canEdit = $derived(data.me && (data.me.id === p.author.id || data.me.role === 'ADMIN'));
	const url = $derived(page.url.origin + page.url.pathname);
</script>

<svelte:head>
	<title>{p.title} · Neuralgist</title>
	<meta name="description" content={p.excerpt} />
	<meta property="og:title" content={p.title} />
	<meta property="og:description" content={p.excerpt} />
	<meta property="og:type" content="article" />
	{#if p.coverUrl}<meta property="og:image" content={p.coverUrl} />{/if}
	<meta property="article:published_time" content={p.publishedAt ? new Date(p.publishedAt).toISOString() : ''} />
	{@html `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.excerpt, datePublished: p.publishedAt, author: { '@type': 'Person', name: p.author.name }, publisher: { '@type': 'Organization', name: site.name }, mainEntityOfPage: url })}</script>`}
</svelte:head>

<article class="container-x max-w-3xl py-12">
	{#if p.status !== 'PUBLISHED'}
		<div class="card mb-6 border-amber/40 bg-amber/10 p-3 text-sm text-amber">
			This article is <strong>{p.status.toLowerCase()}</strong> — only you{data.me?.role === 'ADMIN' ? ' and admins' : ''} can see it.
		</div>
	{/if}
	<header>
		<div class="flex flex-wrap items-center gap-2">
			<a href="/topics/{p.topic.slug}" class="tag hover:border-violet hover:text-ink">{p.topic.name}</a>
			{#if p.featured}<span class="tag border-lime/40 text-lime">featured</span>{/if}
			{#if canEdit}<a href="/write/{p.id}" class="btn-ghost ml-auto h-8 px-2 text-xs"><PenLine size={14} /> Edit</a>{/if}
		</div>
		<h1 class="font-display mt-4 text-3xl font-bold leading-tight sm:text-5xl">{p.title}</h1>
		<p class="mt-4 text-lg text-muted">{p.excerpt}</p>
		<div class="mt-6 flex flex-wrap items-center gap-3 text-sm text-dim">
			<a href="/u/{p.author.username}" class="flex items-center gap-2 hover:text-ink">
				<Avatar name={p.author.name} src={p.author.avatarUrl} size={32} />
				<span class="font-medium text-ink">{p.author.name}</span>
			</a>
			<span>·</span>
			<span>{fmtDate(p.publishedAt ?? p.createdAt)}</span>
			<span class="flex items-center gap-1"><Clock size={14} /> {p.readingMinutes} min read</span>
			<span class="flex items-center gap-1"><Eye size={14} /> {fmtNum(p.views)}</span>
		</div>
	</header>

	{#if p.coverUrl}
		<img src={p.coverUrl} alt="" class="mt-8 w-full rounded-2xl border border-line" />
	{/if}

	<div class="prose-ng mt-10">{@html p.html}</div>

	<footer class="mt-14 border-t border-line pt-8">
		<div class="card flex items-start gap-4 p-5">
			<Avatar name={p.author.name} src={p.author.avatarUrl} size={48} />
			<div>
				<p class="text-xs uppercase tracking-wide text-dim">Written by</p>
				<a href="/u/{p.author.username}" class="font-display text-lg font-semibold hover:text-cyan">{p.author.name}</a>
				{#if p.author.bio}<p class="mt-1 text-sm text-muted">{p.author.bio}</p>{/if}
			</div>
		</div>

		{#if data.related.length}
			<h2 class="font-display mt-10 text-xl font-semibold">More on {p.topic.name}</h2>
			<ul class="mt-3 space-y-2">
				{#each data.related as r (r.slug)}
					<li><a href="/articles/{r.slug}" class="text-muted hover:text-ink">{r.title} <span class="font-mono text-xs text-dim">· {r.readingMinutes} min</span></a></li>
				{/each}
			</ul>
		{/if}

		<section id="comments" class="mt-12">
			<h2 class="font-display text-xl font-semibold">Discussion <span class="font-mono text-sm text-dim">({p.comments.length})</span></h2>
			<ul class="mt-4 space-y-4">
				{#each p.comments as c (c.id)}
					<li class="card p-4">
						<div class="flex items-center gap-2 text-xs text-dim">
							<Avatar name={c.author.name} src={c.author.avatarUrl} size={22} />
							<a href="/u/{c.author.username}" class="font-medium text-muted hover:text-ink">{c.author.name}</a>
							<span>· {fmtDate(c.createdAt)}</span>
							{#if data.me && (data.me.id === c.authorId || data.me.id === p.author.id || data.me.role === 'ADMIN')}
								<form method="POST" action="?/deleteComment" class="ml-auto" use:enhance>
									<input type="hidden" name="id" value={c.id} />
									<button class="btn-ghost h-7 px-2 text-xs" aria-label="Delete comment"><Trash2 size={13} /></button>
								</form>
							{/if}
						</div>
						<p class="mt-2 text-sm whitespace-pre-wrap">{c.content}</p>
					</li>
				{:else}
					<li class="text-sm text-muted">No comments yet. Start the thread.</li>
				{/each}
			</ul>
			{#if data.me && p.status === 'PUBLISHED'}
				<form method="POST" action="?/comment" class="mt-5" use:enhance>
					<textarea name="content" class="input min-h-24" placeholder="Add to the discussion…" required minlength="2" maxlength="2000"></textarea>
					{#if form?.commentError}<p class="mt-2 text-sm text-rose">{form.commentError}</p>{/if}
					<button class="btn-primary mt-3">Post comment</button>
				</form>
			{:else if p.status === 'PUBLISHED'}
				<p class="mt-5 text-sm text-muted"><a href="/login?next=/articles/{p.slug}#comments" class="text-cyan">Log in</a> to join the discussion.</p>
			{/if}
		</section>
	</footer>
</article>
