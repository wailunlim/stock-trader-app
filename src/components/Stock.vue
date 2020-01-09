<template>
  <div class="card mb-3" style="max-width: 25rem;">
    <div class="card-body">
      <h5 class="card-title mb-1">{{ stock.name }}</h5>
      <h6 class="card-subtitle text-muted">(Price: {{ stock.price }})</h6>
    </div>
    <div class="card-body">
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            @input="quantity <= 0 ? (quantity = null) : quantity"
          />
        </div>
        <button
          class="btn btn-success mb-2"
          @click.prevent="buyStock({ info: stock, quantity })"
          :disabled="!quantity"
        >
          Buy
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Stock",
  props: ["stock"],
  methods: {
    ...mapActions(["buyStock"])
  },
  data() {
    return {
      quantity: null
    };
  }
};
</script>

<style scoped>
</style>
