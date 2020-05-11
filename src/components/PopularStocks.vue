<template>
  <div class="card mt-2 shadow">
    <div class="card-header">Popular Stocks</div>
    <div class="card-body">
      <div id="carouselExampleInterval" class="carousel slide shadow" data-ride="carousel">
        <div class="carousel-inner">
          <StockSuggestion />
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
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