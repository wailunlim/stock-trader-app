<template>
  <div class="container">
    <app-stock />
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";

export default {
  name: "Portfolio",
  components: {
    "app-stock": Stock
  }
};
</script>

<style scoped></style>
