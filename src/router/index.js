import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../App.vue')
  },
  {
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/home.vue')
  },
  {
    path:"/class",
    component: () => import(/* webpackChunkName: "about" */ '@/views/event/class.vue')
  },
  {
    path:"/shopping",
    component: () => import(/* webpackChunkName: "about" */ '@/views/cloumn/shoping.vue')
  },
  {
    path:"/my",
    component: () => import(/* webpackChunkName: "about" */ '@/views/my/my.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
