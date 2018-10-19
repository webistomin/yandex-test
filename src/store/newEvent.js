export default {
  state: {
    currentRoom: null,
    startTime: null,
    endTime: null,
    currentFloor: null,
  },
  mutations: {
    setCurrentRoom(state, payload) {
      state.currentRoom = payload;
    },
    setStartTime(state, payload) {
      state.startTime = payload;
    },
    setEndTime(state, payload) {
      state.endTime = payload;
    },
    setCurrentFloor(state, payload) {
      state.currentFloor = payload;
    },
  },
  actions: {},
  getters: {
    getCurrentRoom(state) {
      return state.currentRoom;
    },
    getStartTime(state) {
      return state.startTime;
    },
    getEndTime(state) {
      return state.endTime;
    },
    getCurrentFloor(state) {
      return state.currentFloor;
    },
  },
};
