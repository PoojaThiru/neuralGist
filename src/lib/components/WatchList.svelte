<script lang="ts">
	// Recorded walkthroughs, collapsed by default. A list of five videos with five open players is a page nobody can
	// scan, and autoplaying one the reader did not ask for is worse — so a row opens only when it is clicked.
	import type { Watch } from '$lib/design';

	let { videos, base = '/media/design' }: { videos: Watch[]; base?: string } = $props();

	let open = $state<string | null>(null);
	let players = $state<Record<string, HTMLVideoElement | undefined>>({});

	function seek(slug: string, at: string) {
		const [m, s] = at.split(':').map(Number);
		const el = players[slug];
		if (el) {
			el.currentTime = m * 60 + s;
			void el.play();
		}
	}
</script>

<div class="space-y-3">
	{#each videos as v (v.slug)}
		<section class="overflow-hidden rounded-2xl border border-line bg-surface">
			<button
				type="button"
				onclick={() => (open = open === v.slug ? null : v.slug)}
				class="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-raised"
				aria-expanded={open === v.slug}
			>
				<span
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-raised text-muted transition-colors"
					class:playing={open === v.slug}
				>
					<svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
						{#if open === v.slug}<path d="M6 5h4v14H6zM14 5h4v14h-4z" />{:else}<path d="M8 5v14l11-7z" />{/if}
					</svg>
				</span>
				<span class="min-w-0 flex-1">
					<span class="font-display block text-[15.5px] font-semibold text-ink">{v.title}</span>
					<span class="mt-0.5 block font-mono text-[11px] text-dim">
						{v.chapters.length ? `${v.runs} · ${v.chapters.length} chapters` : v.runs}
					</span>
				</span>
			</button>

			{#if open === v.slug}
				<div class="border-t border-line">
					<!-- svelte-ignore a11y_media_has_caption -- a VTT track is attached below -->
					<video
						bind:this={players[v.slug]}
						src="{base}/{v.slug}.mp4"
						poster="{base}/{v.slug}.jpg"
						controls
						autoplay
						preload="metadata"
						playsinline
						class="w-full bg-black"
						style="aspect-ratio: 16 / 9"
					>
						<track kind="captions" src="{base}/{v.slug}.vtt" srclang="en" label="English" default />
					</video>
					<div class="grid gap-5 px-5 py-4 lg:grid-cols-[1fr_20rem]">
						<p class="text-sm leading-relaxed text-muted">{v.summary}</p>
						{#if v.chapters.length}
							<div>
								<h4 class="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">Chapters</h4>
								<ul class="mt-2 space-y-0.5">
									{#each v.chapters as c (c.at)}
										<li>
											<button
												type="button"
												onclick={() => seek(v.slug, c.at)}
												class="flex w-full items-baseline gap-3 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-raised"
											>
												<span class="shrink-0 font-mono text-[11.5px] text-violet">{c.at}</span>
												<span class="text-[13.5px] leading-snug text-muted">{c.title}</span>
											</button>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</section>
	{/each}
</div>

<style>
	.playing {
		border-color: var(--color-violet);
		background: color-mix(in oklab, var(--color-violet) 22%, transparent);
		color: var(--color-ink);
	}
</style>
