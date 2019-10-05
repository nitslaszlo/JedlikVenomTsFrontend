import Vue from "vue";
import Router from "vue-router";
import CsudijoView from "./views/CsudijoView.vue";
import Home from "./views/Home.vue";
import VuexDemo from "./views/VuexDemo.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      component: Home,
      name: "home",
      path: "/"
    },
    {
      component: VuexDemo,
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
      component: () => import("./views/About.vue"),
      name: "about",
      path: "/about"
    }
  ]
});
