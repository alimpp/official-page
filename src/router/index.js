import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:"/",
    name: "main layout",
    redirect:"/home",
    component: () => import("@/layout/main.vue"),
    children: [
      {
        path:"/home",
        name: "home page",
        component: () => import("@/pages/homePage.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
