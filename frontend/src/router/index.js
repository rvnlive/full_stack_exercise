import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Books',
    name: 'Books',
    component: () =>
      import('../views/Books.vue')
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: () =>
      import('../views/Movies.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'full_stack_exercise_frontend/dist/',
  routes
})

export default router
