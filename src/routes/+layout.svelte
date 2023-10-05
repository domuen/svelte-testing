<script>
  import "../app.css";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const routeHeader = (() => {
    const { pathname } = $page.url;

    if (pathname === "/") return "Home";
    if (pathname === "/components") return "Components";

    return pathname;
  })();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Components",
      path: "/components",
    },
    {
      name: "Items",
      path: "/items",
    }
  ];

  const handleNavigate = () => {
    goto("/");
  };
</script>

<div class="flex flex-row">
  <div class="flex flex-col h-screen border-r border-r-secondary">
    <div class="bg-primary border-b border-b-secondary px-48 py-10">
      <h1 class="whitespace-nowrap">Svelte Testing</h1>
    </div>

    <div class="flex flex-col p-6 gap-6">
      {#each routes as route}
        <a class="text-button-text" href={route.path}>{route.name}</a>
      {/each}
    </div>
  </div>

  <div class="flex flex-col w-full">
    <div
      class="flex items-center justify-center bg-primary border-b border-b-secondary px-48 py-10"
    >
      <h1 class="whitespace-nowrap">{routeHeader}</h1>
    </div>

    <div class="p-6">
      <slot />
    </div>
  </div>
</div>
