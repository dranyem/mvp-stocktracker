<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <button class="btn btn-outline-light" @click="search" type="button">Search</button>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="keyword"
            @keyup.enter="search"
            @blur="clearSearch"
            @focus="search"
            @keyup.delete="clearSearch"
            placeholder="Search Stock Symbol"
          />
        </div>
      </div>
      <a class="navbar-brand px-3" href="#">
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

    <div class="container-md">
      <div class="list-group">
        <a
          href="#"
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
</template>

<script>
import axios from "axios";
export default {
  name: "Navigation",
  data() {
    return {
      keyword: "",
      searchList: [],
      isListHidden: true
    };
  },
  methods: {
    search() {
      this.clearSearch();
      if (this.keyword != "") {
        axios
          .get(
            "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
              this.keyword +
              "&apikey=" +
              process.env.VUE_APP_ALPHAVANTAGE_KEY
          )
          .then(response => {
            this.isListHidden = false;
            for (var i = 0; i < response.data.bestMatches.length; i++) {
              this.searchList.push(response.data.bestMatches[i]);
            }
          });
      }
    },
    clearSearch() {
      this.searchList = [];
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
  max-height: 300px;
  position: absolute;
  z-index: 999;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
