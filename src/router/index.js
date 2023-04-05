import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/basic",
    },
    {
      path: "/basic",
      component: import("../views/basic/basic.vue"),
    },
    {
      path: "/high",
      component: import("../views/high/high.vue"),
    },
  ],
});

export default router;
