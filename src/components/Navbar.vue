<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <a href="/" class="navbar-brand">Stock Trader</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
    >
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="navbar-collapse collapse justify-content-stretch" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stocks">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Save & Load</a>
        </li>
        <li class="nav-item">
          <p class="nav-link disabled">Funds: $10,000</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar.vue"
};
</script>

<style scoped>
.navbar {
  margin: 2.5% 0;
}
</style>