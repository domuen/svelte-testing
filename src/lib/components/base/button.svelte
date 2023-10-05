<script lang="ts">
  export let label: undefined | string = undefined;
  export let disabled: boolean = false;
  export let onClick: undefined | (() => void) = undefined;

  // const newBgQuestionMark = "#353535";
  // const enabledIdle = "#535353";
  // const disabled = "#3f3f3f";
</script>

<button
  class="text-button-text bg-button-bg rounded-xl py-2.5"
  {disabled}
  on:click={onClick}>{label}</button
>
