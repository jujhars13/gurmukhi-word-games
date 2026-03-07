import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue'),
    },
    {
      path: '/games/animal-match',
      name: 'animal-match',
      component: () => import('../views/AnimalMatchGameView.vue'),
    },
    {
      path: '/games/random-line',
      name: 'random-line',
      component: () => import('../views/RandomLineGameView.vue'),
    },
    {
      path: '/games/spinner-wheel',
      name: 'spinner-wheel',
      component: () => import('../views/SpinnerWheelGameView.vue'),
    },
    {
      path: '/games/letter-by-letter',
      name: 'letter-by-letter',
      component: () => import('../views/LetterByLetterGameView.vue'),
    },
  ],
})

export default router
