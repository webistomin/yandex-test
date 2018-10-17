export default {
  state: {
    now: new Date(),
  },
  mutations: {
    setDate(state, payload) {
      state.now = payload;
    },
  },
  getters: {
    getCurrentTime(state) {
      return state.now;
    },
  },
};
