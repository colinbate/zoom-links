<script lang="ts">
import { createUser } from './data';
import Input from './Input.svelte';
let name = '';
function setUser() {
  if (name) {
    createUser(name);
    name = '';
  }
}
</script>
<section class="p-4 mx-auto text-center max-w-xl">
  <div class="text-xl">
    Welcome! Please enter the name you want to use to join meetings with.
    You can override this for specific meetings, but this will be the default.
  </div>
  <form on:submit|preventDefault={setUser} class="my-4">
    <Input bind:value={name} placeholder="Enter default name..." />
    <button type="submit" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-svelte-light hover:bg-svelte-dark dark:bg-svelte-dark dark:hover:bg-svelte-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-svelte-light dark:focus:ring-svelte-dark">
      <svg aria-hidden="true" focusable="false" class="h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M427.8 266.8l-160 176C264.7 446.3 260.3 448 256 448c-3.844 0-7.703-1.375-10.77-4.156c-6.531-5.938-7.016-16.06-1.078-22.59L379.8 272H16c-8.844 0-15.1-7.155-15.1-15.1S7.156 240 16 240h363.8l-135.7-149.3c-5.938-6.531-5.453-16.66 1.078-22.59c6.547-5.906 16.66-5.469 22.61 1.094l160 176C433.4 251.3 433.4 260.7 427.8 266.8z"></path></svg>
    </button>
  </form>
</section>