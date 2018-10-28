import Vue from 'vue';

export default {
  state: {
    eventsList: [],
    now: new Date(),
    selectedDate: new Date(),
    isOpenedNewEventModal: false,
    isOpenedEventCreatedModal: false,
    isOpenedEventDeleteModal: false,
    isEdit: false,
    editIndex: null,
  },
  mutations: {
    setEdit(state, payload) {
      state.isEdit = payload;
    },
    setEditIndex(state, payload) {
      state.editIndex = payload;
    },
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
    setEventDeleteModal(state, payload) {
      state.isOpenedEventDeleteModal = payload;
    },
    setNewEvent(state, payload) {
      state.eventsList.push(payload);
    },
    updateEvent(state, payload) {
      Vue.set(state.eventsList, state.editIndex, payload);
    },
    deleteCurrentEvent(state) {
      Vue.delete(state.eventsList, state.editIndex);
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
    getEventDeleteModal(state) {
      return state.isOpenedEventDeleteModal;
    },
    getEventsList(state) {
      return state.eventsList;
    },
    getEditState(state) {
      return state.isEdit;
    },
    getEditIndex(state) {
      return state.editIndex;
    },
  },
};
