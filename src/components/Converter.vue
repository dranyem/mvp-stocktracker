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
              >FOREX</button>
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
              >Crypto</button>
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
            />
          </div>
        </div>
        <div class="col-5">
          <h4 class="pt-2">0.00 CAD</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import physicalCurrencyList from "../json/physicalcurrencylist.json";
import digitalCurrencyList from "../json/digitalcurrencylist.json";
export default {
  name: "PopularStocks",
  data() {
    return {
      value: "",
      selected: "forex",
      physicalCurrency: physicalCurrencyList,
      digitalCurrency: digitalCurrencyList
    };
  },
  methods: {
    toggle(data) {
      this.selected = data;
      console.log(this.selected);
    },
    convertDC(data) {},
    convertPC(data) {}
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