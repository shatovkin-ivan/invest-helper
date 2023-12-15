import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/pages/home';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bonds',
      name: 'bonds',
      component: () => import('@/pages/bonds')
    }
  ]
});
