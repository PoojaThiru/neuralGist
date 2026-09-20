<script lang="ts">
	import { fmtDate, fmtNum } from '$lib/format';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import { PenLine } from '@lucide/svelte';
	let { data } = $props();
	const by = (s: string) => data.posts.filter((p) => p.status === s).length;
</script>

<svelte:head><title>My articles · Neuralgist</title></svelte:head>

<section class="container-x py-12">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-xs text-cyan">// dashboard</p>
			<h1 class="font-display mt-1 text-3xl font-bold">My articles</h1>
		</div>
		<a href="/write" class="btn-primary"><PenLine size={16} /> New article</a>
	</div>
	{#if data.saved}<p class="card mt-6 border-lime/40 bg-lime/10 p-3 text-sm text-lime">{data.saved === 'pending' ? 'Submitted! An editor will review it soon.' : 'Draft saved.'}</p>{/if}
	{#if data.deleted}<p class="card mt-6 border-amber/40 bg-amber/10 p-3 text-sm text-amber">Article deleted.</p>{/if}

	<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
		{#each [['PUBLISHED', 'Published'], ['PENDING', 'In review'], ['DRAFT', 'Drafts'], ['ARCHIVED', 'Archived']] as [k, label] (k)}
			<div class="card p-4"><p class="text-xs text-dim">{label}</p><p class="font-display text-2xl font-bold">{by(k)}</p></div>
		{/each}
	</div>

	<div class="card mt-8 overflow-x-auto">
		<table class="w-full text-sm">
			<thead class="bg-raised text-left text-xs uppercase tracking-wide text-dim">
				<tr><th class="px-4 py-3">Title</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Topic</th><th class="px-4 py-3">Views</th><th class="px-4 py-3">Comments</th><th class="px-4 py-3">Updated</th><th class="px-4 py-3"></th></tr>
			</thead>
			<tbody>
				{#each data.posts as p (p.id)}
					<tr class="border-t border-line">
						<td class="px-4 py-3 font-medium"><a href="/articles/{p.slug}" class="hover:text-cyan">{p.title}</a></td>
						<td class="px-4 py-3"><StatusBadge status={p.status} /></td>
						<td class="px-4 py-3 text-muted">{p.topic.name}</td>
						<td class="px-4 py-3 font-mono text-muted">{fmtNum(p.views)}</td>
						<td class="px-4 py-3 font-mono text-muted">{p._count.comments}</td>
						<td class="px-4 py-3 text-muted">{fmtDate(p.updatedAt)}</td>
						<td class="px-4 py-3 text-right"><a href="/write/{p.id}" class="btn-ghost h-8 px-2 text-xs">Edit</a></td>
					</tr>
				{:else}
					<tr><td colspan="7" class="px-4 py-10 text-center text-muted">Nothing yet. <a href="/write" class="text-cyan">Write your first article.</a></td></tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
