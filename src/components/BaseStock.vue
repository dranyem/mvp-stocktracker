<template>
  <div
    class="card m-2 d-inline-block shadow rounded"
    :class="[stock.percent>0? 'border-success':'border-danger']"
  >
    <button
      @click="deleteItem"
      type="button"
      class="close float-right m-2 text-light"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="card-body">
      <h5 class="card-title mr-3 d-inline-block">{{stock.symbol}}</h5>
      <img
        width="25px"
        height="25px"
        :src="['https://storage.googleapis.com/iex/api/logos/'+stock.symbol+'.png']"
        class="ml-3 d-inline-block"
      />
      <h6 class="card-subtitle mt-1">{{stock.name}}</h6>
      <p class="my-0">
        Price:
        <strong>{{stock.price}}</strong>
      </p>
      <p class="mb-0">
        Price Change:
        <strong
          :class="[stock.percent>0? 'text-success':'text-danger']"
        >{{stock.percent.toFixed(2)}} %</strong>
      </p>
      <p class="text-muted mb-1">Last Updated : {{stock.date}}</p>
      <a @click="displayStockModal()" class="btn btn-outline-light btn-sm">VIEW</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStock",
  props: {
    stock: Object
  },
  computed: {},
  methods: {
    displayStockModal() {
      this.$store.dispatch("displayModal", this.stock.symbol);
    },
    deleteItem() {
      this.$store.commit("deleteUserStockList", this.stock);
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
p.text-muted {
  font-size: 12px;
}
.close :hover {
  color: red;
}
</style>