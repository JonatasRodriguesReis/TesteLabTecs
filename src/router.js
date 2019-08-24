import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { 
        guest: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { 
        guest: true
      }
    },
  ]
})
