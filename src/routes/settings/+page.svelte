<script lang="ts">
	import { enhance } from '$app/forms';
	let { data, form } = $props();
</script>

<svelte:head><title>Settings · Neuralgist</title></svelte:head>

<section class="container-x max-w-2xl py-12">
	<p class="font-mono text-xs text-cyan">// settings</p>
	<h1 class="font-display mt-1 text-3xl font-bold">Your profile</h1>
	<p class="mt-1 text-sm text-muted">@{data.me.username} · {data.me.email}</p>

	<form method="POST" action="?/profile" class="card mt-8 space-y-4 p-6" use:enhance>
		<h2 class="font-display text-lg font-semibold">Public profile</h2>
		{#if form?.profileSaved}<p class="text-sm text-lime">Saved.</p>{/if}
		{#if form?.profileError}<p class="text-sm text-rose">{form.profileError}</p>{/if}
		<div><label class="label" for="name">Name</label><input class="input" id="name" name="name" value={data.me.name} required minlength="2" maxlength="60" /></div>
		<div><label class="label" for="bio">Bio</label><textarea class="input min-h-20" id="bio" name="bio" maxlength="280" placeholder="What do you build? What do you write about?">{data.me.bio ?? ''}</textarea></div>
		<div><label class="label" for="website">Website</label><input class="input" id="website" name="website" value={data.me.website ?? ''} placeholder="https://" /></div>
		<div><label class="label" for="avatarUrl">Avatar image URL</label><input class="input" id="avatarUrl" name="avatarUrl" value={data.me.avatarUrl ?? ''} placeholder="https://… (GitHub avatar URLs work great)" /></div>
		<button class="btn-primary">Save profile</button>
	</form>

	<form method="POST" action="?/password" class="card mt-6 space-y-4 p-6" use:enhance>
		<h2 class="font-display text-lg font-semibold">Change password</h2>
		{#if form?.passwordSaved}<p class="text-sm text-lime">Password updated.</p>{/if}
		{#if form?.passwordError}<p class="text-sm text-rose">{form.passwordError}</p>{/if}
		<div><label class="label" for="current">Current password</label><input class="input" id="current" name="current" type="password" autocomplete="current-password" required /></div>
		<div><label class="label" for="next">New password</label><input class="input" id="next" name="next" type="password" autocomplete="new-password" required minlength="8" /></div>
		<button class="btn-secondary">Update password</button>
	</form>
</section>
