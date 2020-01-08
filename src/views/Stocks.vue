<template>
  <div class="container d-flex flex-wrap justify-content-around">
    <app-stock v-for="i in 4" :key="i" />
    <app-stock v-for="stock in getStocks" :stock="stock" :key="stock.name" />
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
import { mapGetters } from "vuex";

export default {
  name: "Stock",
  components: {
    "app-stock": Stock
  },
  computed: mapGetters(["getStocks"])
};
</script>

<style scoped></style>
