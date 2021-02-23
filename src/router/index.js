import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [ 

  {
    path: '/Inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/Servicio',
    name: 'Servicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicio.vue')
  },
  {
    path: '/Galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galeria.vue')
  },
  {
    path: '/Contactanos',
    name: 'Contactanos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contactanos.vue')
  },
  {
    path: '/Visitanos',
    name: 'Visitanos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Visitanos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
