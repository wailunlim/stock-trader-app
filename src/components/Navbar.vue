<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar"
    >
      <span class="navbar-toggler-icon" />
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
          <a class="nav-link" href="" @click.prevent="endDay">End Day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Save & Load</a>
        </li>
        <li class="nav-item">
          <p class="nav-link disabled">Funds: {{ funds }}</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar.vue",
  computed: {
    funds() {
      return this.$store.state.user.funds;
    }
  },
  methods: {
    ...mapActions(["endDay"])
  }
};
</script>

<style scoped>
.navbar {
  margin: 2.5% 0;
}
</style>
