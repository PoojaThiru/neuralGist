<script lang="ts">
	import Editor from '$lib/components/Editor.svelte';
	let { data, form } = $props();
</script>

<svelte:head><title>Edit · {data.post.title} · Neuralgist</title></svelte:head>
<Editor topics={data.topics} isAdmin={data.isAdmin} post={data.post} {form} />
