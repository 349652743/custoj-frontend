import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/problems',
    name: 'Problems',
    component: () => import('@/views/Problems.vue')
  },
  {
    path: '/contests',
    name: 'Contests',
    component: () => import('@/views/Contests.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
