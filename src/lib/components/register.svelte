<script lang="ts">
  import Input from "$lib/input.svelte";
  import Button from "./button.svelte";

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

<div class="flex flex-col justify-center max-w-lg gap-6">
  <h1>Register</h1>

  <p>Create your account</p>

  <div class="flex flex-col gap-3">
    <Input placeholder="Name" value={name} />
    <Input placeholder="Email" value={email} />
    <Input placeholder="Password" value={password} password />
  </div>

  <Button label="Create Account" onClick={handleRegister} />

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Already have an account?</p>
    <button class="text-white" on:click={handleNavigate}>Login</button>
  </div>
</div>
