import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    crafts: "",
  },
  mutations: {

    setCrafts: (state,crafts) => {
      state.crafts = crafts;
    },

  },
  getters: {
    getCraftByRoute: (state) => (route) => {
      return state.crafts ? state.crafts.find(craft => craft.route === route) : ""
    }
  },
});
