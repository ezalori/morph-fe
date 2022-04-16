import { createRouter, createWebHistory } from 'vue-router'
import TableList from '@/views/table/List.vue'
import Monitor from '@/views/Monitor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table/list',
      component: TableList,
    },
    {
      path: '/monitor',
      component: Monitor,
    },
    {
      path: '/',
      redirect: '/table/list',
    },
  ],
})

export default router
