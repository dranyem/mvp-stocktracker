<template>
  <div class="listContainer bg-transparent border-top border-white">
    <a
      v-if="!isListUpdated"
      class="btn btn-outline-info btn-sm mt-1 mb-0 p-1"
      @click="updateList"
    >Click here to update</a>
    <p v-else class="h6 text-left p-2 d-inline">Stock track list is up to date</p>
    <div class="myStock">
      <h1
        class="text-center"
        v-if="userStockList.length==0"
      >Start Tracking your Stocks. Search and Add it to your list.</h1>
      <BaseStock v-for="(item,index) in userStockList" :key="index" :stock="item" />
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
      isListUpdated: true
    };
  },
  computed: {
    userStockList() {
      return this.$store.getters.userStockList;
    }
  },
  mount() {
    for (var i = 0; i < this.userStockList().length; i++) {
      const currDate = new Date().toDateString();
      if (this.userStockList()[i].date != currDate) {
        this.isListUpdated = false;
        break;
      }
    }
  },
  methods: {
    updateList() {
      this.$store.dispatch("updateList");
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