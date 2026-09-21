<script lang="ts">
	// The NeuralGist mark (2026-09-20): six signals converge on one bright core — many inputs, one gist. The wordmark carries no
	// domain suffix; the address lives in the footer. `size` is the icon's pixel size; the wordmark scales with it.
	let { size = 30, wordmark = true, class: klass = '' }: { size?: number; wordmark?: boolean; class?: string } = $props();
	const uid = $props.id();
</script>

<a href="/" class="flex items-center gap-2.5 {klass}" aria-label="NeuralGist home">
	<svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" class="shrink-0">
		<defs>
			<linearGradient id="ng-g-{uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6" /><stop offset="1" stop-color="#22d3ee" /></linearGradient>
			<radialGradient id="ng-c-{uid}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" /><stop offset=".45" stop-color="#22d3ee" /><stop offset="1" stop-color="#22d3ee" stop-opacity="0" /></radialGradient>
		</defs>
		<rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0b10" stroke="url(#ng-g-{uid})" stroke-width="2" />
		<g stroke="url(#ng-g-{uid})" stroke-width="1.8" stroke-linecap="round" opacity=".85">
			<line x1="14" y1="22" x2="32" y2="32" /><line x1="18" y1="47" x2="32" y2="32" /><line x1="46" y1="14" x2="32" y2="32" />
			<line x1="50" y1="47" x2="32" y2="32" /><line x1="32" y1="9" x2="32" y2="32" /><line x1="30" y1="55" x2="32" y2="32" />
		</g>
		<g fill="#8b5cf6"><circle cx="14" cy="22" r="3.2" /><circle cx="18" cy="47" r="3.2" /><circle cx="32" cy="9" r="3.2" /></g>
		<g fill="#22d3ee"><circle cx="46" cy="14" r="3.2" /><circle cx="50" cy="47" r="3.2" /><circle cx="30" cy="55" r="3.2" /></g>
		<circle cx="32" cy="32" r="13" fill="url(#ng-c-{uid})" opacity=".55" />
		<circle cx="32" cy="32" r="6.5" fill="#22d3ee" />
		<circle cx="32" cy="32" r="2.6" fill="#fff" />
		<circle cx="53" cy="12" r="2.2" fill="#c8f542" />
	</svg>
	{#if wordmark}
		<span class="font-display font-bold tracking-tight text-ink" style="font-size:{Math.round(size * 0.8)}px; line-height:1">Neural<span class="text-cyan">Gist</span></span>
	{/if}
</a>
