<div class="container">
  <h1>Svelte Testing</h1>
</div>

<div class="slot">
  <slot />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");

  :global(body) {
    margin: 0;
    background-color: #212121;
    font-family: "Montserrat", sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6, p) {
    margin: 0;
    color: #fff;
  }

  .container {
    background-color: #131313;
    padding: 20px;
  }

  .slot {
    padding: 20px;
  }
</style>
