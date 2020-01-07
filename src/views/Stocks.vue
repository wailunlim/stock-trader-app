<template>
  <div class="container d-flex flex-wrap justify-content-around">
    <app-stock v-for="i in 4" :key="i" />
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";

export default {
  name: "Stocks.vue",
  components: {
    "app-stock": Stock
  }
};
</script>

<style scoped></style>
