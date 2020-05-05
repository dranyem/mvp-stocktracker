<template>
  <div
    class="card m-3 d-inline-block shadow rounded"
    :class="[stockSymbol.percent>0? 'border-success':'border-danger']"
  >
    <a @click="deleteItem" class="btn btn-sm float-right position-relative m-1">X</a>
    <div class="card-body">
      <h5 class="card-title mr-3 d-inline-block">{{stockSymbol.symbol}}</h5>
      <img
        width="25px"
        height="25px"
        :src="['https://storage.googleapis.com/iex/api/logos/'+stockSymbol.symbol+'.png']"
        class="ml-3 d-inline-block"
      />
      <h6 class="card-subtitle mt-1">{{stockSymbol.name}}</h6>
      <p class="my-0">
        Price:
        <strong>{{stockSymbol.price}}</strong>
      </p>
      <p class="mb-0">
        Price Change:
        <strong
          :class="[stockSymbol.percent>0? 'text-success':'text-danger']"
        >{{stockSymbol.percent.toFixed(2)}} %</strong>
      </p>
      <p class="text-muted mb-1">Last Updated : {{stockSymbol.date}}</p>
      <a @click="displayStockModal()" class="btn btn-outline-light btn-sm">VIEW</a>
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
      this.$store.dispatch("displayModal", this.stockSymbol.symbol);
    },
    deleteItem() {
      this.$store.commit("deleteUserStockList", this.stockSymbol);
    }
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  height: 190px;
  background-color: #424c6a;
  text-overflow: ellipsis;
  overflow: hidden;
}
a:hover {
  color: red;
}
p.text-muted {
  font-size: 12px;
}
</style>