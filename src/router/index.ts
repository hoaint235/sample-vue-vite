import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, SignIn } from '@pages';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
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
  if(to.path === "/"){
    return next('/sign-in');
  }

  return next();
})

export default router;