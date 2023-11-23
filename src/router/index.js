import { createRouter, createWebHistory } from 'vue-router'
// Importez le composant Home depuis le bon chemin
import Random from '../pages/Random.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      // Utilisez directement le composant Home ici
      component: Random,
    },
  ]
})

export default router