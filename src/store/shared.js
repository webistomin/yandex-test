export default {
  state: {
    now: new Date(),
    isOpenedNewEventModal: false,
  },
  mutations: {
    setDate(state, payload) {
      state.now = payload;
    },
    setNewEventModal(state, payload) {
      state.isOpenedNewEventModal = payload;
    },
  },
  getters: {
    getCurrentTime(state) {
      return state.now;
    },
    getNewEventModal(state) {
      return state.isOpenedNewEventModal;
    },
  },
};
