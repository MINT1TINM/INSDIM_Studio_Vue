import Vue from "vue";
import "./plugins/vuetify";
import App from "./App";
import router from "./router";
import store from "./store/store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.interceptors.request.use(config => {
  //设置拦截器
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  try {
    config.headers["Authorization"] =
      "DIMLAB " + store.getters["user/userInfo"].token;
  } catch (err) {
    err;
  }

  // if (config.method === "post" || config.method === "put") {
  //   config.data = qs.stringify(config.data);
  // }
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
