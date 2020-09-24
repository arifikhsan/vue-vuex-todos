import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: "Hello world",
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Banana aa", price: 40 },
      { name: "Banana bb", price: 50 },
      { name: "Banana cc", price: 60 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
