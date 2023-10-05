<script lang="ts">
  import { goto } from "$app/navigation";
  import cn from "classnames";

  export let label: undefined | string = undefined;
  export let href: undefined | string = undefined;
  export let enabled: boolean = false;

  const bg = (() => {
    if (enabled) return "bg-nav-button-enabled-bg";
    return "";
  })();

  const handleNavigate = () => {
    goto(href!);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
  class={cn(
    bg,
    "hover:bg-nav-button-hover-bg active:bg-nav-button-focus-bg rounded-lg px-4 py-3 select-none"
  )}
  on:click={handleNavigate}
>
  <!-- TODO add icons -->
  <p class="text-button-text">{label}</p>
</div>
