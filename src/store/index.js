import Vue from 'vue';
import Vuex from 'vuex';
import shared from './shared';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shared,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
