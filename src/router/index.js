import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddBook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Add-Book.vue"),
  },
  {
    path: "/edit",
    name: "AppDelete",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Edit-Book.vue"),
  },
  {
    path: "/collections",
    name: "AppCollections",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Collections.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
