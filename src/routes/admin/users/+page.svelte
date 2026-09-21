<script lang="ts">
	import { enhance } from '$app/forms';
	import { fmtDate } from '$lib/format';
	let { data, form } = $props();
</script>

<svelte:head><title>Members · Admin · NeuralGist</title></svelte:head>

<div class="flex flex-wrap items-end justify-between gap-4">
	<h1 class="font-display text-2xl font-bold">Members <span class="font-mono text-sm text-dim">({data.users.length})</span></h1>
	<form method="GET" class="flex gap-2"><input class="input w-56" type="search" name="q" value={data.q} placeholder="Search name, email, handle" /><button class="btn-secondary">Search</button></form>
</div>
{#if form?.error}<p class="mt-4 text-sm text-rose">{form.error}</p>{/if}
<div class="card mt-6 overflow-x-auto">
	<table class="w-full text-sm">
		<thead class="bg-raised text-left text-xs uppercase tracking-wide text-dim">
			<tr><th class="px-4 py-3">Member</th><th class="px-4 py-3">Role</th><th class="px-4 py-3">Posts</th><th class="px-4 py-3">Comments</th><th class="px-4 py-3">Joined</th><th class="px-4 py-3">Actions</th></tr>
		</thead>
		<tbody>
			{#each data.users as u (u.id)}
				<tr class="border-t border-line {u.isBanned ? 'opacity-60' : ''}">
					<td class="px-4 py-3"><a href="/u/{u.username}" class="font-medium hover:text-cyan">{u.name}</a> {#if u.isBanned}<span class="tag ml-1 border-rose/40 text-rose">banned</span>{/if}<br /><span class="text-xs text-dim">@{u.username} · {u.email}</span></td>
					<td class="px-4 py-3"><span class="tag {u.role === 'ADMIN' ? 'border-lime/40 text-lime' : ''}">{u.role.toLowerCase()}</span></td>
					<td class="px-4 py-3 font-mono text-muted">{u._count.posts}</td>
					<td class="px-4 py-3 font-mono text-muted">{u._count.comments}</td>
					<td class="px-4 py-3 text-muted">{fmtDate(u.createdAt)}</td>
					<td class="px-4 py-3">
						<div class="flex gap-1">
							<form method="POST" action="?/role" use:enhance><input type="hidden" name="id" value={u.id} /><input type="hidden" name="role" value={u.role === 'ADMIN' ? 'USER' : 'ADMIN'} /><button class="btn-ghost h-7 px-2 text-xs">{u.role === 'ADMIN' ? 'Make member' : 'Make admin'}</button></form>
							<form method="POST" action="?/ban" use:enhance><input type="hidden" name="id" value={u.id} /><button class="btn-ghost h-7 px-2 text-xs {u.isBanned ? 'text-lime' : 'text-rose'}">{u.isBanned ? 'Unban' : 'Ban'}</button></form>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
