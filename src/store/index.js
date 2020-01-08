import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";

Vue.use(Vuex);

// helper functions
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
const randomSign = () => (Math.round(Math.random()) === 0 ? -1 : 1);

export default new Vuex.Store({
  state: {
    stocks: [
      { name: "BMW", price: 110 },
      { name: "Google", price: 44 },
      { name: "Apple", price: 280 },
      { name: "Twitter", price: 60 }
    ]
  },
  getters: {
    getStocks({ stocks }) {
      return stocks;
    },
    getStockByName: state => {
      return name => state.stocks.find(stock => stock.name === name);
    }
  },
  mutations: {
    updateStockPrices(state) {
      state.stocks.forEach(
        stock => (stock.price += getRandomInt(1, 15) * randomSign())
      );
    }
  },
  actions: {
    endDay({ commit }) {
      commit("updateStockPrices");
    }
  },
  modules: {
    user
  }
});
