<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { fade } from 'svelte/transition';
import type { Contact } from './types';
import Input from './Input.svelte';
const dispatch = createEventDispatcher();
let link: Contact = {label: '', id: '', pwd: '', joinAs: ''};
const idShape = /^\d{9,10}$/;
$: disabled = !link.label || !validId(link.id);
function validId(id: string) {
  return idShape.test(id.replace(/\s+/g, ''));
} 
function addLink() {
  if (!link.label || !validId(link.id)) {
    return;
  }
  dispatch('link', link);
  link = {label: '', id: '', pwd: '', joinAs: ''};
}
function close() {
  dispatch('close');
}
</script>
<div class="fixed inset-0 bg-burn-20 dark:bg-dodge-20 flex items-center justify-center" transition:fade on:click|self={close}>
  <form on:submit|preventDefault={addLink} class="flex flex-col bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md mx-2">
    <div class="text-lg">Add a contact to quickly connect to for meetings.</div>
    <Input placeholder="Label" bind:value={link.label}/>
    <Input placeholder="Meeting ID" bind:value={link.id}/>
    <Input placeholder="Meeting Password (optional)" bind:value={link.pwd}/>
    <Input placeholder="Join As (optional)" bind:value={link.joinAs}/>
    <div>
      <button type="submit" {disabled} class="bg-svelte text-white rounded px-4 py-2 m-2 disabled:cursor-not-allowed disabled:bg-gray-500">Add Link</button>
    </div>
  </form>
</div>