import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExchangeView from '@/views/ExchangeView.vue'
import ChartView from '@/views/ChartView.vue'
import WalletView from '@/views/WalletView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: ExchangeView
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    }
  ]
})

export default router
