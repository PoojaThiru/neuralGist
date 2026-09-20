<script lang="ts">
	let { status }: { status: string } = $props();
	const cls: Record<string, string> = {
		PUBLISHED: 'border-lime/40 text-lime',
		PENDING: 'border-amber/40 text-amber',
		DRAFT: 'border-line text-muted',
		ARCHIVED: 'border-line text-dim'
	};
</script>

<span class="tag {cls[status] ?? ''}">{status.toLowerCase()}</span>
