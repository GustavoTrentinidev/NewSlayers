import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    name: 'default',
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path: '',
    name: 'blank',
    component: () => import("@/layouts/BlankLayout.vue"),
    children: [
      {
        path: '/login',
        component: Login,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
