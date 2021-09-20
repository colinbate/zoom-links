<script lang="ts">
export let value = '';
export let placeholder = '';
</script>
<input type="text" bind:value class="border-b-2 border-svelte bg-transparent p-2 my-2 focus:outline-none focus:border-black dark:focus:border-white" {placeholder}>