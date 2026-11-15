
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import PlaceholderView from "../views/PlaceholderView.vue";
import ServicesView from "../views/ServicesView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/uslugi",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/o-nas",
    name: "about",
    component: AboutView,
  },
  {
    path: "/realizacje",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/kontakt",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { top: 0 };
  },
});

export default router;
