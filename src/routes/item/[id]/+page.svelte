<script lang="ts">
  import { onMount } from "svelte";

  export let data: any;

  let loading = true;
  const items = JSON.parse(globalThis.localStorage?.getItem("items") ?? "[]");
  let item: any = undefined;

  onMount(() => {
    item = items.find((i: any) => i.id === +data.id);
    loading = false;
  });
</script>

<div class="container">
  {#if loading}
    <h1>Loading...</h1>
  {:else if !item}
    <h1>404</h1>

    <p>Could not find an item with that ID</p>
  {:else}
    <h1>{item?.name}</h1>

    <p>{item?.description}</p>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
