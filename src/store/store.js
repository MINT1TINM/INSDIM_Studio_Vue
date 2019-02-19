import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: state => {
      return userInfo;
    }
  },
  mutations: {
    updateUserInfo: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions: {
    async login(context, userInfo) {
      context.commit("updateUserInfo", userInfo);
    }
  }
});
