<template>
  <div>
    <div
      v-for="(item, index) in list"
      :key="index"
      class="carousel-item"
      :class="[index==0? 'active':'']"
      data-interval="3000"
    >
      <div class="card text-center shadow">
        <div class="card-body">
          <h5 class="card-title d-inline-block">{{item.stockSymbol}}</h5>
          <img
            width="25px"
            height="25px"
            :src="['https://storage.googleapis.com/iex/api/logos/'+item.stockSymbol+'.png']"
            @error="this.displayLogo==false"
            class="ml-3 d-inline-block"
          />
          <p class="card-text">{{item.stockName}}</p>
          <a @click="displayModal(item.stockSymbol)" class="stretched-link"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopularStocksList from "../json/popularstocks.json";
export default {
  name: "StockSuggestion",
  data() {
    return {
      list: PopularStocksList,
      displayLogo: true
    };
  },
  methods: {
    displayModal(data) {
      this.$store.dispatch("displayModal", data);
    }
  }
  // computed: {
  //   list() {}
  // }
};
</script>

<style scoped>
.card {
  max-height: 120px;
  background-color: #424c6a;
}
</style>