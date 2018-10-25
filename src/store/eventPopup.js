export default {
  state: {
    isEventOpened: false,
    coordX: 0,
    coordY: 0,
    currentEvent: null,
  },
  mutations: {
    setEventModal(state, payload) {
      state.isEventOpened = payload;
    },
    setCoordX(state, payload) {
      state.coordX = payload;
    },
    setCoordY(state, payload) {
      state.coordY = payload;
    },
    setCurrentEvent(state, payload) {
      state.currentEvent = payload;
    },
  },
  getters: {
    getEventModal(state) {
      return state.isEventOpened;
    },
    getCoordX(state) {
      return state.coordX;
    },
    getCoordY(state) {
      return state.coordY;
    },
    getCurrentEvent(state) {
      return state.currentEvent;
    },
  },
};
