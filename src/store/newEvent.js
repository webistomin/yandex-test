export default {
  state: {
    currentRoom: null,
    currentTime: null,
    endTime: null,
    currentFloor: null,
  },
  mutations: {
    setCurrentRoom(state, payload) {
      state.currentRoom = payload;
    },
    setCurrentTime(state, payload) {
      state.currentTime = payload;
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
    getCurrentTime(state) {
      return state.currentTime;
    },
    getEndTime(state) {
      return state.endTime;
    },
    getCurrentFloor(state) {
      return state.currentFloor;
    },
  },
};
