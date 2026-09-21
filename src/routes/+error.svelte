<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} · NeuralGist</title></svelte:head>

<section class="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
	<p class="font-mono text-sm text-cyan">error {page.status}</p>
	<h1 class="font-display mt-3 text-4xl font-bold">
		{page.status === 404 ? 'That page drifted out of context.' : (page.error?.message ?? 'Something broke.')}
	</h1>
	<p class="mt-3 max-w-md text-muted">
		{page.status === 404 ? 'The link may be old, or the article was unpublished.' : 'Try again in a moment. If it keeps happening, tell us.'}
	</p>
	<a href="/" class="btn-primary mt-8">Back to home</a>
</section>
