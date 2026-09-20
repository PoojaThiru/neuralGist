<script lang="ts">
	import { initials } from '$lib/format';
	let { name, src = null, size = 32 }: { name: string; src?: string | null; size?: number } = $props();
</script>

{#if src}
	<img {src} alt={name} width={size} height={size} class="shrink-0 rounded-full object-cover" style="width:{size}px;height:{size}px" loading="lazy" />
{:else}
	<span
		class="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan font-semibold text-white"
		style="width:{size}px;height:{size}px;font-size:{Math.max(10, size * 0.4)}px"
		aria-hidden="true">{initials(name || '?')}</span
	>
{/if}
