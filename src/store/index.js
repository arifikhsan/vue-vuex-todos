import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    hello: "Awesome Store",
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Banana aa", price: 40 },
      { name: "Banana bb", price: 50 },
      { name: "Banana cc", price: 60 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      const sale = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return sale;
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    },
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 3000);
    },
  },
  modules: {},
});
