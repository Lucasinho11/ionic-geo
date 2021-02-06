import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    component: Tabs,
    children: [
    {
      path: '',
      component: () => import('@/views/Home.vue')
    }]
    
  },
  {
    path: '/home/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/'
      },
      {
        path: 'city',
        component: () => import('@/views/City.vue')
      },
      {
        path: 'department',
        component: () => import('@/views/Department.vue')
      },
      {
        path: 'region',
        component: () => import('@/views/Region.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
