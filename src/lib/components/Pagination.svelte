<script lang="ts">
	let { page, pages, base }: { page: number; pages: number; base: string } = $props();
	const link = (p: number) => `${base}${base.includes('?') ? '&' : '?'}page=${p}`;
</script>

{#if pages > 1}
	<nav class="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
		<a href={link(Math.max(1, page - 1))} class="btn-secondary" aria-disabled={page === 1}>← Prev</a>
		<span class="font-mono text-sm text-muted">{page} / {pages}</span>
		<a href={link(Math.min(pages, page + 1))} class="btn-secondary" aria-disabled={page === pages}>Next →</a>
	</nav>
{/if}
