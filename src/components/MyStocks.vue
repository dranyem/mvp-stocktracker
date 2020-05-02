<template>
  <div class="listContainer bg-transparent border-top border-white">
    <p class="h6 text-left p-2 d-inline" @click="add('AAPL')">
      Your stock list - Updated as of
      <span
        class="font-italic font-weight-lighter"
      >{{new Date().toJSON().slice(0,10).replace(/-/g,'-')}}</span>
    </p>
    <div class="myStock">
      <h1 class="text-center" v-if="userStockList.length==0">No stocks to display</h1>
      <BaseStock v-for="(item,index) in userStockList" :key="index" :stockSymbol="item" />
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
  computed: {
    userStockList() {
      return this.$store.getters.userStockList;
    }
  }
};
</script>

<style scoped>
.myStock {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}
.container-fluid {
  min-height: 250px;
}
.listContainer {
  height: 250px;
}
</style>