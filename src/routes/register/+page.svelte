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

  <div class="fields-wrapper">
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
  </div>

  <button class="register-button" on:click={handleRegister}>Create Account</button>

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Already have an account?</p>
    <button on:click={handleNavigate}>Login</button>
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

  .register-button {
    padding: 6px;
    border-radius: 6px;
    border: 0;
    background-color: #131313;
    color: white;
  }
</style>
