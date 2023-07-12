import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    pushProducts(state, data) {
      (state.products = [...data]),
        //show user msg
        Vue.prototype.$sendNotification("Products updated!", 2000);
    },
  },
  actions: {},
  modules: {},
});
