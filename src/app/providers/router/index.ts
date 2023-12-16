import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/home';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/bonds',
      name: 'bonds',
      component: () => import('@/pages/bonds')
    }
  ]
});
