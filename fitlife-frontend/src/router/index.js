import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory('/fitlife-gym-website/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AdminDashboard
    }
  ]
})

export default router
