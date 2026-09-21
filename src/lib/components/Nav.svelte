<script lang="ts">
	import { site } from '$lib/site';
	import { page } from '$app/state';
	import Avatar from './Avatar.svelte';
	import Logo from './Logo.svelte';
	import { Menu, X, PenLine, ChevronDown, LayoutDashboard, Settings, Shield, LogOut } from '@lucide/svelte';

	let { user }: { user: { id: string; name: string; username: string; role: string; image: string | null } | null } = $props();
	let open = $state(false);
	let menu = $state(false);
	const active = (href: string) => page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	$effect(() => {
		// close menus on navigation
		page.url.pathname;
		open = false;
		menu = false;
	});
</script>

<header class="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur">
	<div class="container-x flex h-16 items-center justify-between gap-4">
		<Logo size={34} />

		<nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
			{#each site.nav as item (item.href)}
				<a
					href={item.href}
					class="rounded-lg px-3 py-2 text-sm font-medium transition-colors {active(item.href) ? 'bg-raised text-ink' : 'text-muted hover:text-ink'}"
					aria-current={active(item.href) ? 'page' : undefined}>{item.label}</a
				>
			{/each}
		</nav>

		<div class="hidden items-center gap-2 md:flex">
			{#if user}
				<a href="/write" class="btn-primary"><PenLine size={16} /> Write</a>
				<div class="relative">
					<button type="button" class="btn-ghost pl-1" onclick={() => (menu = !menu)} aria-haspopup="menu" aria-expanded={menu}>
						<Avatar name={user.name} src={user.image} size={28} />
						<span class="max-w-28 truncate">{user.name}</span>
						<ChevronDown size={14} />
					</button>
					{#if menu}
						<div class="card absolute right-0 mt-2 w-52 overflow-hidden p-1 shadow-xl" role="menu">
							<a href="/dashboard" class="btn-ghost w-full justify-start" role="menuitem"><LayoutDashboard size={16} /> My articles</a>
							<a href="/u/{user.username}" class="btn-ghost w-full justify-start" role="menuitem"><Avatar name={user.name} src={user.image} size={16} /> Profile</a>
							<a href="/settings" class="btn-ghost w-full justify-start" role="menuitem"><Settings size={16} /> Settings</a>
							{#if user.role === 'ADMIN'}
								<a href="/admin" class="btn-ghost w-full justify-start text-lime" role="menuitem"><Shield size={16} /> Admin</a>
							{/if}
							<form method="POST" action="/logout">
								<button class="btn-ghost w-full justify-start" role="menuitem"><LogOut size={16} /> Log out</button>
							</form>
						</div>
					{/if}
				</div>
			{:else}
				<a href="/login" class="btn-ghost">Log in</a>
				<a href="/register" class="btn-primary">Join</a>
			{/if}
		</div>

		<button type="button" class="btn-ghost md:hidden" onclick={() => (open = !open)} aria-label="Toggle menu" aria-expanded={open}>
			{#if open}<X size={20} />{:else}<Menu size={20} />{/if}
		</button>
	</div>

	{#if open}
		<div class="border-t border-line bg-surface md:hidden">
			<nav class="container-x flex flex-col gap-1 py-3" aria-label="Mobile">
				{#each site.nav as item (item.href)}
					<a href={item.href} class="rounded-lg px-3 py-2 text-sm font-medium {active(item.href) ? 'bg-raised text-ink' : 'text-muted'}">{item.label}</a>
				{/each}
				<div class="my-2 border-t border-line"></div>
				{#if user}
					<a href="/write" class="btn-primary">Write an article</a>
					<a href="/dashboard" class="btn-ghost justify-start">My articles</a>
					<a href="/settings" class="btn-ghost justify-start">Settings</a>
					{#if user.role === 'ADMIN'}<a href="/admin" class="btn-ghost justify-start text-lime">Admin</a>{/if}
					<form method="POST" action="/logout"><button class="btn-ghost w-full justify-start">Log out</button></form>
				{:else}
					<a href="/login" class="btn-secondary">Log in</a>
					<a href="/register" class="btn-primary">Join NeuralGist</a>
				{/if}
			</nav>
		</div>
	{/if}
</header>
