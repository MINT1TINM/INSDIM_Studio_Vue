import Vue from "vue";
import "./plugins/vuetify";
import App from "./App";
import router from "./router";
import store from "./store/store";
import axios from "axios";
import dimUpload from "./plugins/upload";
import vueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import vuetify from './plugins/vuetify';

Vue.use(dimUpload);
Vue.use(vueQuillEditor);
Vue.config.productionTip = false;

axios.interceptors.request.use(config => {
  //设置拦截器
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  try {
    config.headers["Authorization"] =
      "DIMLAB " + store.getters["user/userInfo"].token;
  } catch (err) {
    err;
  }

  return config;
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
