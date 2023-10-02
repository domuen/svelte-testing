<script lang="ts">
  let name = "";
  let email: string = "";
  let password = "";

  const handleNavigate = () => {
    window.location.pathname = "/login";
  };

  const handleRegister = () => {
    // Stores users in localstorage
  };
</script>

<div class="container">
  <h1>Register</h1>

  <p>Create your account</p>

  <input type="text" placeholder="Name" bind:value={name} />
  <input type="email" placeholder="Email" bind:value={email} />
  <input type="password" placeholder="Password" bind:value={password} />

  <button on:click={handleRegister}>Login</button>

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
    gap: 6px;
  }
</style>
