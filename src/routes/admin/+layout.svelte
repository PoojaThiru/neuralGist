<script lang="ts">
	import { page } from '$app/state';
	let { children } = $props();
	const tabs = [
		{ href: '/admin', label: 'Overview' },
		{ href: '/admin/posts', label: 'Articles' },
		{ href: '/admin/users', label: 'Members' },
		{ href: '/admin/videos', label: 'Videos' },
		{ href: '/admin/radio', label: 'Radio' },
		{ href: '/admin/topics', label: 'Topics' }
	];
	const active = (h: string) => (h === '/admin' ? page.url.pathname === h : page.url.pathname.startsWith(h));
</script>

<section class="container-x py-10">
	<p class="font-mono text-xs text-lime">// admin</p>
	<nav class="mt-3 flex flex-wrap gap-1 border-b border-line" aria-label="Admin">
		{#each tabs as t (t.href)}
			<a href={t.href} class="-mb-px border-b-2 px-3 py-2 text-sm font-medium {active(t.href) ? 'border-lime text-ink' : 'border-transparent text-muted hover:text-ink'}">{t.label}</a>
		{/each}
	</nav>
	<div class="mt-8">{@render children()}</div>
</section>
