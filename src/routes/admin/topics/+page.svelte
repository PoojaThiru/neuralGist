<script lang="ts">
	import { enhance } from '$app/forms';
	import { SECTIONS, sectionLabel } from '$lib/site';
	let { data, form } = $props();
</script>

<svelte:head><title>Topics · Admin · NeuralGist</title></svelte:head>

<h1 class="font-display text-2xl font-bold">Topics</h1>
<form method="POST" action="?/save" class="card mt-6 grid gap-3 p-5 sm:grid-cols-2" use:enhance>
	{#if form?.error}<p class="text-sm text-rose sm:col-span-2">{form.error}</p>{/if}
	{#if form?.ok}<p class="text-sm text-lime sm:col-span-2">Saved.</p>{/if}
	<div><label class="label" for="name">Name</label><input class="input" id="name" name="name" required /></div>
	<div><label class="label" for="section">Section</label><select class="input" id="section" name="section" required>{#each SECTIONS as s (s.key)}<option value={s.key}>{s.label}</option>{/each}</select></div>
	<div class="sm:col-span-2"><label class="label" for="description">Description</label><input class="input" id="description" name="description" required minlength="10" maxlength="300" /></div>
	<div><label class="label" for="order">Order</label><input class="input" id="order" name="order" type="number" min="0" value="0" /></div>
	<div class="flex items-end"><button class="btn-primary">Add topic</button></div>
</form>
<div class="card mt-6 divide-y divide-line">
	{#each data.topics as t (t.id)}
		<form method="POST" action="?/save" class="grid gap-2 p-4 sm:grid-cols-12 sm:items-center" use:enhance>
			<input type="hidden" name="id" value={t.id} />
			<input class="input sm:col-span-3" name="name" value={t.name} required />
			<select class="input sm:col-span-2" name="section">{#each SECTIONS as s (s.key)}<option value={s.key} selected={s.key === t.section}>{s.label}</option>{/each}</select>
			<input class="input sm:col-span-4" name="description" value={t.description} required />
			<input class="input sm:col-span-1" name="order" type="number" value={t.order} />
			<div class="flex gap-1 sm:col-span-2">
				<button class="btn-secondary h-9 text-xs">Save</button>
				<button formaction="?/delete" class="btn-ghost h-9 text-xs text-rose" disabled={t._count.posts > 0} title={t._count.posts ? `${t._count.posts} articles` : 'Delete'}>Delete</button>
			</div>
			<p class="text-xs text-dim sm:col-span-12">/topics/{t.slug} · {sectionLabel(t.section)} · {t._count.posts} article(s)</p>
		</form>
	{/each}
</div>
