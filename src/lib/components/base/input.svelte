<script lang="ts">
  export let password: undefined | boolean = undefined;
  export let placeholder: string;
  export let value: string;

  let showPassword = false;

  const handleToggleShowPassword = () => {
    showPassword = !showPassword;
  };
</script>

{#if !password}
  <input
    class="text-white rounded-lg bg-[#131313] p-3"
    {placeholder}
    bind:value
  />
{:else}
  <div
    class="flex flex-row items-center text-white rounded-lg bg-[#131313] focus-within:outline outline-1 overflow-hidden"
  >
    {#if !showPassword}
      <input
        class="bg-transparent w-full p-3 focus:outline-none"
        type="password"
        {placeholder}
        bind:value
      />
    {:else}
      <input
        class="bg-transparent w-full p-3 focus:outline-none"
        type="text"
        {placeholder}
        bind:value
      />
    {/if}

    <div
      class="bg-white p-6 grow cursor-pointer"
      role="button"
      tabindex="0"
      on:keypress={() => {}}
      on:click={handleToggleShowPassword}
    >
      <!-- TODO get icon -->
    </div>
  </div>
{/if}
