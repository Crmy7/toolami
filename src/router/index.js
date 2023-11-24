import { createRouter, createWebHashHistory } from 'vue-router'
import RealHome from '../pages/RealHome.vue'
import Home from '../pages/Home.vue'
import Random from '../pages/Random.vue'

const routes = [
  {
    path: '/',
    name: 'RealHome',
    component: RealHome,
    meta: { title: 'ToolAmI' }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { title: 'ToolAmI' }
  },
  {
    path: '/Random',
    name: 'Random',
    component: Random,
    meta: { title: 'ToolAmI' }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
