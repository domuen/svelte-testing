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
  <div
    class="flex flex-col items-center justify-center max-w-lg rounded border cursor-pointer p-6 m-6 gap-6 hover:scale-105 select-none duration-100"
    role="button"
    tabindex="0"
    on:keypress={() => {}}
    on:click={() => handleViewItem(item.id)}
  >
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
{/each}
