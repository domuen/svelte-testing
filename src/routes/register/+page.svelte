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

<div class="flex flex-col justify-center max-w-lg gap-6">
  <h1>Register</h1>

  <p>Create your account</p>

  <div class="flex flex-col gap-3">
    <input
      class="text-white rounded-lg bg-[#131313] p-3"
      type="text"
      placeholder="Name"
      bind:value={name}
    />
    <input
      class="text-white rounded-lg bg-[#131313] p-3"
      type="email"
      placeholder="Email"
      bind:value={email}
    />
    <input
      class="text-white rounded-lg bg-[#131313] p-3"
      type="password"
      placeholder="Password"
      bind:value={password}
    />
  </div>

  <button
    class="text-white rounded-lg bg-[#131313] p-3"
    on:click={handleRegister}>Create Account</button
  >

  <div style="display:flex;flex-direction:row;align-items:center;gap:6px;">
    <p>Already have an account?</p>
    <button class="text-white" on:click={handleNavigate}>Login</button>
  </div>
</div>
