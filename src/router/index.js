import { createRouter, createWebHistory } from 'vue-router'
// Importez le composant Home depuis le bon chemin
import RealHome from '../pages/RealHome.vue'
import Home from '../pages/Home.vue'
import Random from '../pages/Random.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RealHome',
      // Utilisez directement le composant Home ici
      component: RealHome,
    },
    {
      path: '/Home',
      name: 'Home',
      // Utilisez directement le composant Home ici
      component: Home,
    },
    {
      path: '/Random',
      name: 'Random',
      // Utilisez directement le composant Home ici
      component: Random,
    },
  ]
})

export default router