import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import Layout from "../layout/Index.vue"
import HelloWorld from "../components/HelloWorld.vue"
import NotFound from "../components/404.vue"
import About from "@/views/About.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // redirect: "/home",
    // component:  () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/hello",
        name: "HelloWorld",
        component: About,
      },
      {
        path: "/table",
        name: "Table",
        component: () => import("../views/Table.vue"),
      },
      {
        path: "*",
        name: "404",
        component: NotFound,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   // component: Home
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
