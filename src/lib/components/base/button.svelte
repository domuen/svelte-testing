<script lang="ts">
  import cn from "classnames";

  export let label: undefined | string = undefined;
  export let disabled: boolean = false;
  export let onClick: undefined | (() => void) = undefined;

  const bg = (() => {
    if (disabled) return "bg-button-disabled-bg";
    return "bg-button-bg";
  })();

  // const newBgQuestionMark = "#353535";
  // const enabledIdle = "#535353";
  // const disabled = "#3f3f3f";
</script>

<button
  class={cn(
    bg,
    { "hover:bg-button-hover-bg": !disabled },
    { "active:bg-button-active-bg": !disabled },
    "text-button-text rounded-xl py-2.5"
  )}
  {disabled}
  on:click={onClick}>{label}</button
>
