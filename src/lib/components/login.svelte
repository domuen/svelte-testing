<script lang="ts">
  import { userWritable } from "$lib/store.js";
  import { goto } from "$app/navigation";
  import Input from "$lib/input.svelte";

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

<div class="flex flex-col justify-center max-w-lg gap-6">
  <h1>Login</h1>

  <p>Please login to continue</p>

  <div class="flex flex-col gap-3">
    <Input placeholder="Name" value={name} />
    <Input placeholder="Email" value={email} />
    <Input placeholder="Password" value={password} password />
  </div>

  <button class="text-white rounded-lg bg-[#131313] p-3" on:click={handleLogin}
    >Login</button
  >

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Don't have an account?</p>
    <button class="text-white" on:click={handleNavigate}>Register</button>
  </div>
</div>
