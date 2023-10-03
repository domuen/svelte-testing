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

<div class="flex flex-col items-center justify-center gap-6">
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
