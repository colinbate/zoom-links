<script lang="ts">
import type { Contact, User } from "./types";
  export let user: User;
  export let contact: Contact;
  $: meetingUrl = `zoommtg://zoom.us/join?confno=${contact.id}&pwd=${contact.pwd}&uname=${encodeURIComponent(contact.joinAs || user.name)}`;
</script>
<div class="border-2 rounded-lg border-svelte p-4 w-full sm:w-64">
  <h2 class="text-lg font-bold">{contact.label}</h2>
  <div>{contact.id}</div>
  <div>{contact.pwd || '-'}</div>
  <div>{contact.joinAs || user.name}</div>
  <div class="mt-4 mb-2"><a class="px-4 py-2 bg-svelte-light dark:bg-svelte-dark rounded" href={meetingUrl}>Join Meeting</a></div>
</div>