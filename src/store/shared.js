export default {
  state: {
    now: new Date(),
    selectedDate: new Date(),
    isOpenedNewEventModal: false,
  },
  mutations: {
    setDate(state, payload) {
      state.now = payload;
    },
    setSelectedDate(state, payload) {
      state.selectedDate = payload;
    },
    setNewEventModal(state, payload) {
      state.isOpenedNewEventModal = payload;
    },
  },
  getters: {
    getCurrentDate(state) {
      return state.now;
    },
    getSelectedDate(state) {
      return state.selectedDate;
    },
    getNewEventModal(state) {
      return state.isOpenedNewEventModal;
    },
  },
};
