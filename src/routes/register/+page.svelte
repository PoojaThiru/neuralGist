<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<svelte:head><title>Join · Neuralgist</title></svelte:head>

<section class="container-x flex max-w-md flex-col py-16">
	<h1 class="font-display text-3xl font-bold">Join Neuralgist</h1>
	<p class="mt-1 text-muted">Write articles, join discussions, build a byline.</p>
	{#if form?.error}<p class="card mt-6 border-rose/40 bg-rose/10 p-3 text-sm text-rose">{form.error}</p>{/if}
	<form method="POST" class="card mt-6 space-y-4 p-6" use:enhance>
		<div>
			<label class="label" for="name">Name</label>
			<input class="input" id="name" name="name" required minlength="2" maxlength="60" value={form?.values?.name ?? ''} autocomplete="name" />
		</div>
		<div>
			<label class="label" for="username">Username</label>
			<input class="input" id="username" name="username" required pattern="[a-zA-Z0-9_]{'{'}3,24{'}'}" value={form?.values?.username ?? ''} autocomplete="username" placeholder="yourhandle" />
			<p class="mt-1 text-xs text-dim">Your profile lives at /u/username</p>
		</div>
		<div>
			<label class="label" for="email">Email</label>
			<input class="input" id="email" name="email" type="email" required value={form?.values?.email ?? ''} autocomplete="email" />
		</div>
		<div>
			<label class="label" for="password">Password</label>
			<input class="input" id="password" name="password" type="password" required minlength="8" autocomplete="new-password" />
		</div>
		<button class="btn-primary w-full">Create account</button>
	</form>
	<p class="mt-6 text-center text-sm text-muted">Already a member? <a href="/login" class="text-cyan">Log in</a></p>
</section>
