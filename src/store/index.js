import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate'
import cookie from 'js-cookie'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchList: [],
    isModalHidden: true,
    stockInfo: {},
    userStockList: [],
    newsList: [],
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
    },
    addUserStockList(state, payload) {
      state.userStockList.push(payload);
    },
    deleteUserStockList(state, payload) {
      state.userStockList = state.userStockList.filter(stock => stock.searchInfo["1. symbol"] !== payload.searchInfo["1. symbol"]);
    },
    setNewsList(state, payload) {
      state.newsList = payload;
    },
    addNews(state, payload) {
      state.newsList.push(payload);
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
    },
    userStockList(state) {
      // console.log(state.userStockList);
      return state.userStockList;
    },
    newsList(state) {
      return state.newsList;
    }
  },
  actions: {
    search(context, payload) {
      if (payload != "") {
        axios.get(
          "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
          payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY1
        ).then(response => {
          var list = [];
          for (var i = 0; i < response.data["bestMatches"].length; i++) {
            list.push(response.data.bestMatches[i]);
          }
          context.commit("setSearchList", list);
        }).catch(error => {
          console.log(error);
        });
      }
    },
    displayModal(context, payload) {
      if (payload != "") {
        axios.all([
          axios.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY2),
          axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY3),
          // axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY4),
          // axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY5),
          // axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=" + payload + "&apikey=" + process.env.VUE_APP_ALPHAVANTAGE_KEY6)
        ]).then(axios.spread((search, quote,
          //  daily, weekly, monthly
        ) => {
          var searchData, quoteData;
          //  dailyData, weeklyData, monthlyData;
          for (var i = 0; i < search.data.bestMatches.length; i++) {
            if (payload == search.data.bestMatches[i]["1. symbol"]) {
              searchData = search.data.bestMatches[i];
              break;
            }
          }
          quoteData = quote.data["Global Quote"];
          // dailyData = daily.data["Time Series (Daily)"];
          // weeklyData = weekly.data["Weekly Time Series"];
          // monthlyData = monthly.data["Monthly Time Series"];
          context.commit("displayModal", {
            searchInfo: searchData,
            quoteInfo: quoteData,
            // dailyInfo: dailyData,
            // weeklyInfo: weeklyData,
            // monthlyInfo: monthlyData
          });

        }));
      }
    },
    newsList(context) {
      axios.get("https://newsapi.org/v2/everything?q=stock market&apiKey=" + process.env.VUE_APP_NEWSAPI_KEY);
        .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    // context.commit('setNewsList');
  }
},
  modules: {},
  plugins: [
  createPersistedState({
    paths: ['userStockList'],
    getState: (key) => cookie.getJSON(key),
    setState: (key, state) => cookie.set(key, state, { expires: 365, secure: false })
  })
]
});
