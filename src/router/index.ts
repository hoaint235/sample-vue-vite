import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, SignIn } from "@pages";
import { userService } from "@services";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,

    meta: {
      auth: true,
    },
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = userService.isAuthenticated();

  if (!isAuthenticated) {
    if (to.fullPath === "/sign-in") {
      return next();
    }
    return next("/sign-in");
  }

  return next();
});

export default router;
