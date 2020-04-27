import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    searchList: [],
    isModalHidden: true,
    stockInfo: {},
    stockList: []
  },
  mutations: {
    closeModal(state) {
      state.isModalHidden = true;
    },
    displayModal(state, payload) {
      state.isModalHidden = false;
      state.stockInfo = payload;
    },
    setSearchList(state, payload) {
      state.searchList = payload;
    }
  },
  getters: {
    isModalHidden(state) {
      return state.isModalHidden;
    },
    test(state) {
      return state.test;
    },
    stock(state) {
      return state.stockInfo;
    },
    searchList(state) {
      return state.searchList;
    }
  },
  actions: {
    search(context, payload) {
      if (payload != "") {
        axios.get(
          "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
          payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY
        ).then(response => {
          var list = [];
          for (var i = 0; i < response.data.bestMatches.length; i++) {
            list.push(response.data.bestMatches[i]);
          }
          context.commit("setSearchList", list);
        }).catch(error => {
          console.log(error);
        });
      }
    },
    displayModal(context, payload) {
      axios.all([
        axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY),
        axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY),
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY),
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY),
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY)
      ]).then(axios.spread((search, quote, daily, weekly, monthly) => {
        console.log(search.data);
        console.log(quote.data);
        console.log(daily.data);
        console.log(weekly.data);
        console.log(monthly.data);
      }));

      context.commit("displayModal", payload);
    }
  },
  modules: {}
});
