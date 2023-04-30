import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'admin-announcement-listing' }

    },
    {
      path: '/admin/announcement',
      name: 'admin-announcement-listing',
      component: () => import('@/components/pages/AdminAnnouncementListingPage.vue'),
    },
    {
      path: '/admin/announcement/:id',
      name: 'admin-announcement-detail',
      component: () => import('@/components/pages/AdminAnnouncementDetailPage.vue'),
    },
  ],
})

export default router
