import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    online: false,
  },
  getters: {},
  mutations: {
    pushProducts(state, data) {
      (state.products = [...data]),
        Vue.prototype.$sendNotification("Products updated!", 2000);
    },
  },
  actions: {},
  modules: {},
});
