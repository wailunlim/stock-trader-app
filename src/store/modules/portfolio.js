export default {
  state: {
    userStocks: []
  },
  mutations: {
    addToPortfolio(state, payload) {
      state.userStocks.push(payload);
    }
  },
  actions: {
    buyStock({ commit }, payload) {
      commit("addToPortfolio", payload);
    }
  },
  getters: {
    getUserStocks(state) {
      return state.userStocks;
    }
  }
};
