import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Cookies from "js-cookie";

import user from "./modules/user";
import work from "./modules/work";

Vue.use(Vuex);

const vuexCookie = new VuexPersistence({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) =>
    Cookies.set(key, state, {
      expires: 3
    }),
  reducer: state => ({ user: state.user }),
  filter: mutation => mutation.type == "user/updateUserInfo"
});

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: state => ({
    user: state.user,
    work: state.work
  }),
  filter: mutation =>
    mutation.type == "user/updateUserInfo" ||
    mutation.type == "user/updateUserList" ||
    mutation.type == "work/getWorkList"
});

export default new Vuex.Store({
  modules: {
    user,
    work
  },
  plugins: [vuexCookie.plugin, vuexSession.plugin]
});
