<template>
  <div class="listContainer bg-transparent border-top border-white">
    <p class="h6 text-left p-2 d-inline">
      <a>Click here to update your stocks!</a>
    </p>
    <div class="myStock">
      <h1
        class="text-center"
        v-if="userStockList.length==0"
      >Start Tracking your Stocks. Search and Add it to your list.</h1>
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