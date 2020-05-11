<template>
  <div class="card mt-2 shadow">
    <div class="card-header">FOREX/CryptoCurrency</div>
    <div class="card-body pt-4">
      <div class="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <label class="btn btn-outline-light btn-sm active">
          <input @click="toggle('forex')" type="radio" name="options" checked /> FOREX
        </label>
        <label class="btn btn-outline-light btn-sm">
          <input @click="toggle('crypto') " type="radio" name="options" /> CryptoCurrency
        </label>
      </div>
      <div class="row pt-3">
        <div class="col-7">
          <div class="input-group">
            <div v-if="this.selected=='forex'" class="input-group-prepend">
              <button
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{this.selectedCurrency}}</button>
              <div class="dropdown-menu">
                <a
                  v-for="(item, index) in physicalCurrency"
                  :key="index"
                  class="dropdown-item"
                  @click="convertPC(item.currencySymbol)"
                >{{item.currencySymbol}} - {{item.currencyName}}</a>
              </div>
            </div>
            <div v-else class="input-group-prepend">
              <button
                class="btn btn-outline-light dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >{{this.selectedCurrency}}</button>
              <div class="dropdown-menu">
                <a
                  v-for="(item, index) in digitalCurrency"
                  :key="index"
                  class="dropdown-item"
                  @click="convertDC(item.currencySymbol)"
                >{{item.currencySymbol}} - {{item.currencyName}}</a>
              </div>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
              v-model="value"
              disabled
            />
          </div>
        </div>
        <div class="col-5">
          <h6 class="pt-2">{{convertedValue.toFixed(2)}} CAD</h6>
        </div>
      </div>
      <p class="text-center">{{conversionString}}</p>
    </div>
  </div>
</template>

<script>
import physicalCurrencyList from "../json/physicalcurrencylist.json";
import digitalCurrencyList from "../json/digitalcurrencylist.json";
import axios from "axios";
export default {
  name: "PopularStocks",
  data() {
    return {
      value: "",
      convertedValue: 0.0,
      selected: "forex",
      physicalCurrency: physicalCurrencyList,
      digitalCurrency: digitalCurrencyList,
      selectedCurrency: "FOREX",
      conversionString: ""
    };
  },
  methods: {
    toggle(data) {
      this.selected = data;
      this.selectedCurrency = data.toUpperCase();
      this.value = "";
      this.conversionString = "";
      this.convertedValue = 0.0;
    },
    convertDC(data) {
      this.selectedCurrency = data;
      this.value = 1.0;
      axios
        .get(
          "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" +
            data +
            "&to_currency=CAD&apikey=" +
            process.env.VUE_APP_ALPHAVANTAGE_KEY6
        )
        .then(response => {
          console.log(response.data);
          this.convertedValue = Number(
            response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
          );
          this.conversionString =
            data + " 1.00 = CAD " + this.convertedValue.toFixed(2);
        })
        .catch(error => {
          console.log(error);
        });
    },
    convertPC(data) {
      this.selectedCurrency = data;
      this.convertedValue = 1.0;
      axios
        .get(
          "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=CAD&to_currency=" +
            data +
            "&apikey=" +
            process.env.VUE_APP_ALPHAVANTAGE_KEY6
        )
        .then(response => {
          console.log(response.data);
          this.value = Number(
            response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
          );
          this.conversionString = data + " " + this.value + " = CAD 1.00";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.card {
  color: white;
  background-color: #424c6a;
  height: 200px;
}
.dropdown-menu {
  max-height: 400px;
  max-width: 350px;
  overflow: auto;
}
</style>