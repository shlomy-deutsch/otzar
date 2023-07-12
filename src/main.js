import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import NotificationPlugin from "./plugins/notify.js";

// import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
Vue.config.productionTip = false;
Vue.use(NotificationPlugin);

Vue.use(VueMaterial);
new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
