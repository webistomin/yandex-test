export default {
  state: {
    eventsList: [],
    now: new Date(),
    selectedDate: new Date(),
    isOpenedNewEventModal: false,
    isOpenedEventCreatedModal: false,
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
    setEventCreatedModal(state, payload) {
      state.isOpenedEventCreatedModal = payload;
    },
    setNewEvent(state, payload) {
      state.eventsList.push(payload);
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
    getEventCreatedModal(state) {
      return state.isOpenedEventCreatedModal;
    },
    getEventsList(state) {
      return state.eventsList;
    },
  },
};
