import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "asdasdad",
    isModalHidden: false
  },
  mutations: {
    closeModal(state) {
      state.isModalHidden = true;
    }
  },
  getters: {
    isModalHidden(state) {
      return state.isModalHidden;
    },
    test(state) {
      return state.test;
    }
  },
  actions: {},
  modules: {}
});
