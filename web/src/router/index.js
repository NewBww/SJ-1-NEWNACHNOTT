import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/announcements',
      name: 'home',
      component: () => import('@/components/pages/HomePage.vue'),
    },
    {
      path: '/admin/announcements/:id',
      name: 'details',
      component: () => import('@/components/pages/AnnouncementDetail.vue'),
    },
  ],
})

export default router
