<script lang="ts">
  import { userWritable } from "$lib/store.js";
  import { goto } from "$app/navigation";

  let user: any = undefined;
  const date = 1696216682088;

  userWritable.subscribe((v) => (user = v));

  const handleNavigate = () => {
    goto("/login");
  };

  const handleLogout = () => {
    userWritable.set(undefined);
  };
</script>

<div class="container">
  <h1>Homepage</h1>

  {#if !Boolean(user?.name)}
    <p>Welcome to my svelte testing app</p>
  {:else}
    <p>Welcome back, {user?.name}, to my svelte testing app</p>
  {/if}

  <p>
    I'm going to figure this framework out and see if I'd want to use it in a
    production app
  </p>

  <p>I began this journey on {new Date(date)}</p>

  {#if !Boolean(user)}
    <h3>You are currently not logged in</h3>
    <button on:click={handleNavigate}>Login</button>
  {:else}
    <button on:click={handleLogout}>Logout</button>
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
