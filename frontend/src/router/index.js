import Vue from 'vue'
import VueRouter from 'vue-router'

import FrontPage from '../views/FrontPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: FrontPage
  },
  {
    path: '/Home',
    name: 'Home',
    component: () =>
      import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
