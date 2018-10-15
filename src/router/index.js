import Vue from "vue";
import Router from "vue-router";
import Menu from "@/components/Menu";
import About from "@/components/About";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Menu",
      component: Menu
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
