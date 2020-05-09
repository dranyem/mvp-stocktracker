<template>
  <div id="carouselExampleInterval" class="carousel slide shadow" data-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="carousel-item active"
        data-interval="3000"
      >
        <div class="card text-center shadow">
          <div class="card-body">
            <h5 class="card-title">{{item}}</h5>
            <p class="card-text">Stock Name</p>
            <!-- <a href="#" class="btn btn-outline-light btn-sm">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
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
</template>

<script>
export default {
  name: "StockSuggestion",
  data() {
    return {
      list: ["a", "b", "c"]
    };
  }
};
</script>

<style scoped>
.card {
  max-height: 120px;
  background-color: #424c6a;
}
</style>