import Vue from 'vue';

export default {
  state: {
    id: 0,
    currentRoom: null,
    startTime: null,
    endTime: null,
    currentFloor: null,
    currentTheme: null,
    selectedMembers: {},
    allMembers: [
      {
        name: 'Человек-паук',
        avatar: 'spider-man',
        label: 'Человек-паук',
        floor: 1,
      },
      {
        name: 'Дедпул',
        avatar: 'deadpool',
        label: 'Дедпул',
        floor: 2,
      },
      {
        name: 'Веном',
        avatar: 'venom',
        label: 'Веном',
        floor: 3,
      },
      {
        name: 'Железный человек',
        avatar: 'ironman',
        label: 'Желеный человек',
        floor: 3,
      },
      {
        name: 'Капитан Америка',
        avatar: 'captain-america',
        label: 'Капитан Америка',
        floor: 2,
      },
      {
        name: 'Халк',
        avatar: 'hulk',
        label: 'Халк',
        floor: 1,
      },
      {
        name: 'Бэтмен',
        avatar: 'batman',
        label: 'Бэтмен',
        floor: 2,
      },
    ],
  },
  mutations: {
    setId(state, payload) {
      state.id += payload;
    },
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
    deleteSelectedMember(state, payload) {
      Object.entries(state.selectedMembers).forEach(
        ([key, value]) => {
          if (value.name === payload) {
            Vue.delete(state.selectedMembers, key);
          }
        },
      );
    },
    clearSelectedMembers(state) {
      state.selectedMembers = {};
    },
    setCurrentTheme(state, payload) {
      state.currentTheme = payload;
    },
  },
  actions: {},
  getters: {
    getId(state) {
      return state.id;
    },
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
    getCurrentTheme(state) {
      return state.currentTheme;
    },
  },
};
