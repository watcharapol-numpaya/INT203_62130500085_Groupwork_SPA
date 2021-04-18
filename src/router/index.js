import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import GameList from '../views/GameList.vue'
import GameDetail from '../views/GameDetail.vue'
const routes = [
  {
    path: '/',
    name: 'GameList',
    component: GameList
  },
  {
    path: '/GameDetail/:id',
    name: 'GameDetail',
    component: GameDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
