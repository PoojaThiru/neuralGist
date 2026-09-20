<script lang="ts">
	let { youtubeId, title }: { youtubeId: string; title: string } = $props();
</script>

<div class="aspect-video w-full overflow-hidden rounded-xl border border-line bg-black">
	<iframe
		src="https://www.youtube-nocookie.com/embed/{youtubeId}"
		{title}
		loading="lazy"
		allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
		class="h-full w-full"
	></iframe>
</div>
