<template>
  <div class="card m-3 d-inline-block shadow">
    <a href="#" class="btn btn-outline-danger btn-sm float-right position-relative m-1">X</a>
    <div class="card-body">
      <h5 class="card-title">Stock Symbol</h5>
      <h6 class="card-subtitle text-muted mb-2">
        Stock Name |
        <span class="font-italic font-weight-lighter h6">Type</span>
      </h6>
      <p class="mb-0">
        Price:
        <strong>100.00</strong>
      </p>
      <p class>
        Price Change:
        <strong>3.07%</strong>
      </p>
      <!-- <a href="#" class="btn btn-outline-success btn-sm p-1 mx-2">View</a> -->
      <a href="#" class="btn btn-outline-success btn-sm mx-auto d-block">VIEW</a>
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
  }
};
</script>

<style>
.card {
  width: 250px;
  height: 185px;
  color: #3a435e;
}
</style>