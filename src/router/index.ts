import Vue from "vue";
import Router, { RouteConfig } from "vue-router";

/**Layout */
import Layout from "@/layout/index.vue";

/* Router modules */
// import routes from "./module/index";

/**
 * constantRoutes
 * a common page for all roles
 */
export const constantRoutes: RouteConfig[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: '首页'
        }
      }
    ]
  }
];

/**
 * asyncRoutes
 * the routes that needs to be dynamically loaded based on user's roles
 */
export const asyncRoutes: RouteConfig[] = [
  {
    path: "/setting",
    component: Layout,
    redirect: '/guide/index',
    meta: {
      title: '设置',
    },
    children: [
      {
        path: "index",
        name: 'Setting',
        component: () => import("@/views/setting/index.vue"),
        meta: {
          title: '多页面',
        }
      },
      {
        path: "index",
        name: 'Setting1',
        component: () => import("@/views/setting/index.vue"),
        meta: {
          title: '多页面1',
        }
      }
    ]
  }
];

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: constantRoutes
});

export default router;
