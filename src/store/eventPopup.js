export default {
  state: {
    isEventOpened: false,
    currentEvent: null,
  },
  mutations: {
    setEventModal(state, payload) {
      state.isEventOpened = payload;
    },
    setCurrentEvent(state, payload) {
      state.currentEvent = payload;
    },
  },
  getters: {
    getEventModal(state) {
      return state.isEventOpened;
    },
    getCurrentEvent(state) {
      return state.currentEvent;
    },
  },
};
