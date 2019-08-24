import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Vuex from 'vuex'


const base = axios.create({
  baseURL: 'http://10.0.0.104:3333/',
  withCredentials: 'true',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
})

Vue.prototype.$http = base
Vuex.Store.prototype.$http = base

Vue.config.productionTip = false

/* Vue.component('app-alert', Alert) */


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.user == null) {
        next({
            path: '/',
        })
    } else {
        next();
    }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(store.getters.user == null){
          next()
      }
      else{
          next({ path: '/Home'})
      }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
