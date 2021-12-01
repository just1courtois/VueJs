import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/windows',
    name: 'Windows',
    component: () => import(/* webpackChunkName: "windows" */ '../views/Windows.vue')
  },
  {
    path: '/heaters',
    name: 'Heaters',
    component: () => import(/* webpackChunkName: "heaters" */ '../views/Heaters.vue')
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import(/* webpackChunkName: "heaters" */ '../views/Rooms.vue')
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
