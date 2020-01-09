export default {
  state: {
    memento: null
  },
  mutations: {
    replaceMemento(state, payload) {
      state.memento = payload;
    },
    resetSafekeeper(state) {
      state.memento = null;
    }
  },
  actions: {
    safekeep({ commit }, payload) {
      commit("replaceMemento", payload);
    },
    getMemento({ state }) {
      return new Promise(resolve => {
        resolve(state.memento);
      });
    }
  }
};
