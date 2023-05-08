import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/announcement',
      name: 'admin-announcement-listing',
      component: () =>
        import('@/components/pages/AdminAnnouncementListingPage.vue'),
    },
    {
      path: '/admin/announcement/:id',
      name: 'admin-announcement-detail',
      component: () =>
        import('@/components/pages/AdminAnnouncementDetailPage.vue'),
    },
    {
      path: '/admin/announcement/add',
      name: 'admin-announcement-add',
      component: () =>
        import('@/components/pages/AdminAnnouncementAddPage.vue'),
    },
    {
      path: '/admin/announcement/:id/edit',
      name: 'admin-announcement-edit',
      component: () =>
        import('@/components/pages/AdminAnnouncementEditPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/components/pages/NotFoundPage.vue'),
    },
  ],
})

export default router
