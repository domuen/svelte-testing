<script lang="ts">
  import { userWritable } from "$lib/store.js";
  import { goto } from "$app/navigation";

  let name = "";
  let email = "";
  let password = "";

  const handleNavigate = () => {
    window.location.pathname = "/register";
  };

  const handleLogin = () => {
    const payload = {
      name,
      email,
      password,
    };

    userWritable.set(payload);
    goto("/");
  };
</script>

<div class="container">
  <h1>Login</h1>

  <p>Please login to continue</p>

  <div class="fields-wrapper">
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
  </div>

  <button class="login-button" on:click={handleLogin}>Login</button>

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Don't have an account?</p>
    <button on:click={handleNavigate}>Register</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    gap: 15px;
  }

  .fields-wrapper {
    display: flex;
    flex-direction: column;
    gap: 7.5px;
  }

  .fields-wrapper input {
    padding: 6px;
    border-radius: 6px;
    border: 0;
    background-color: #131313;
    color: #fff;
  }

  .login-button {
    padding: 6px;
    border-radius: 6px;
    border: 0;
    background-color: #131313;
    color: white;
  }
</style>
