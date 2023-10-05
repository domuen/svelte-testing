<script lang="ts">
  import Login from "$lib/components/login.svelte";
  import Register from "$lib/components/register.svelte";
</script>

<div class="flex flex-col items-center justify-center gap-8">
  <h1>Components</h1>

  <p>These are some common components I made</p>

  <div class="flex flex-row items-center gap-8">
    <div
      class="flex flex-col items-center border-[#3c3c3c] border rounded-xl overflow-hidden"
    >
      <div class="bg-[#303030] w-full">
        <h3 class="px-6 py-3">Login</h3>
      </div>

      <div class="bg-[#242424] p-10">
        <Login />
      </div>
    </div>

    <div
      class="flex flex-col items-center border-[#3c3c3c] border rounded-xl overflow-hidden"
    >
      <div class="bg-[#303030] w-full">
        <h3 class="px-6 py-3">Register</h3>
      </div>

      <div class="bg-[#242424] p-10">
        <Register />
      </div>
    </div>
  </div>
</div>
