import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CsudijoView from "./views/CsudijoView.vue";
import HomeView from "./views/HomeView.vue";
import VuexDemoView from "./views/VuexDemoView.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    component: HomeView,
    name: "home",
    path: "/"
  },
  {
    component: VuexDemoView,
    name: "vuexDemo",
    path: "/vuexdemo"
  },
  {
    component: CsudijoView,
    name: "csudijo",
    path: "/csudijo"
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/AboutView.vue"),
    name: "about",
    path: "/about"
  }
];

const router: VueRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
