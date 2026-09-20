<script lang="ts">
	import { enhance } from '$app/forms';
	let { data, form } = $props();
</script>

<svelte:head><title>Videos · Admin · Neuralgist</title></svelte:head>

<h1 class="font-display text-2xl font-bold">Videos</h1>
<form method="POST" action="?/add" class="card mt-6 grid gap-3 p-5 sm:grid-cols-2" use:enhance>
	{#if form?.error}<p class="text-sm text-rose sm:col-span-2">{form.error}</p>{/if}
	{#if form?.ok}<p class="text-sm text-lime sm:col-span-2">Saved.</p>{/if}
	<div><label class="label" for="title">Title</label><input class="input" id="title" name="title" required /></div>
	<div><label class="label" for="url">YouTube URL or ID</label><input class="input" id="url" name="url" required placeholder="https://youtu.be/…" /></div>
	<div class="sm:col-span-2"><label class="label" for="description">Description</label><input class="input" id="description" name="description" maxlength="300" /></div>
	<div><label class="label" for="order">Order (lower first)</label><input class="input" id="order" name="order" type="number" min="0" value="0" /></div>
	<div class="flex items-end"><button class="btn-primary">Add video</button></div>
</form>
<ul class="card mt-6 divide-y divide-line">
	{#each data.videos as v (v.id)}
		<li class="flex items-center gap-3 p-4 text-sm">
			<img src="https://i.ytimg.com/vi/{v.youtubeId}/mqdefault.jpg" alt="" class="h-12 w-20 rounded object-cover" loading="lazy" />
			<div class="min-w-0 flex-1"><p class="truncate font-medium">{v.title}</p><p class="truncate text-xs text-dim">{v.youtubeId} · order {v.order}{v.description ? ` · ${v.description}` : ''}</p></div>
			<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm('Remove this video?')) e.preventDefault(); }}><input type="hidden" name="id" value={v.id} /><button class="btn-ghost h-7 px-2 text-xs text-rose">Remove</button></form>
		</li>
	{:else}
		<li class="p-4 text-muted">No videos yet.</li>
	{/each}
</ul>
