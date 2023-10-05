<script>
  import "../app.css";
  import { goto } from "$app/navigation";

  const handleNavigate = () => {
    goto("/");
  };
</script>

<div class="p-8 bg-[#131313]">
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
  <h1 class="cursor-pointer select-none" on:click={handleNavigate}>
    Svelte Testing
  </h1>
</div>

<div class="p-8">
  <slot />
</div>
