<script lang="ts">
	import { enhance } from '$app/forms';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import { fmtDate, fmtNum } from '$lib/format';
	let { data } = $props();
	const filters = ['PENDING', 'PUBLISHED', 'DRAFT', 'ARCHIVED', 'ALL'];
</script>

<svelte:head><title>Articles · Admin · Neuralgist</title></svelte:head>

<h1 class="font-display text-2xl font-bold">Articles</h1>
<div class="mt-4 flex flex-wrap gap-2">
	{#each filters as f (f)}<a href="/admin/posts?status={f}" class="tag py-1 {data.status === f ? 'border-lime text-ink' : 'hover:text-ink'}">{f.toLowerCase()}</a>{/each}
</div>
<div class="card mt-6 overflow-x-auto">
	<table class="w-full text-sm">
		<thead class="bg-raised text-left text-xs uppercase tracking-wide text-dim">
			<tr><th class="px-4 py-3">Title</th><th class="px-4 py-3">Author</th><th class="px-4 py-3">Status</th><th class="px-4 py-3">Views</th><th class="px-4 py-3">Updated</th><th class="px-4 py-3">Actions</th></tr>
		</thead>
		<tbody>
			{#each data.posts as p (p.id)}
				<tr class="border-t border-line">
					<td class="px-4 py-3"><a href="/articles/{p.slug}" class="font-medium hover:text-cyan">{p.title}</a> {#if p.featured}<span class="tag ml-1 border-lime/40 text-lime">★</span>{/if}<br /><span class="text-xs text-dim">{p.topic.name}</span></td>
					<td class="px-4 py-3 text-muted"><a href="/u/{p.author.username}" class="hover:text-ink">{p.author.name}</a></td>
					<td class="px-4 py-3"><StatusBadge status={p.status} /></td>
					<td class="px-4 py-3 font-mono text-muted">{fmtNum(p.views)}</td>
					<td class="px-4 py-3 text-muted">{fmtDate(p.updatedAt)}</td>
					<td class="px-4 py-3">
						<div class="flex flex-wrap gap-1">
							<a href="/write/{p.id}" class="btn-ghost h-7 px-2 text-xs">Edit</a>
							{#if p.status !== 'PUBLISHED'}<form method="POST" action="?/publish" use:enhance><input type="hidden" name="id" value={p.id} /><button class="btn-ghost h-7 px-2 text-xs text-lime">Publish</button></form>{/if}
							{#if p.status === 'PUBLISHED'}
								<form method="POST" action="?/feature" use:enhance><input type="hidden" name="id" value={p.id} /><button class="btn-ghost h-7 px-2 text-xs">{p.featured ? 'Unfeature' : 'Feature'}</button></form>
								<form method="POST" action="?/unpublish" use:enhance><input type="hidden" name="id" value={p.id} /><button class="btn-ghost h-7 px-2 text-xs text-amber">Unpublish</button></form>
							{/if}
							{#if p.status !== 'ARCHIVED'}<form method="POST" action="?/archive" use:enhance><input type="hidden" name="id" value={p.id} /><button class="btn-ghost h-7 px-2 text-xs">Archive</button></form>{/if}
							<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm(`Delete "${p.title}"?`)) e.preventDefault(); }}><input type="hidden" name="id" value={p.id} /><button class="btn-ghost h-7 px-2 text-xs text-rose">Delete</button></form>
						</div>
					</td>
				</tr>
			{:else}
				<tr><td colspan="6" class="px-4 py-10 text-center text-muted">Nothing with that status.</td></tr>
			{/each}
		</tbody>
	</table>
</div>
