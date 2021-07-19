// eslint-disable-line no-unused-vars


import 'es6-promise/auto'

import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import App from "./App.vue"
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import Landing from "./components/Landing.vue";


// UI and stuff
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {IVueStore} from "@/vue/IVueStore";
import {VuexStore} from "@/vue/vuex/VuexStore";



// Init state management
let stmgmt: IVueStore;
stmgmt = new VuexStore(Vue)


Vue.use(VueRouter)

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
  store: stmgmt.store,
  render: h => h(App)
})
