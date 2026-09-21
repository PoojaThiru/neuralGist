// Global radio state. Lives in the root layout, so playback survives client-side navigation.
export type Episode = { id: string; title: string; summary: string; audioUrl: string; durationSec: number; publishedAt: string | null };

const KEY = 'ng-radio';

class Radio {
	on = $state(false);
	playing = $state(false);
	episodes = $state<Episode[]>([]);
	index = $state(0);
	loading = $state(false);
	resumeAt = 0;
	current = $derived(this.episodes[this.index] ?? null);
	#loaded = false;

	async load() {
		if (this.#loaded) return;
		this.loading = true;
		try {
			const res = await fetch('/api/radio/episodes');
			if (res.ok) {
				this.episodes = (await res.json()).episodes;
				this.#loaded = true;
				this.restore();
			}
		} finally {
			this.loading = false;
		}
	}

	/** Turn the radio on; optionally jump to one episode. */
	async play(id?: string) {
		this.on = true;
		await this.load();
		if (id) {
			const i = this.episodes.findIndex((e) => e.id === id);
			if (i >= 0 && i !== this.index) {
				this.index = i;
				this.resumeAt = 0;
			}
		}
		this.playing = this.episodes.length > 0;
	}

	toggle() {
		if (this.on) this.off();
		else void this.play();
	}

	off() {
		this.playing = false;
		this.on = false;
	}

	next() {
		this.resumeAt = 0;
		this.index = this.index < this.episodes.length - 1 ? this.index + 1 : 0;
	}

	prev() {
		this.resumeAt = 0;
		if (this.index > 0) this.index--;
	}

	/** Remember where the listener was (per browser). */
	save(time: number) {
		try {
			if (this.current) localStorage.setItem(KEY, JSON.stringify({ id: this.current.id, t: Math.floor(time) }));
		} catch {
			/* storage unavailable */
		}
	}

	restore() {
		try {
			const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null') as { id: string; t: number } | null;
			const i = saved ? this.episodes.findIndex((e) => e.id === saved.id) : -1;
			if (saved && i >= 0) {
				this.index = i;
				this.resumeAt = saved.t;
			}
		} catch {
			/* storage unavailable */
		}
	}
}

export const radio = new Radio();
