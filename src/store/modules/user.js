export default {
  state: {
    funds: 10000,
    userStocks: []
  },
  mutations: {
    addToPortfolio(state, payload) {
      const index = state.userStocks.findIndex(stock => stock.info.name === payload.info.name);
      if (index === -1) {
        // adding a totally new stock
        state.userStocks.push(payload);
      } else {
        // incrementing the quantity of the stock that user already has
        state.userStocks[index].quantity += payload.quantity;
      }
    },
    updateFunds(state, payload) {
      state.funds = payload;
    }
  },
  actions: {
    buyStock({ state, commit }, payload) {
      const cost = state.funds - payload.info.price * payload.quantity;
      if (cost < 0) {
        // user cannot afford, do not commit
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
