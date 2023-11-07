import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ConnectionView from '../views/ConnectionView.vue'
import ProfilView from '../views/ProfilView.vue'
import CityView from '../views/CityView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/connection',
    name: 'connection',
    component: ConnectionView
  },
  {
    path: '/profil',
    name: '/profil',
    component: ProfilView

  },
  {
    path: '/cities',
    name: '/city',
    component: CityView
  },
  {
    path: '/users',
    name: '/user',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
