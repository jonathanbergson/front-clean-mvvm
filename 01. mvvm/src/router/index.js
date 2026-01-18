import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/todo/TodoList.page.vue'),
    },
    {
      path: '/new-protocol/introduction',
      name: 'New Protocol - Introduction',
      component: () => import('@/modules/protocol/pages/NewProtocolPage.vue'),
    },
    {
      path: '/new-protocol/applicant',
      name: 'New Protocol - Applicant',
      component: () => import('@/modules/protocol/pages/NewProtocolApplicantPage.vue'),
    },
    {
      path: '/new-protocol/finished',
      name: 'New Protocol - Finished',
      component: () => import('@/modules/protocol/pages/NewProtocolFinishedPage.vue'),
    },
    {
      path: '/send-email',
      name: 'Send Email',
      component: () => import('@/modules/email/SendEmail.page.vue'),
    },
  ],
})

export default router
