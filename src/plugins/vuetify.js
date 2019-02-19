import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "vuetify/src/stylus/app.styl";
import "../assets/style.css";
import zhHans from "vuetify/es5/locale/zh-Hans";
import "./confirm-dialog/index";
import "./snackbar/index";
import "./loading/index";
import "./upload/index";

Vue.use(Vuetify, {
  theme: {
    primary: colors.grey.darken4,
    secondary: "#424242",
    accent: colors.indigo.lighten2,
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true,
  iconfont: "md",
  lang: {
    locales: { zhHans },
    current: "zh-Hans"
  }
});
