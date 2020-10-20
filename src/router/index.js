import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../App.vue'),
    redirect:"/home"
  },
  {
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/home/home.vue')
  },
  {
    path:"/event",
    component: () => import(/* webpackChunkName: "about" */ '@/views/event/event.vue')
  },
  {
    path:"/cloumn",
    component: () => import(/* webpackChunkName: "about" */ '@/views/cloumn/cloumn.vue')
  },
  {
    path:"/my",
    component: () => import(/* webpackChunkName: "about" */ '@/views/my/my.vue')
  },
  {
    path:"/chat",
    component: () => import(/* webpackChunkName: "about" */ '@/views/cloumn/chat.vue')
  },
  {
    path:"/article",
    component: () => import(/* webpackChunkName: "about" */ '@/views/event/article.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
