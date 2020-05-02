<template>
  <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-transparent">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <button class="btn btn-outline-light" @click="search" type="button">Search</button>
          </div>
          <!-- @blur="clearSearch" -->
          <input
            type="text"
            class="form-control"
            v-model="keyword"
            @keyup.enter="search"
            @focus="search"
            @keyup.delete="clearSearch"
            placeholder="Search Stock Symbol"
          />

          <div class="list-group mt-2">
            <a
              @click="displayStockModal(item['1. symbol'])"
              class="list-group-item list-group-item-action text-dark"
              v-for="item in this.searchList"
              :key="item.symbol"
            >
              <strong>{{item['1. symbol']}}</strong>
              | {{item['2. name']}}
              |
              <i>{{item['3. type']}}</i>
            </a>
          </div>
        </div>
      </div>
      <a class="navbar-brand px-3">
        <router-link to="/">
          <h1>StockTracker</h1>
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <ul class="navbar-nav pr-3">
        <li>
          <router-link to="/about">
            <h5>About</h5>
          </router-link>
        </li>
      </ul>-->
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.keyword);
      this.clearSearch();
    },
    clearSearch() {
      this.keyword = "";
      this.$store.commit("setSearchList", []);
    },
    displayStockModal(stock) {
      this.clearSearch();
      this.$store.dispatch("displayModal", stock);
    }
  },
  computed: {
    searchList() {
      return this.$store.getters.searchList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,
a:hover {
  color: white;
  text-decoration: none;
}
.list-group {
  width: 100%;
  max-height: 300px;
  position: absolute;
  top: 50px;
  z-index: 999;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
