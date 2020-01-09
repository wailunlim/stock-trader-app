import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import safekeeper from "./modules/safekeeper.js";

const _ = require("lodash");

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
    },
    getStockMarketState: state => _.cloneDeep(state.stocks)
  },
  mutations: {
    updateStockPrices(state) {
      state.stocks.forEach(
        stock => (stock.price += getRandomInt(1, 15) * randomSign())
      );
    },
    replaceStockMarketState(state, payload) {
      state.stocks = payload;
    },
    resetStockMarket(state) {
      state.stocks = [
        { name: "BMW", price: 110 },
        { name: "Google", price: 44 },
        { name: "Apple", price: 280 },
        { name: "Twitter", price: 60 }
      ];
    }
  },
  actions: {
    endDay({ commit }) {
      alert("It's a brand new day! Stock prices have changed!");
      commit("updateStockPrices");
    },
    acceptMemento({ commit }, payload) {
      if (!payload) return; // if there wasn't a saved state to begin with
      commit("replaceStockMarketState", payload.stockMarketState);
      commit("replaceUserState", payload.userState);
      alert("Loaded saved state!");
    },
    createMemento({ dispatch, getters }) {
      const stockMarketState = getters.getStockMarketState;
      const userState = getters.getUserState;
      dispatch("safekeep", {
        stockMarketState,
        userState
      });
    },
    async restoreState({ dispatch }) {
      dispatch("getMemento").then(state => {
        dispatch("acceptMemento", state);
      });
    },
    restart({ commit }) {
      commit("resetStockMarket");
      commit("resetUser");
      commit("resetSafekeeper");
      alert("Reset!");
    }
  },
  modules: {
    user,
    safekeeper
  }
});
