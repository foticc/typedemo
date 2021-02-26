import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import Layout from "../layout/Index.vue"
import HelloWorld from "../components/HelloWorld.vue"
import About from "@/views/About.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // component:  () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Layout,
    children: [
      {
        path: "/about",
        name: "About",
        component: Home,
      },
      {
        path: "hello",
        name: "HelloWorld",
        component: About,
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
