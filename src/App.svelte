<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import GreetNew from './GreetNew.svelte';
	import UserSelect from './UserSelect.svelte';
	import Main from './Main.svelte';
	import { users } from './data';
	import type { User } from './types';
	let state: 'new' | 'multiuser' | 'main' = 'new';
	let user: User;

	$: {
		if ($users.length === 0) {
			state = 'new';
		} else if ($users.length > 1) {
			state = 'multiuser';
		} else {
			user = $users[0];
			state = 'main';
		}
	}
</script>
<Tailwindcss />
<header class="flex items-center bg-svelte-light dark:bg-svelte-dark p-2">
	<h1 class="flex-grow text-xl leading-normal font-bold">Zoom Links</h1>
	<div class="mr-8">{user?.name || ''}</div>
	<ModeSwitcher />
</header>
{#if state === 'new'}
	<GreetNew />
{:else if state === 'multiuser'}
	<UserSelect />
{:else if state === 'main'}
	<Main {user} />
{/if}