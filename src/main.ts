import Vue from 'vue';

// Components
import App from "@/App.vue"

// UI and stuff
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {VuexStore} from "@/vue/vuex/VuexStore";
import { IVueRouter } from "@/vue/IVueRouter";
import { IVueStore } from "@/vue/IVueStore";
import { StandardVueRouter } from "@/vue/vue-router/StandardVueRouter";

// Init state management
const stmgmt: IVueStore = new VuexStore(Vue)
const router: IVueRouter = new StandardVueRouter(Vue)

// Initialize Vue-Router


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router.router,
  store: stmgmt.store,
  render: h => h(App)
})
