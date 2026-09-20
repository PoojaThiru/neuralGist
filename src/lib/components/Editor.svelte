<script lang="ts">
	import { enhance } from '$app/forms';
	import { sectionLabel } from '$lib/site';
	import { Eye, PenLine, Save, Send, Trash2 } from '@lucide/svelte';

	type Topic = { id: string; name: string; section: string };
	type Post = { id: string; title: string; excerpt: string; content: string; topicId: string; coverUrl: string | null; status: string; slug: string } | null;
	let { topics, isAdmin, post, form }: { topics: Topic[]; isAdmin: boolean; post: Post; form: { error?: string; values?: Record<string, string> } | null } = $props();

	// svelte-ignore state_referenced_locally
	let title = $state(form?.values?.title ?? post?.title ?? '');
	// svelte-ignore state_referenced_locally
	let excerpt = $state(form?.values?.excerpt ?? post?.excerpt ?? '');
	// svelte-ignore state_referenced_locally
	let content = $state(form?.values?.content ?? post?.content ?? '');
	// svelte-ignore state_referenced_locally
	let topicId = $state(form?.values?.topicId ?? post?.topicId ?? '');
	// svelte-ignore state_referenced_locally
	let coverUrl = $state(form?.values?.coverUrl ?? post?.coverUrl ?? '');
	let tab = $state<'write' | 'preview'>('write');
	let previewHtml = $state('');
	let previewing = $state(false);
	let busy = $state(false);

	const words = $derived(content.trim().split(/\s+/).filter(Boolean).length);
	const sections = $derived([...new Set(topics.map((t) => t.section))]);

	async function preview() {
		tab = 'preview';
		previewing = true;
		try {
			const res = await fetch('/api/preview', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ content }) });
			previewHtml = res.ok ? (await res.json()).html : '<p>Preview failed.</p>';
		} finally {
			previewing = false;
		}
	}
</script>

<section class="container-x py-10">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-xs text-cyan">// {post ? 'editing' : 'new article'}{post ? ` · ${post.status.toLowerCase()}` : ''}</p>
			<h1 class="font-display mt-1 text-3xl font-bold">{post ? 'Edit article' : 'Write an article'}</h1>
		</div>
		<p class="text-sm text-muted">Markdown supported · {words} words · ~{Math.max(1, Math.round(words / 220))} min read</p>
	</div>

	{#if form?.error}<p class="card mt-6 border-rose/40 bg-rose/10 p-3 text-sm text-rose">{form.error}</p>{/if}

	<form method="POST" action="?/save" class="mt-6 grid gap-6 lg:grid-cols-12" use:enhance={() => { busy = true; return async ({ update }) => { busy = false; await update({ reset: false }); }; }}>
		<div class="space-y-4 lg:col-span-8">
			<input class="input font-display text-2xl font-bold" name="title" bind:value={title} placeholder="A title people will click" required minlength="4" maxlength="140" />
			<div class="card overflow-hidden">
				<div class="flex border-b border-line text-sm">
					<button type="button" class="flex items-center gap-1 px-4 py-2 {tab === 'write' ? 'bg-raised text-ink' : 'text-muted'}" onclick={() => (tab = 'write')}><PenLine size={14} /> Write</button>
					<button type="button" class="flex items-center gap-1 px-4 py-2 {tab === 'preview' ? 'bg-raised text-ink' : 'text-muted'}" onclick={preview}><Eye size={14} /> Preview</button>
				</div>
				{#if tab === 'write'}
					<textarea name="content" bind:value={content} class="min-h-[60vh] w-full resize-y bg-canvas p-4 font-mono text-sm leading-relaxed text-ink focus:outline-none" placeholder={'## Start with the problem\n\nThen show the pattern, then the trade-offs. Code blocks:\n\n```python\nprint("hello")\n```'} required minlength="50"></textarea>
				{:else}
					<input type="hidden" name="content" value={content} />
					<div class="prose-ng min-h-[60vh] p-6">
						{#if previewing}<p class="text-muted">Rendering…</p>{:else}{@html previewHtml}{/if}
					</div>
				{/if}
			</div>
		</div>

		<aside class="space-y-4 lg:col-span-4">
			<div class="card space-y-4 p-5">
				<div>
					<label class="label" for="topicId">Topic</label>
					<select class="input" id="topicId" name="topicId" bind:value={topicId} required>
						<option value="" disabled>Pick a topic…</option>
						{#each sections as s (s)}
							<optgroup label={sectionLabel(s)}>
								{#each topics.filter((t) => t.section === s) as t (t.id)}<option value={t.id}>{t.name}</option>{/each}
							</optgroup>
						{/each}
					</select>
				</div>
				<div>
					<label class="label" for="excerpt">Excerpt <span class="normal-case text-dim">(optional)</span></label>
					<textarea class="input min-h-20" id="excerpt" name="excerpt" bind:value={excerpt} maxlength="300" placeholder="One or two sentences. Auto-generated if empty."></textarea>
				</div>
				<div>
					<label class="label" for="coverUrl">Cover image URL <span class="normal-case text-dim">(optional)</span></label>
					<input class="input" id="coverUrl" name="coverUrl" bind:value={coverUrl} placeholder="https://…" />
				</div>
			</div>
			<div class="card space-y-2 p-5">
				<button class="btn-secondary w-full" name="intent" value="save" disabled={busy}><Save size={16} /> {post?.status === 'PUBLISHED' ? 'Save changes' : 'Save draft'}</button>
				<button class="btn-primary w-full" name="intent" value="submit" disabled={busy}><Send size={16} /> {isAdmin ? 'Publish' : post?.status === 'PENDING' ? 'Resubmit for review' : 'Submit for review'}</button>
				<p class="text-xs text-dim">{isAdmin ? 'Admins publish directly.' : 'An editor reviews submissions before they go live.'}</p>
			</div>
		</aside>
	</form>
	{#if post}
		<form method="POST" action="?/delete" class="mt-4 flex justify-end" onsubmit={(e) => { if (!confirm('Delete this article? This cannot be undone.')) e.preventDefault(); }}>
			<button class="btn-danger"><Trash2 size={16} /> Delete article</button>
		</form>
	{/if}
</section>
