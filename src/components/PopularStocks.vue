<template>
  <div class="card mt-2 shadow">
    <div class="card-header">Popular Stocks</div>
    <div class="card-body">
      <StockSuggestion />
    </div>
  </div>
</template>

<script>
import StockSuggestion from "./StockSugestion.vue";
export default {
  name: "PopularStocks",
  components: {
    StockSuggestion
  }
};
</script>

<style scoped>
.card {
  color: white;
  background-color: #424c6a;
  height: 200px;
}
</style>