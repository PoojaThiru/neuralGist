<script lang="ts">
	import { radio } from '$lib/player.svelte';
	let { full = false }: { full?: boolean } = $props();
</script>

<button
	type="button"
	onclick={() => radio.toggle()}
	aria-pressed={radio.on}
	class="btn h-9 rounded-full border px-3 text-xs font-semibold transition-colors {radio.on ? 'border-rose/50 bg-rose/10 text-rose' : 'border-line text-muted hover:border-dim hover:text-ink'} {full ? 'w-full' : ''}"
	title={radio.on ? 'Turn radio off' : 'Turn on NeuralGist Radio'}
>
	<span class="relative flex h-2 w-2">
		{#if radio.playing}<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-75"></span>{/if}
		<span class="relative inline-flex h-2 w-2 rounded-full {radio.on ? 'bg-rose' : 'bg-dim'}"></span>
	</span>
	{radio.on ? 'On air' : 'Radio'}
</button>
