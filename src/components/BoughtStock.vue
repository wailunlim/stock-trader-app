<template>
  <div class="card mb-3" style="width: 25rem;">
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
          <input type="text" class="form-control" placeholder="Quantity" />
        </div>
        <button class="btn btn-warning mb-2">Sell</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoughtStock.vue",
  props: ["stock"]
};
</script>

<style scoped></style>
