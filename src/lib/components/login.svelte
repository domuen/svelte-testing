<script lang="ts">
  // import { userWritable } from "$lib/store.js";

  import Input from "$lib/components/base/input.svelte";
  import Button from "$lib/components/base/button.svelte";

  let name = "";
  let email = "";
  let password = "";

  const handleNavigate = () => {
    // window.location.pathname = "/register";
  };

  const handleLogin = () => {
    // const payload = {
    //   name,
    //   email,
    //   password,
    // };

    // userWritable.set(payload);
  };
</script>

<div class="flex flex-col justify-center max-w-lg gap-6">
  <h1>Login</h1>

  <p>Please login to continue</p>

  <div class="flex flex-col gap-3">
    <Input placeholder="Name" value={name} />
    <Input placeholder="Email" value={email} />
    <Input placeholder="Password" value={password} password />
  </div>

  <Button label="Login" onClick={handleLogin} />

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Don't have an account?</p>
    <button class="text-white" on:click={handleNavigate}>Register</button>
  </div>
</div>
