<template>
  <div class="myModal position-fixed fixed-top" @click="closeModal">
    <div class="d-flex h-100">
      <div class="row justify-content-center mx-auto align-self-center">
        <div class="card m-xl-5">
          <div class="card-header text-center">
            <strong class="h4">{{stockInfo.company.symbol}}</strong> -
            <i>{{stockInfo.company.companyName}}</i>
            <img
              width="25px"
              height="25px"
              :src="['https://storage.googleapis.com/iex/api/logos/'+stockInfo.company.symbol+'.png']"
              class="ml-3 d-inline-block"
            />
            <a
              v-if="!checkUserStockList()"
              @click="addToList()"
              class="btn btn-outline-success btn-sm float-left m-0"
            >
              +
              <span class="text-light">Add To List</span>
            </a>

            <!-- <a @click="closeModal" class="btn btn-outline-danger btn-sm float-right m-0">x Close</a> -->
            <button
              @click="closeModal"
              type="button"
              class="close float-right text-light"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="card-body p-lg-5">
            <h5 class="card-title text-center">Stock Information</h5>
            <div class="row">
              <p>{{stockInfo.company.description}}</p>
            </div>
            <div class="row">
              <div class="col-sm">
                <p>
                  Primary Exchange :
                  <strong>{{stockInfo.company.exchange}}</strong>
                </p>
                <p>
                  Industry :
                  <strong>{{stockInfo.company.industry}}</strong>
                </p>
                <p>
                  Website :
                  <strong>{{stockInfo.company.website}}</strong>
                </p>
                <p>
                  CEO :
                  <strong>{{stockInfo.company.CEO}}</strong>
                </p>
                <p>
                  Address :
                  <strong>{{stockInfo.company.address}} {{stockInfo.company.city}} {{stockInfo.company.state}} {{stockInfo.company.country}} {{stockInfo.company.zip}}</strong>
                </p>
                <p>
                  Phone Number :
                  <strong>{{stockInfo.company.phone}}</strong>
                </p>
              </div>
              <div class="col-sm">
                <p>
                  Latest Price :
                  <strong>{{stockInfo.quote.latestPrice}}</strong>
                </p>
                <p>
                  Latest Update :
                  <strong>{{new Date(stockInfo.quote.latestUpdate).toLocaleString()}}</strong>
                </p>
                <p>
                  Previous Close :
                  <strong>{{stockInfo.quote.previousClose}}</strong>
                </p>
                <p>
                  Previous Volume :
                  <strong>{{stockInfo.quote.previousVolume}}</strong>
                </p>
                <p>
                  Price Change :
                  <strong
                    :class="[stockInfo.quote.change>0? 'text-success':'text-danger']"
                  >{{stockInfo.quote.change}}</strong>
                </p>
                <p>
                  Price Change Percentage :
                  <strong
                    :class="[stockInfo.quote.change>0? 'text-success':'text-danger']"
                  >{{stockInfo.quote.changePercent.toFixed(2)}}%</strong>
                </p>
              </div>
            </div>
            <a
              class="btn btn-info btn-lg btn-block mt-3 text-break"
            >Click here to view chart for this stock</a>
            <!-- <hr /> -->
          </div>
          <div class="card-footer text-muted h6 font-italic text-center">
            <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
          </div>
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
      this.$store.commit("updateUserStockList", {
        symbol: this.stockInfo.company.symbol,
        name: this.stockInfo.company.companyName,
        price: this.stockInfo.quote.latestPrice,
        percent: this.stockInfo.quote.changePercent,
        date: new Date(this.stockInfo.quote.latestUpdate).toDateString()
      });
    },
    addToList() {
      this.$store.commit("addUserStockList", {
        symbol: this.stockInfo.company.symbol,
        name: this.stockInfo.company.companyName,
        price: this.stockInfo.quote.latestPrice,
        percent: this.stockInfo.quote.changePercent,
        date: new Date(this.stockInfo.quote.latestUpdate).toDateString()
      });
    },
    checkUserStockList() {
      for (var i = 0; i < this.$store.getters.userStockList.length; i++) {
        if (
          this.$store.getters.userStockList[i].symbol ==
          this.stockInfo.company.symbol
        ) {
          return true;
        }
      }
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
  max-width: 90vw;
  background-color: #424c6a;
}
.card-body {
  max-height: 80vh;
  overflow: auto;
}
p {
  font-size: small;
}
hr {
  color: white;
  background-color: white;
}
.close :hover {
  color: red;
}
</style>