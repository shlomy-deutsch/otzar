import store from "../store/index";

export default {
  bind(el, binding) {
    if (store.state.online == false) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  },
  // update(el, binding) {
  //   if (navigator.onLine) {
  //     el.style.display = '';
  //   } else {
  //     el.style.display = 'none';
  //   }
  // },
};
