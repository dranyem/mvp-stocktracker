<template>
  <div class="myModal position-fixed fixed-top" @click="closeModal">
    <div class="d-flex h-100">
      <div class="row justify-content-center mx-auto align-self-center">
        <div class="card">
          <div class="card-header text-center">
            <strong class="h4">{{stockInfo.searchInfo["1. symbol"]}}</strong> -
            <i>{{stockInfo.searchInfo["2. name"]}}</i>
            <a @click="closeModal" class="btn btn-outline-danger btn-sm float-right m-0">X</a>
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Stock Information</h5>
            <div class="row">
              <div class="col-sm">
                <p>
                  Type :
                  <strong>{{stockInfo.searchInfo["3. type"]}}</strong>
                </p>
                <p>
                  Region/Country :
                  <strong>{{stockInfo.searchInfo["4. region"]}}</strong>
                </p>
                <p>
                  Market Open Time :
                  <strong>{{stockInfo.searchInfo["5. marketOpen"]}}</strong>
                </p>
                <p>
                  Market Close Time :
                  <strong>{{stockInfo.searchInfo["6. marketClose"]}}</strong>
                </p>
                <p>
                  Timezone :
                  <strong>{{stockInfo.searchInfo["7. timezone"]}}</strong>
                </p>
                <p>
                  Currency :
                  <strong>{{stockInfo.searchInfo["8. currency"]}}</strong>
                </p>
              </div>
              <div class="col-sm">
                <p>
                  Open :
                  <strong>{{stockInfo.quoteInfo["02. open"]}}</strong>
                </p>
                <p>
                  High :
                  <strong>{{stockInfo.quoteInfo["03. high"]}}</strong>
                </p>
                <p>
                  Low :
                  <strong>{{stockInfo.quoteInfo["04. low"]}}</strong>
                </p>
                <p>
                  Price :
                  <strong>{{stockInfo.quoteInfo["05. price"]}}</strong>
                </p>
                <p>
                  Volume :
                  <strong>{{stockInfo.quoteInfo["06. volume"]}}</strong>
                </p>
                <p>
                  Latest Trading Day :
                  <strong>{{stockInfo.quoteInfo["07. latest trading day"]}}</strong>
                </p>
                <p>
                  Previous Close :
                  <strong>{{stockInfo.quoteInfo["08. previous close"]}}</strong>
                </p>
                <p>
                  Price Change :
                  <strong>{{stockInfo.quoteInfo["09. change"]}}</strong>
                </p>
                <p>
                  Price Change Percent :
                  <strong>{{stockInfo.quoteInfo["10. change percent"]}}</strong>
                </p>
              </div>
            </div>
            <a @click="addToList()" class="btn btn-outline-light mx-auto">Add to list</a>
          </div>
          <div
            class="card-footer text-muted h6 font-italic text-center"
          >Data provided by AlphaVantage API</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockInfoModal",
  props: {
    stockInfo: Object
  },
  methods: {
    closeModal() {
      this.$store.commit("closeModal");
    },
    addToList() {
      this.$store.commit("addUserStockList", this.stockInfo);
    }
  }
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
  height: 100%;
  overflow: auto;
  background-color: #424c6a;
}
p {
  font-size: small;
}
</style>