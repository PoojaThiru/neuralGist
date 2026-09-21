<script lang="ts">
	import { radio } from '$lib/player.svelte';
	import { fmtDuration, SHOW } from '$lib/radio';
	import { Pause, Play, SkipBack, SkipForward, X } from '@lucide/svelte';

	let audio: HTMLAudioElement | undefined = $state();
	let time = $state(0);
	let duration = $state(0);
	let lastSaved = 0;

	// Keep the element in step with the play/pause state and the current episode.
	$effect(() => {
		const el = audio;
		const ep = radio.current;
		if (!el || !ep) return;
		if (radio.playing) el.play().catch(() => (radio.playing = false));
		else el.pause();
	});

	function onLoaded() {
		if (audio && radio.resumeAt > 0 && radio.resumeAt < (audio.duration || Infinity) - 5) audio.currentTime = radio.resumeAt;
		radio.resumeAt = 0;
	}
	function onTime() {
		if (Math.abs(time - lastSaved) > 5) {
			lastSaved = time;
			radio.save(time);
		}
	}
	function onEnded() {
		radio.next();
		radio.playing = true;
	}
	function seek(e: Event) {
		if (audio) audio.currentTime = Number((e.target as HTMLInputElement).value);
	}
	const total = $derived(duration || radio.current?.durationSec || 0);
</script>

{#if radio.on}
	<div class="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 backdrop-blur" style="padding-bottom: env(safe-area-inset-bottom, 0px)" role="region" aria-label={SHOW.name}>
		<div class="container-x flex items-center gap-3 py-3">
			<span class="relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan sm:flex" aria-hidden="true">
				{#if radio.playing}<span class="absolute -top-1 -right-1 h-2.5 w-2.5 animate-pulse rounded-full bg-rose"></span>{/if}
				<svg viewBox="0 0 24 24" class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" /></svg>
			</span>

			{#if radio.current}
				<audio bind:this={audio} src={radio.current.audioUrl} preload="metadata" bind:currentTime={time} bind:duration onloadedmetadata={onLoaded} ontimeupdate={onTime} onplay={() => (radio.playing = true)} onpause={() => (radio.playing = false)} onended={onEnded}></audio>
				<div class="flex items-center gap-1">
					<button class="btn-ghost h-9 w-9 p-0" onclick={() => radio.prev()} disabled={radio.index === 0} aria-label="Previous episode"><SkipBack size={16} /></button>
					<button class="btn-primary h-10 w-10 rounded-full p-0" onclick={() => (radio.playing = !radio.playing)} aria-label={radio.playing ? 'Pause' : 'Play'}>
						{#if radio.playing}<Pause size={18} />{:else}<Play size={18} />{/if}
					</button>
					<button class="btn-ghost h-9 w-9 p-0" onclick={() => { radio.next(); radio.playing = true; }} disabled={radio.episodes.length < 2} aria-label="Next episode"><SkipForward size={16} /></button>
				</div>
				<div class="min-w-0 flex-1">
					<p class="truncate text-sm font-semibold"><a href="/radio#{radio.current.id}" class="hover:text-cyan">{radio.current.title}</a></p>
					<div class="mt-1 flex items-center gap-2">
						<span class="w-10 shrink-0 font-mono text-[11px] text-dim">{fmtDuration(time)}</span>
						<input type="range" min="0" max={total || 1} step="1" value={time} oninput={seek} class="h-1 flex-1 cursor-pointer accent-violet" aria-label="Seek" />
						<span class="w-10 shrink-0 text-right font-mono text-[11px] text-dim">{fmtDuration(total)}</span>
					</div>
				</div>
			{:else}
				<p class="flex-1 text-sm text-muted">{radio.loading ? 'Tuning in…' : 'No episodes on air yet. The first one is on its way.'}</p>
			{/if}

			<p class="hidden font-mono text-[10px] leading-tight text-dim lg:block">{SHOW.name}<br />AI-generated voices</p>
			<button class="btn-ghost h-9 w-9 p-0" onclick={() => radio.off()} aria-label="Turn radio off"><X size={16} /></button>
		</div>
	</div>
	<div class="h-20" aria-hidden="true"></div>
{/if}
