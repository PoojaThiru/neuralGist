<script lang="ts">
	// Password input with a show/hide toggle. Masked by default; the button flips the input type.
	import { Eye, EyeOff } from '@lucide/svelte';

	let {
		id,
		name = id,
		label,
		autocomplete = 'current-password',
		required = true,
		minlength,
		hint = ''
	}: {
		id: string;
		name?: string;
		label: string;
		autocomplete?: 'current-password' | 'new-password';
		required?: boolean;
		minlength?: number;
		hint?: string;
	} = $props();

	let show = $state(false);
</script>

<div>
	<label class="label" for={id}>{label}</label>
	<div class="relative">
		<input class="input pr-11" {id} {name} type={show ? 'text' : 'password'} {autocomplete} {required} {minlength} />
		<button
			type="button"
			class="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-dim transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-violet focus-visible:outline-none"
			onclick={() => (show = !show)}
			aria-pressed={show}
			aria-label={show ? 'Hide password' : 'Show password'}
			title={show ? 'Hide password' : 'Show password'}
		>
			{#if show}<EyeOff size={16} />{:else}<Eye size={16} />{/if}
		</button>
	</div>
	{#if hint}<p class="mt-1 text-xs text-dim">{hint}</p>{/if}
</div>
