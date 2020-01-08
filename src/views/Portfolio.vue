<template>
  <div class="container">
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
