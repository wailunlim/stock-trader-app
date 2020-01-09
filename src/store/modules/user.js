export default {
  state: {
    funds: 10000,
    userStocks: []
  },
  mutations: {
    addToPortfolio(state, payload) {
      const index = state.userStocks.findIndex(
        stock => stock.info.name === payload.info.name
      );
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
    },
    decrementStock(state, payload) {
      // sanity check: index can never be -1
      const index = state.userStocks.findIndex(
        stock => stock.info.name === payload.name
      );
      console.log(state.userStocks[0].info.name);
      console.log(payload);
      console.log(index);
      state.userStocks[index].quantity -= payload.quantity;
      // if the quantity is 0, remove from userStocks
      if (!state.userStocks[index].quantity) state.userStocks.splice(index, 1);
    }
  },
  actions: {
    buyStock({ state, commit }, payload) {
      const balance = state.funds - payload.info.price * payload.quantity;
      if (balance < 0) {
        // user cannot afford, do not commit
        return;
      }
      commit("updateFunds", balance);
      commit("addToPortfolio", payload);
    },
    sellStock({ state, commit, rootGetters }, payload) {
      // calculate the $ earned from selling
      const stockPrice = rootGetters.getStockByName(payload.name).price;
      const balance = state.funds + stockPrice * payload.quantity;
      // decrease quantity
      commit("decrementStock", payload);
      // update funds
      commit("updateFunds", balance);
    }
  },
  getters: {
    getUserStocks(state) {
      return state.userStocks;
    },
    getUserFunds(state) {
      return state.funds;
    }
  }
};
