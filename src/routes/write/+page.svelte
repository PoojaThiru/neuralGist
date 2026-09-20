<script lang="ts">
	import Editor from '$lib/components/Editor.svelte';
	let { data, form } = $props();
</script>

<svelte:head><title>Write · Neuralgist</title></svelte:head>
<Editor topics={data.topics} isAdmin={data.isAdmin} post={null} {form} />
