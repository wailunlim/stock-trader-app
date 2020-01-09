<template>
  <div class="container d-flex flex-wrap justify-content-around">
    <h1 v-if="getUserStocks.length === 0">
      You have no owned stocks right now.<br />
      Purchase some stocks and come back here!
    </h1>
    <app-bought-stock
      v-for="stock in getUserStocks"
      :stock="stock"
      :key="stock.name"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BoughtStock from "../components/BoughtStock.vue";

export default {
  name: "Portfolio",
  components: {
    "app-bought-stock": BoughtStock
  },
  computed: {
    ...mapGetters(["getUserStocks"])
  }
};
</script>

<style scoped></style>
