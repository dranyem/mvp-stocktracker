<template>
  <div class="listContainer bg-transparent border-top border-white">
    <div v-if="isLoading" class="d-flex justify-content-center position-fixed w-100 h-100">
      <div class="spinner-border position-relative" style="{top: 50%}" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <span class>Updating ...</span>
    </div>
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
      isListUpdated: true,
      isLoading: false
    };
  },
  computed: {
    userStockList() {
      return this.$store.getters.userStockList;
    }
  },
  mounted() {
    const currDate = new Date().toDateString();
    for (var i = 0; i < this.$store.getters.userStockList.length; i++) {
      if (this.$store.getters.userStockList[i].date != currDate) {
        this.isListUpdated = false;
        break;
      }
    }
  },
  methods: {
    updateList() {
      this.$store.dispatch("updateList");
      this.isListUpdated = true;
      // this.isLoading = true;
      // setTimeout(function() {
      this.$store.dispatch("updateList");
      //   this.isLoading = false;
      // }, 3000);
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