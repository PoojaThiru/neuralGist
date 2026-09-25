<script lang="ts">
	// A rendered diagram in the site's own palette. Mermaid is loaded lazily, so it costs nothing on any page that
	// has no diagram on it — which is every page except this section.
	let { src, caption = '' }: { src: string; caption?: string } = $props();

	let svg = $state('');
	let failed = $state('');
	let natural = $state(0);
	const id = `d${Math.random().toString(36).slice(2, 9)}`;

	$effect(() => {
		let alive = true;
		(async () => {
			try {
				const m = (await import('mermaid')).default;
				m.initialize({
					startOnLoad: false,
					securityLevel: 'strict',
					theme: 'base',
					fontFamily: 'Inter, ui-sans-serif, system-ui',
					flowchart: { curve: 'basis', padding: 20, nodeSpacing: 54, rankSpacing: 70, useMaxWidth: false, htmlLabels: true },
					themeVariables: {
						fontFamily: 'Inter, ui-sans-serif, system-ui',
						fontSize: '17px',
						background: '#11131b',
						primaryColor: '#171a25',
						primaryTextColor: '#eceef6',
						primaryBorderColor: '#242838',
						lineColor: '#8b5cf6',
						secondaryColor: '#1a1d28',
						tertiaryColor: '#11131b',
						clusterBkg: '#0f111a',
						clusterBorder: '#242838',
						edgeLabelBackground: '#11131b',
						titleColor: '#eceef6'
					}
				});
				const out = await m.render(id, src.trim());
				// Keep the drawing at its natural size rather than shrinking it to the column: a diagram squeezed
				// below the width it needs has labels nobody can read.
				const w = Number((out.svg.match(/\swidth="([\d.]+)/) || [])[1] || 0);
				if (alive) {
					natural = Math.round(w);
					svg = out.svg.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '').replace('<svg ', '<svg width="100%" ');
				}
			} catch (e) {
				if (alive) failed = e instanceof Error ? e.message : String(e);
			}
		})();
		return () => { alive = false; };
	});
</script>

<figure class="my-8 rounded-2xl border border-line bg-surface">
	<div class="canvas overflow-x-auto p-5 sm:p-7" style="--natural:{natural}px">
		{#if failed}
			<p class="font-mono text-xs text-rose">This diagram did not render: {failed}</p>
		{:else if svg}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html svg}
		{:else}
			<div class="h-40 animate-pulse rounded-lg bg-raised"></div>
		{/if}
	</div>
	{#if caption}
		<figcaption class="border-t border-line px-5 py-2.5 text-[13px] text-muted sm:px-7">{caption}</figcaption>
	{/if}
</figure>

<style>
	.canvas :global(svg) {
		width: 100%;
		min-width: min(var(--natural, 0px), 2000px);
		height: auto;
		display: block;
	}
	/* The site defines a global `.label` utility — uppercase, small, tracked — and Mermaid puts class="label" on
	   every node label it draws. So the design system was silently restyling the inside of every diagram, and each
	   node came out shouting. Reset it here, inside the canvas only, before styling anything deliberately. */
	.canvas :global(.label) {
		text-transform: none;
		letter-spacing: normal;
		font-weight: 400;
	}
	/* Only the typography is reset. `display` and `margin` belong to Mermaid, which measures each label and sizes
	   its box from the result — overriding those made every label wider than the box already drawn for it, so the
	   text was clipped mid-word. Undo the shouting, leave the geometry alone. */

	/* The cluster's own TITLE only. `.cluster text` also matches every node label inside the cluster, which
	   uppercased the whole diagram. */
	.canvas :global(.cluster-label) {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}
	.canvas :global(.cluster-label p),
	.canvas :global(.cluster-label span),
	.canvas :global(.cluster-label foreignObject div) {
		color: #8b5cf6;
	}
	.canvas :global(.edgeLabel) {
		font-size: 12.5px;
	}
</style>
