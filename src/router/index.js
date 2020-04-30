import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Character'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    metaTags: [
      {
        property: 'og:description',
        content: 'Vue Rick and Morty'
      },
      {
        title: 'About Page - Example App',
      }
    ]
  },
  {
    path: '/personajes/:id',
    name: 'Character',
    component: Character
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
