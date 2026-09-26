<script lang="ts">
	// The lesson player: a modal over the Learn table, with a maximised mode for watching properly.
	//
	// Two sizes rather than a page of its own, because the table is the thing people are choosing from — a full page
	// per lesson would mean a back-and-forth for every title someone is only sampling. The modal keeps the list
	// behind it; maximise is for when they have decided.
	import { X, Maximize2, Minimize2 } from '@lucide/svelte';
	import type { Lesson } from '$lib/learn.generated';

	let { lesson, onclose }: { lesson: Lesson; onclose: () => void } = $props();

	let video: HTMLVideoElement | null = $state(null);
	let big = $state(false);

	const seek = (at: string) => {
		const [m, s] = at.split(':').map(Number);
		if (video) {
			video.currentTime = m * 60 + s;
			void video.play();
		}
	};

	function onkey(e: KeyboardEvent) {
		if (e.key === 'Escape') big ? (big = false) : onclose();
		if (e.key === 'f') big = !big;
	}
</script>

<svelte:window on:keydown={onkey} />

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-canvas/85 p-3 backdrop-blur sm:p-6"
	role="dialog"
	aria-modal="true"
	tabindex="-1"
	aria-label={lesson.title}
	onclick={onclose}
>
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		class="flex max-h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl transition-[max-width] duration-200 {big
			? 'max-w-[110rem]'
			: 'max-w-4xl'}"
		onclick={(e) => e.stopPropagation()}
	>
		<header class="flex items-start gap-3 border-b border-line px-4 py-3 sm:px-5">
			<span
				class="mt-0.5 shrink-0 rounded-md bg-raised px-2 py-1 font-mono text-[11px] font-semibold text-violet"
				>{String(lesson.n).padStart(2, '0')}</span
			>
			<div class="min-w-0 flex-1">
				<h2 class="font-display truncate text-base font-semibold text-ink sm:text-lg">{lesson.title}</h2>
				<p class="mt-0.5 font-mono text-[11px] text-dim">{lesson.runs}</p>
			</div>
			<button
				type="button"
				onclick={() => (big = !big)}
				class="btn-ghost shrink-0 px-2 py-1.5"
				aria-label={big ? 'Restore size' : 'Maximise'}
				title={big ? 'Restore (f)' : 'Maximise (f)'}
			>
				{#if big}<Minimize2 size={16} />{:else}<Maximize2 size={16} />{/if}
			</button>
			<button type="button" onclick={onclose} class="btn-ghost shrink-0 px-2 py-1.5" aria-label="Close" title="Close (Esc)">
				<X size={16} />
			</button>
		</header>

		<div class="min-h-0 flex-1 overflow-y-auto">
			<!-- svelte-ignore a11y_media_has_caption -- a VTT track is attached below -->
			<!-- The video is constrained by HEIGHT as well as width. It used to be `w-full` with a 16/9 ratio and
			     nothing else, so maximising (max-w-[110rem] = 1760px) made it 990px tall — taller than most laptop
			     viewports before the header and summary are counted. The scroll container then put a scrollbar on the
			     video itself, and you had to scroll to see the bottom of the picture (owner, 2026-09-26).
			     Capping the height and letting width follow the ratio keeps the whole frame on screen at any size. -->
			<div class="flex justify-center bg-black">
				<video
					bind:this={video}
					src={lesson.src}
					poster={lesson.poster}
					controls
					autoplay
					preload="metadata"
					playsinline
					class="h-auto w-auto max-h-[calc(100dvh-11rem)] max-w-full"
					style="aspect-ratio: 16 / 9"
				>
					<track kind="captions" src={lesson.captions} srclang="en" label="English" default />
				</video>
			</div>

			<div class="grid gap-5 px-4 py-4 sm:px-5 {big ? 'lg:grid-cols-[1fr_22rem]' : ''}">
				<div>
					<p class="text-sm leading-relaxed text-muted">{lesson.summary}</p>
					{#if lesson.tags.length}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each lesson.tags as t (t)}
								<span class="rounded-full border border-line px-2 py-0.5 font-mono text-[10.5px] text-dim">{t}</span>
							{/each}
						</div>
					{/if}
				</div>

				{#if lesson.chapters.length}
					<div>
						<h3 class="font-mono text-[11px] uppercase tracking-[0.08em] text-dim">Chapters</h3>
						<ul class="mt-2 space-y-0.5">
							{#each lesson.chapters as c (c.at)}
								<li>
									<button
										type="button"
										onclick={() => seek(c.at)}
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
	</div>
</div>
