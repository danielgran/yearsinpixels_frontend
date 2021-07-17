import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

// Components
import App from './App.vue'
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Landing from "@/components/Landing";


// UI and stuff
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


// Connect the "addons"
Vue.use(Vuex)
Vue.use(VueRouter)


// Initialize Vuex Store
const store = new Vuex.Store({
  state: {
    mainViewHeight: 0,
    name: "Daniel Gran"
  },
  getters: {
    getName() {
      return "Daniel Gran"
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setMainViewHeight (state, value) {
      state.mainViewHeight = value
    }
  }
})

// Initialize Vue-Router
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      component: Login,
      name: 'Login',
      path: '/login'
    },
    {
      component: Dashboard,
      name: 'Dashboard',
      path: '/dashboard' +
          '' +
          ''
    }
  ],
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
