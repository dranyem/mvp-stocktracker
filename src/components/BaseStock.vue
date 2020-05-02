<template>
  <div class="card m-3 d-inline-block shadow rounded">
    <a @click="deleteItem" class="btn btn-outline-danger btn-sm float-right position-relative m-1">X</a>
    <div class="card-body">
      <h5 class="card-title">{{stockSymbol.searchInfo["1. symbol"]}}</h5>
      <h6 class="card-subtitle mb-2">
        {{stockSymbol.searchInfo["2. name"]}} |
        <span
          class="font-italic font-weight-lighter h6"
        >{{stockSymbol.searchInfo["3. type"]}}</span>
      </h6>
      <p class="mb-0">
        Price:
        <strong>{{stockSymbol.quoteInfo["05. price"]}}</strong>
      </p>
      <p class>
        Price Change:
        <strong
          :class="[stockSymbol.quoteInfo['09. change']>0? 'text-success':'text-danger']"
        >{{stockSymbol.quoteInfo["10. change percent"]}}</strong>
      </p>
      <a @click="displayStockModal()" class="btn btn-outline-light btn-sm d-inline-block p-1">VIEW</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStock",
  props: {
    stockSymbol: Object
  },
  computed: {},
  methods: {
    displayStockModal() {
      this.$store.dispatch(
        "displayModal",
        this.stockSymbol.searchInfo["1. symbol"]
      );
    },
    deleteItem() {
      console.log("clicked " + this.stockSymbol);
      this.$store.commit("deleteUserStockList", this.stockSymbol);
    }
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 185px;
  background-color: #424c6a;
  text-overflow: ellipsis;
  overflow: hidden;
}
a:hover {
  color: #3a435e;
}
</style>