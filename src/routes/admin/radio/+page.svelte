<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { fmtDate } from '$lib/format';
	import { fmtDuration, HOSTS, SHOW } from '$lib/radio';

	let { data, form } = $props();
	const badge: Record<string, string> = {
		QUEUED: 'border-line text-muted',
		GENERATING: 'border-cyan/40 text-cyan',
		READY: 'border-amber/40 text-amber',
		PUBLISHED: 'border-lime/40 text-lime',
		FAILED: 'border-rose/40 text-rose'
	};
	const working = $derived(data.episodes.some((e) => e.status === 'QUEUED' || e.status === 'GENERATING'));

	// While something is queued or generating, refresh the list every 20 seconds.
	$effect(() => {
		if (!working) return;
		const t = setInterval(() => invalidateAll(), 20_000);
		return () => clearInterval(t);
	});
</script>

<svelte:head><title>Radio · Admin · NeuralGist</title></svelte:head>

<h1 class="font-display text-2xl font-bold">{SHOW.name}</h1>
<p class="mt-1 text-sm text-muted">
	Hosts: {HOSTS.theo.name} (ElevenLabs “Brian”) and {HOSTS.maya.name} (“Matilda”). Claude writes each script from the articles you pick, ElevenLabs voices it.
	The generator checks for queued episodes every 5 minutes; an episode takes 2–4 minutes to produce and about 6,000–9,000 ElevenLabs credits.
</p>

<div class="mt-6 grid gap-5 lg:grid-cols-3">
	<form method="POST" action="?/create" class="card space-y-4 p-5 lg:col-span-2" use:enhance>
		<h2 class="font-display text-lg font-semibold">New episode</h2>
		{#if form?.error}<p class="text-sm text-rose">{form.error}</p>{/if}
		{#if form?.queued}<p class="text-sm text-lime">Queued. It will start within 5 minutes.</p>{/if}
		<div>
			<label class="label" for="theme">Theme <span class="normal-case text-dim">(optional)</span></label>
			<input class="input" id="theme" name="theme" maxlength="500" placeholder="e.g. Why agents need harnesses, or leave empty to let the hosts find the thread" />
		</div>
		<fieldset>
			<legend class="label">Source articles <span class="normal-case text-dim">(up to 5; none picked and no theme = the 3 newest not yet covered)</span></legend>
			<div class="mt-2 grid max-h-56 gap-1 overflow-y-auto rounded-lg border border-line p-2 sm:grid-cols-2">
				{#each data.posts as p (p.slug)}
					<label class="flex items-start gap-2 rounded px-2 py-1 text-sm hover:bg-raised">
						<input type="checkbox" name="slugs" value={p.slug} class="mt-1 accent-violet" />
						<span>{p.title}</span>
					</label>
				{/each}
			</div>
		</fieldset>
		<button class="btn-primary">Generate episode</button>
	</form>

	<form method="POST" action="?/settings" class="card space-y-3 p-5" use:enhance>
		<h2 class="font-display text-lg font-semibold">Schedule</h2>
		{#if form?.saved}<p class="text-sm text-lime">Saved.</p>{/if}
		<label class="flex items-start gap-2 text-sm">
			<input type="checkbox" name="autoWeekly" checked={data.settings.autoWeekly} class="mt-1 accent-violet" />
			<span>Make a new episode automatically every week, from the newest articles not yet covered.</span>
		</label>
		<label class="flex items-start gap-2 text-sm">
			<input type="checkbox" name="autoPublish" checked={data.settings.autoPublish} class="mt-1 accent-violet" />
			<span>Publish finished episodes without review.</span>
		</label>
		<button class="btn-secondary">Save schedule</button>
	</form>
</div>

<ul class="mt-8 space-y-3">
	{#each data.episodes as ep (ep.id)}
		<li class="card p-4">
			<div class="flex flex-wrap items-center gap-2">
				<span class="tag {badge[ep.status]}">{ep.status.toLowerCase()}{ep.status === 'GENERATING' ? '…' : ''}</span>
				{#if ep.auto}<span class="tag">weekly</span>{/if}
				<p class="font-medium">{ep.title || ep.theme || 'Untitled (newest articles)'}</p>
				<span class="ml-auto font-mono text-xs text-dim">{fmtDate(ep.createdAt)}{ep.durationSec ? ` · ${fmtDuration(ep.durationSec)}` : ''}{ep.characters ? ` · ${ep.characters.toLocaleString()} chars` : ''}</span>
			</div>
			{#if ep.summary}<p class="mt-2 text-sm text-muted">{ep.summary}</p>{/if}
			{#if ep.sourceSlugs.length}<p class="mt-1 text-xs text-dim">Sources: {ep.sourceSlugs.join(', ')}</p>{/if}
			{#if ep.error}<p class="mt-2 text-sm text-rose">{ep.error}</p>{/if}
			{#if ep.audioPath}<audio controls preload="none" src={ep.audioPath} class="mt-3 w-full"></audio>{/if}
			<div class="mt-3 flex flex-wrap gap-1">
				{#if ep.status === 'READY'}<form method="POST" action="?/publish" use:enhance><input type="hidden" name="id" value={ep.id} /><button class="btn-ghost h-8 px-2 text-xs text-lime">Publish</button></form>{/if}
				{#if ep.status === 'PUBLISHED'}<form method="POST" action="?/unpublish" use:enhance><input type="hidden" name="id" value={ep.id} /><button class="btn-ghost h-8 px-2 text-xs text-amber">Unpublish</button></form>{/if}
				{#if ep.status === 'FAILED'}<form method="POST" action="?/retry" use:enhance><input type="hidden" name="id" value={ep.id} /><button class="btn-ghost h-8 px-2 text-xs">Retry</button></form>{/if}
				{#if ep.status !== 'GENERATING'}
					<form method="POST" action="?/delete" use:enhance onsubmit={(e) => { if (!confirm('Delete this episode?')) e.preventDefault(); }}><input type="hidden" name="id" value={ep.id} /><button class="btn-ghost h-8 px-2 text-xs text-rose">Delete</button></form>
				{/if}
			</div>
		</li>
	{:else}
		<li class="card p-8 text-center text-muted">No episodes yet. Generate the first one above.</li>
	{/each}
</ul>
