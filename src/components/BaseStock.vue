<template>
  <div class="card m-3 d-inline-block shadow rounded">
    <a href="#" class="btn btn-outline-danger btn-sm float-right position-relative m-1">X</a>
    <div class="card-body">
      <h5 class="card-title">Stock Symbol</h5>
      <h6 class="card-subtitle mb-2">
        Stock Name |
        <span class="font-italic font-weight-lighter h6">Type</span>
      </h6>
      <p class="mb-0">
        Price:
        <strong>100.00</strong>
      </p>
      <p class>
        Price Change:
        <strong class="text-success">3.07%</strong>
      </p>
      <a @click="displayStockModal" class="btn btn-outline-light btn-sm d-inline-block p-1">VIEW</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStock",
  props: {
    // stockSymbol: String,
    // stockName: String,
    // stockType: String,
    // stockPrice: Number,
    // stockChangePrice: String
  },
  computed: {
    stockSymbol() {
      return Object.keys(this.stock)[0];
    }
  },
  methods: {
    displayStockModal() {
      this.$store.commit("displayModal", { symbol: "SYMBOL", name: "NAME" });
    }
  }
};
</script>

<style>
.card {
  width: 250px;
  height: 185px;
  color: white;
  background-color: #424c6a;
}
</style>