<script lang="ts">
  let email: string = "";
  let password = "";

  const handleNavigate = () => {
    window.location.pathname = "/register";
  };

  const handleLogin = () => {
    // Login user from localstorage using svelte store
  };
</script>

<div class="container">
  <h1>Login</h1>

  <p>Please login to continue</p>

  <input type="email" placeholder="Email" bind:value={email} />
  <input type="password" placeholder="Password" bind:value={password} />

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Don't have an account?</p>
    <button on:click={handleNavigate}>Register</button>
  </div>

  <button on:click={handleLogin}>Login</button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    gap: 6px;
  }
</style>
