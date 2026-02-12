import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "@/store/auth"

import Login from "@/views/auth/Login.vue"
import AdminDashboard from "@/views/admin/AdminDashboard.vue"
import MemberDashboard from "@/views/member/MemberDashboard.vue"

const routes = [
  { path: "/", component: Login },
  { path: "/admin", component: AdminDashboard, meta: { role: "admin" }},
  { path: "/member", component: MemberDashboard, meta: { role: "member" }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.role && auth.role !== to.meta.role) {
    return next("/")
  }
  next()
})

export default router
