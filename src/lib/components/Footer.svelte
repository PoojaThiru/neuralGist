<script lang="ts">
	import { site, SECTIONS } from '$lib/site';
	import SocialIcon from './SocialIcon.svelte';

	const socials = [
		{ key: 'x', label: 'X', href: site.social.x },
		{ key: 'linkedin', label: 'LinkedIn', href: site.social.linkedin },
		{ key: 'github', label: 'GitHub', href: site.social.github },
		{ key: 'youtube', label: 'YouTube', href: site.social.youtube },
		{ key: 'instagram', label: 'Instagram', href: site.social.instagram },
		{ key: 'email', label: 'Email', href: site.social.email ? `mailto:${site.social.email}` : '' }
	].filter((s) => s.href);
	const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-line bg-surface/60">
	<div class="container-x grid gap-10 py-12 md:grid-cols-4">
		<div class="md:col-span-2">
			<a href="/" class="font-display text-lg font-bold">neuralgist<span class="text-cyan">.ai</span></a>
			<p class="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
			<div class="mt-5 flex flex-wrap gap-2">
				{#each socials as s (s.key)}
					<a href={s.href} target={s.key === 'email' ? undefined : '_blank'} rel="noopener noreferrer" class="btn-secondary h-9 w-9 p-0" aria-label={s.label} title={s.label}>
						<SocialIcon name={s.key as 'x'} size={16} />
					</a>
				{/each}
			</div>
		</div>
		<div>
			<h3 class="text-xs font-semibold uppercase tracking-wide text-dim">Explore</h3>
			<ul class="mt-3 space-y-2 text-sm">
				{#each SECTIONS as s (s.key)}
					<li><a href="/topics#{s.key.toLowerCase()}" class="text-muted hover:text-ink">{s.label}</a></li>
				{/each}
				<li><a href="/videos" class="text-muted hover:text-ink">Videos</a></li>
			</ul>
		</div>
		<div>
			<h3 class="text-xs font-semibold uppercase tracking-wide text-dim">Site</h3>
			<ul class="mt-3 space-y-2 text-sm">
				<li><a href="/about" class="text-muted hover:text-ink">About</a></li>
				<li><a href="/register" class="text-muted hover:text-ink">Write for Neuralgist</a></li>
				<li><a href="/articles" class="text-muted hover:text-ink">All articles</a></li>
				<li><a href="/sitemap.xml" class="text-muted hover:text-ink">Sitemap</a></li>
			</ul>
		</div>
	</div>
	<div class="container-x flex flex-col gap-2 border-t border-line py-5 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
		<p>© {year} {site.name}. Written by students, read by builders.</p>
		<p class="font-mono">Made at Purdue · Boiler Up</p>
	</div>
</footer>
