<template>
  <div class="card mb-3" style="max-width: 25rem;">
    <div class="card-body">
      <h5 class="card-title mb-1">{{ stock.info.name }}</h5>
      <h6 class="card-subtitle text-muted">
        Price right now: {{ stock.info.price }}<br />
        Quantity holding onto: {{ stock.quantity }}
      </h6>
    </div>
    <div class="card-body">
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="number"
            :max="stock.quantity"
            @input="validateInput"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          />
        </div>
        <button
          class="btn btn-warning mb-2"
          :disabled="!quantity"
          @click.prevent="sellStock({ name: stock.info.name, quantity })"
        >
          Sell
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BoughtStock.vue",
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  methods: {
    validateInput(event) {
      if (event.target.value < 0) return (this.quantity = 0);
      if (event.target.value > this.stock.quantity)
        return (this.quantity = this.stock.quantity);
    },
    ...mapActions(["sellStock"])
  }
};
</script>

<style scoped>
</style>
