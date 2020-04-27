<template>
  <div class="container-fluid bg-transparent border-top border-white">
    <p class="h6 text-left p-2 d-inline">
      Your stock list - Updated as of
      <span
        class="font-italic font-weight-lighter"
      >{{new Date().toJSON().slice(0,10).replace(/-/g,'-')}}</span>
    </p>
    <div class="myStock">
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
      <BaseStock :stock="this.sampleStock" />
    </div>
  </div>
</template>

<script>
import BaseStock from "./BaseStock.vue";
export default {
  name: "MyStocks",
  components: {
    BaseStock
  },
  data() {
    return {
      sampleStock: {
        "Global Quote": {
          "01. symbol": "IBM",
          "02. open": "122.4100",
          "03. high": "125.0000",
          "04. low": "120.7634",
          "05. price": "124.7200",
          "06. volume": "4920523",
          "07. latest trading day": "2020-04-24",
          "08. previous close": "121.3500",
          "09. change": "3.3700",
          "10. change percent": "2.7771%"
        }
      }
    };
  }
};
</script>

<style scoped>
.myStock {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>