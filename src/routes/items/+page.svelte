<script lang="ts">
  import { goto } from "$app/navigation";

  const items = [
    {
      id: 1,
      name: "Nike Shoe",
      description: "Nike shoe for sale",
    },
    {
      id: 2,
      name: "Adidas Shoe",
      description: "Adidas shoe for sale",
    },
    {
      id: 3,
      name: "Puma Shoe",
      description: "Puma shoe for sale",
    },
  ];

  const handleViewItem = (id: number) => {
    globalThis.localStorage?.setItem("items", JSON.stringify(items));
    goto(`/item/${id}`);
  };
</script>

{#each items as item}
  <div class="item-container" on:click={() => handleViewItem(item.id)}>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
{/each}

<style>
  .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
    user-select: none;
    transition-duration: 100ms;
    max-width: 500px;
    padding: 6px;
    margin: 24px;
    gap: 6px;
  }

  .item-container:hover {
    scale: 1.025;
  }
</style>
