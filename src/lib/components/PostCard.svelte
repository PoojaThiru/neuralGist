<script lang="ts">
	import Avatar from './Avatar.svelte';
	import { fmtDate, fmtNum } from '$lib/format';
	import { Clock, Eye } from '@lucide/svelte';

	type Card = {
		slug: string;
		title: string;
		excerpt: string;
		coverUrl: string | null;
		featured: boolean;
		views: number;
		readingMinutes: number;
		publishedAt: Date | string | null;
		author: { username: string; name: string; avatarUrl: string | null };
		topic: { slug: string; name: string };
	};
	let { post, big = false }: { post: Card; big?: boolean } = $props();
</script>

<article class="card group flex h-full flex-col overflow-hidden transition-colors hover:border-dim {big ? 'md:flex-row' : ''}">
	{#if post.coverUrl}
		<a href="/articles/{post.slug}" class="block overflow-hidden {big ? 'md:w-1/2' : ''}">
			<img src={post.coverUrl} alt="" class="aspect-[16/9] w-full object-cover transition-transform group-hover:scale-[1.02] {big ? 'md:h-full' : ''}" loading="lazy" />
		</a>
	{/if}
	<div class="flex flex-1 flex-col p-5 {big ? 'md:p-8' : ''}">
		<div class="flex items-center gap-2">
			<a href="/topics/{post.topic.slug}" class="tag hover:border-violet hover:text-ink">{post.topic.name}</a>
			{#if post.featured}<span class="tag border-lime/40 text-lime">featured</span>{/if}
		</div>
		<h3 class="font-display mt-3 font-bold leading-snug {big ? 'text-2xl md:text-3xl' : 'text-lg'}">
			<a href="/articles/{post.slug}" class="hover:text-cyan">{post.title}</a>
		</h3>
		<p class="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
		<div class="mt-auto flex items-center gap-3 pt-5 text-xs text-dim">
			<a href="/u/{post.author.username}" class="flex items-center gap-2 hover:text-ink">
				<Avatar name={post.author.name} src={post.author.avatarUrl} size={22} />
				<span class="font-medium text-muted">{post.author.name}</span>
			</a>
			<span>·</span>
			<span>{fmtDate(post.publishedAt)}</span>
			<span class="ml-auto flex items-center gap-1"><Clock size={12} /> {post.readingMinutes} min</span>
			<span class="flex items-center gap-1"><Eye size={12} /> {fmtNum(post.views)}</span>
		</div>
	</div>
</article>
