export default {
  state: {
    currentRoom: null,
    startTime: null,
    endTime: null,
    currentFloor: null,
    selectedMembers: [],
    allMembers: [
      {
        name: 'Человек-паук',
        avatar: 'spider-man',
        label: 'Человек-паук',
      },
      {
        name: 'Дедпул',
        avatar: 'deadpool',
        label: 'Дедпул',
      },
      {
        name: 'Веном',
        avatar: 'venom',
        label: 'Веном',
      },
      {
        name: 'Железный человек',
        avatar: 'ironman',
        label: 'Желеный человек',
      },
      {
        name: 'Капитан Америка',
        avatar: 'captain-america',
        label: 'Капитан Америка',
      },
      {
        name: 'Халк',
        avatar: 'hulk',
        label: 'Халк',
      },
      {
        name: 'Бэтмен',
        avatar: 'batman',
        label: 'Бэтмен',
      },
    ],
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
    setSelectedMembers(state, payload) {
      state.selectedMembers = Object.assign({}, state.selectedMembers, payload);
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
    getAllMembers(state) {
      return state.allMembers;
    },
    getSelectedMembers(state) {
      return state.selectedMembers;
    },
  },
};
