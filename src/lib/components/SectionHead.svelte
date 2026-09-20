<script lang="ts">
	let { eyebrow = '', title, href = '', linkLabel = 'See all' }: { eyebrow?: string; title: string; href?: string; linkLabel?: string } = $props();
</script>

<div class="mb-6 flex items-end justify-between gap-4">
	<div>
		{#if eyebrow}<p class="font-mono text-xs text-cyan">{eyebrow}</p>{/if}
		<h2 class="font-display mt-1 text-2xl font-bold sm:text-3xl">{title}</h2>
	</div>
	{#if href}<a {href} class="text-sm font-medium text-muted hover:text-ink">{linkLabel} →</a>{/if}
</div>
