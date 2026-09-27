<script lang="ts">
	import { page } from '$app/state';
	import { Eye, EyeOff } from '@lucide/svelte';

	let { data } = $props();
	let show = $state(false); // reveal the typed password
	const code = $derived(page.url.searchParams.get('code'));
	const err = $derived(page.url.searchParams.get('error'));
	const message = $derived(
		code === 'RateLimited' ? 'Too many attempts. Try again in 15 minutes.' : code === 'Banned' ? 'This account has been suspended.' : err ? 'Wrong email or password.' : ''
	);
</script>

<svelte:head><title>Log in · NeuralGist</title></svelte:head>

<section class="container-x flex max-w-md flex-col py-16">
	<h1 class="font-display text-3xl font-bold">Welcome back</h1>
	<p class="mt-1 text-muted">Log in to write, comment and manage your articles.</p>

	{#if data.registered}<p class="card mt-6 border-lime/40 bg-lime/10 p-3 text-sm text-lime">Account created. Log in to continue.</p>{/if}
	{#if message}<p class="card mt-6 border-rose/40 bg-rose/10 p-3 text-sm text-rose">{message}</p>{/if}

	<form method="POST" class="card mt-6 space-y-4 p-6">
		<input type="hidden" name="providerId" value="credentials" />
		<input type="hidden" name="redirectTo" value={data.next} />
		<div>
			<label class="label" for="email">Email</label>
			<input class="input" id="email" name="email" type="email" autocomplete="email" required value={data.email} />
		</div>
		<div>
			<label class="label" for="password">Password</label>
			<div class="relative">
				<input class="input pr-11" id="password" name="password" type={show ? 'text' : 'password'} autocomplete="current-password" required />
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
		</div>
		<button class="btn-primary w-full">Log in</button>
	</form>

	{#if data.oauth.length}
		<div class="mt-4 flex gap-2">
			{#each data.oauth as p (p)}
				<form method="POST" class="flex-1">
					<input type="hidden" name="providerId" value={p} />
					<input type="hidden" name="redirectTo" value={data.next} />
					<button class="btn-secondary w-full capitalize">Continue with {p}</button>
				</form>
			{/each}
		</div>
	{/if}

	<p class="mt-6 text-center text-sm text-muted">New here? <a href="/register" class="text-cyan">Create an account</a></p>
</section>
