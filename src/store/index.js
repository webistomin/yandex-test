import Vue from 'vue';
import Vuex from 'vuex';
import shared from './shared';
import newEvent from './newEvent';
import eventPopup from './eventPopup';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shared,
    newEvent,
    eventPopup,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
