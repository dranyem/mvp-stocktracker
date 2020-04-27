<template>
  <div
    class="myModal position-fixed fixed-top"
    @click="closeModal"
    :class="[isHidden? 'd-none':'d-flex']"
  >
    <div class="container d-flex h-100">
      <div class="row justify-content-center mx-auto align-self-center">
        <div class="card text-center">
          <div class="card-header">
            <strong class="h4">{{stockInfo.symbol}}</strong> -
            <i>{{stockInfo.name}}</i>
            <a @click="closeModal" class="btn btn-outline-danger btn-sm float-right m-0">X</a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p
              class="card-text"
            >With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <div class="card-footer text-muted h6 font-italic">Data provided by AlphaVantage API</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockInfoModal",
  props: {
    isHidden: Boolean,
    stockInfo: Object
  },
  methods: {
    closeModal() {
      this.$store.commit("closeModal");
    }
  }
  // mounted: {
  //   stockGlobalQuote() {
  //     axios
  //       .get(
  //         "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
  //           this.stockInfo.symbol +
  //           "&apikey=" +
  //           process.env.VUE_APP_ALPHAVANTAGE_KEY
  //       )
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }
};
</script>

<style scoped>
.myModal {
  width: 100vw;
  height: 100vh;
  background-color: #1a1e2ad2;
  z-index: 999;
}
.card {
  min-width: 300px;
  width: 100%;
  min-height: 500px;
}
</style>