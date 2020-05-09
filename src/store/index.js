import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchList: [],
    isModalHidden: true,
    stockInfo: {},
    userStockList: [],
    newsList: [],
    newsPage: 1,
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
      state.userStockList = state.userStockList.filter(
        (stock) => stock.symbol !== payload.symbol
      );
    },
    // setNewsList(state, payload) {
    //   state.newsList = payload;
    // },
    addNews(state, payload) {
      state.newsList.push(payload);
    },
    updateUserStockList(state, payload) {
      for (var i = 0; i < state.userStockList.length; i++) {
        if (state.userStockList[i].symbol == payload.symbol) {
          state.userStockList[i].date = payload.date;
          state.userStockList[i].price = payload.price;
          state.userStockList[i].percent = payload.percent;
          break;
        }
      }
    },
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
    },
  },
  actions: {
    search(context, payload) {
      if (payload != "") {
        axios
          .get(
            "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
              payload +
              "&apikey=" +
              process.env.VUE_APP_ALPHAVANTAGE_KEY1
          )
          .then((response) => {
            var list = [];
            for (var i = 0; i < response.data["bestMatches"].length; i++) {
              list.push(response.data.bestMatches[i]);
            }
            context.commit("setSearchList", list);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    displayModal(context, payload) {
      if (payload != "") {
        axios
          .get(
            "https://cloud.iexapis.com/stable/stock/" +
              payload.toLowerCase() +
              "/batch?types=quote,company,chart&chartCloseOnly=true&range=1m&displayPercent=true&token=" +
              process.env.VUE_APP_IEX_KEY
          )
          .then((response) => {
            context.commit("displayModal", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    newsList(context) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=stock market&apiKey=" +
            process.env.VUE_APP_NEWSAPI_KEY
        )
        .then((response) => {
          for (var i = 0; i < response.data.articles.length; i++) {
            context.commit("addNews", response.data.articles[i]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addMoreNews(context) {
      this.state.newsPage++;
      axios
        .get(
          "https://newsapi.org/v2/everything?q=stock market&page=" +
            this.state.newsPage +
            "&apiKey=" +
            process.env.VUE_APP_NEWSAPI_KEY
        )
        .then((response) => {
          for (var i = 0; i < response.data.articles.length; i++) {
            context.commit("addNews", response.data.articles[i]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateList(context) {
      const currentDate = new Date().toDateString();
      for (var i = 0; i < this.state.userStockList.length; i++) {
        if (this.state.userStockList[i].date != currentDate) {
          axios
            .get(
              "https://cloud.iexapis.com/stable/stock/" +
                this.state.userStockList[i].symbol +
                "/batch?types=quote,company&displayPercent=true&token=" +
                process.env.VUE_APP_IEX_KEY
            )
            .then((response) => {
              context.commit("updateUserStockList", {
                symbol: response.data.company.symbol,
                name: response.data.company.companyName,
                price: response.data.quote.latestPrice,
                percent: response.data.quote.changePercent,
                date: new Date(response.data.quote.latestUpdate).toDateString(),
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["userStockList"],
      getState: (key) => cookie.getJSON(key),
      setState: (key, state) =>
        cookie.set(key, state, { expires: 365, secure: false }),
    }),
  ],
});
