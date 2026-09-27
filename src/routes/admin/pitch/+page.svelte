<script lang="ts">
	import { CONCEPTS, COMPARISON, MEDIA_SUFFIX } from '$lib/concepts';
	import { ArrowDown } from '@lucide/svelte';

	const src = (base: string, ext: string) => `/media/pitch/${base}-${MEDIA_SUFFIX}.${ext}`;
</script>

<svelte:head>
	<title>Venture concepts · Admin · NeuralGist</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex flex-wrap items-end justify-between gap-3">
	<div>
		<h1 class="font-display text-2xl font-bold">Venture concepts</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted">
			The three concepts entered in the 38th Burton D. Morgan Venture Concept Competition at Purdue, submitted 27 September 2026.
			Each pitch below answers the competition's own five questions, capped at 50 words apiece, followed by its two-host pitch film.
		</p>
	</div>
	<p class="font-mono text-xs text-dim">Admin only · not indexed</p>
</div>

<nav class="mt-5 flex flex-wrap gap-2" aria-label="Jump to a concept">
	{#each CONCEPTS as c (c.key)}
		<a href="#{c.key}" class="tag py-1 hover:border-violet hover:text-ink">{c.name} <ArrowDown size={11} class="ml-1" /></a>
	{/each}
	<a href="#compare" class="tag py-1 hover:border-violet hover:text-ink">Side by side <ArrowDown size={11} class="ml-1" /></a>
</nav>

{#each CONCEPTS as c, i (c.key)}
	<section id={c.key} class="card mt-8 scroll-mt-24 p-6 sm:p-8">
		<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
			<span class="font-mono text-xs text-cyan">0{i + 1}</span>
			<h2 class="font-display text-3xl font-bold">{c.name}</h2>
			<p class="text-muted italic">{c.subtitle}</p>
		</div>
		<p class="mt-3 text-lg">{c.oneLiner}</p>

		<div class="mt-6 grid gap-8 lg:grid-cols-5">
			<div class="space-y-5 lg:col-span-3">
				{#each c.answers as a (a.label)}
					<div>
						<h3 class="text-xs font-semibold tracking-wide uppercase text-dim">{a.label}</h3>
						<p class="mt-1 text-[15px] leading-relaxed text-ink/90">{a.text}</p>
					</div>
				{/each}
			</div>

			<div class="lg:col-span-2">
				<h3 class="text-xs font-semibold tracking-wide uppercase text-dim">Pitch film · {c.minutes}</h3>
				<!-- svelte-ignore a11y_media_has_caption -- a <track> element is provided below -->
				<video
					class="mt-2 w-full rounded-xl border border-line bg-black"
					controls
					preload="none"
					playsinline
					poster={src(c.video, 'jpg')}
				>
					<source src={src(c.video, 'mp4')} type="video/mp4" />
					<track kind="captions" src={src(c.video, 'vtt')} srclang="en" label="English" default />
					Your browser cannot play this video.
				</video>
				<p class="mt-2 text-xs text-dim">Hosts Theo and Maya. AI-generated voices, private link, not published to YouTube.</p>
				<a href={src(c.video, 'mp4')} class="btn-secondary mt-3 h-8 px-3 text-xs" download>Download MP4</a>
			</div>
		</div>
	</section>
{/each}

<section id="compare" class="mt-12 scroll-mt-24">
	<h2 class="font-display text-2xl font-bold">Side by side</h2>
	<p class="mt-1 text-sm text-muted">The same comparison that led to picking Memoir.</p>
	<div class="card mt-4 overflow-x-auto">
		<table class="w-full min-w-[46rem] text-sm">
			<thead class="bg-raised text-left text-xs uppercase tracking-wide text-dim">
				<tr>
					<th class="px-4 py-3">&nbsp;</th>
					{#each CONCEPTS as c (c.key)}<th class="px-4 py-3 font-semibold text-ink">{c.name}</th>{/each}
				</tr>
			</thead>
			<tbody>
				{#each COMPARISON as row (row.label)}
					<tr class="border-t border-line align-top {row.label === 'Verdict' ? 'bg-raised/40' : ''}">
						<th class="px-4 py-3 text-left font-semibold whitespace-nowrap text-muted">{row.label}</th>
						{#each row.values as v, i (i)}
							<td class="px-4 py-3 {row.label === 'Verdict' && i === 0 ? 'font-medium text-lime' : ''}">{v}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="mt-3 text-xs text-dim">
		Competition lead: Prof. Kostas Grigoriou. Ten-week program follows the concept deadline. One combination worth keeping in view:
		VitalGlance and NightAir share senior living as a second market, so a single safe-room unit watching both the resident and the air could beat either alone.
	</p>
</section>
