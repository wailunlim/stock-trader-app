<template>
  <div class="card mb-3" style="width: 25rem;">
    <div class="card-body">
      <h5 class="card-title mb-1">{{ stock.name }}</h5>
      <h6 class="card-subtitle text-muted">(Price: {{ stock.price }})</h6>
    </div>
    <div class="card-body">
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input type="text" class="form-control" placeholder="Quantity" />
        </div>
        <button
          class="btn btn-primary mb-2"
          @click.prevent="buyStock({ info: stock, quantity: 1 })"
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
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  margin: 2%;
}
</style>
