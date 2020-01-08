export default {
  state: {
    funds: 10000,
    userStocks: []
  },
  mutations: {
    addToPortfolio(state, payload) {
      state.userStocks.push(payload);
    },
    updateFunds(state, payload) {
      state.funds = payload;
    }
  },
  actions: {
    buyStock({ state, commit }, payload) {
      const cost = state.funds - payload.info.price * payload.quantity;
      if (cost < 0) {
        // user cannot afford
        return;
      }
      commit("updateFunds", cost);
      commit("addToPortfolio", payload);
    }
  },
  getters: {
    getUserStocks(state) {
      return state.userStocks;
    }
  }
};
