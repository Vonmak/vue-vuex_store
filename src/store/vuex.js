import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { name: "Banana", price: "20" },
      { name: "Shiny star", price: "40" },
      { name: "green shells", price: "60" },
      { name: "red shells", price: "80" },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => {
        product.price -= 1;
      });
    },
  },
  actions: {
    reducePrice: (context) => {
      // setTimeout(function () {
      context.commit("reducePrice");
      // }, 2000);
    },
  },
});
