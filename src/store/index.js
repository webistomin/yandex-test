import Vue from 'vue';
import Vuex from 'vuex';
import shared from './shared';
import newEvent from './newEvent';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shared,
    newEvent,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
