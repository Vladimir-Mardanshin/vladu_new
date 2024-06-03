import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'entrance',
    component: () => import('../views/EntrancePage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationPage.vue')
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import('../views/ReservationsPage.vue')
  },
  {
    path: '/vm',
    name: 'vm',
    component: () => import('../views/VMPage.vue')
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('../views/ApplicationsPage.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('../views/InformationPage.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/HelpCenterPage.vue')
  },
  {
    path: '/answer',
    name: 'answer',
    component: () => import('../views/AnswerHelpPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
