import { IVueInstance } from "@/vue/IVueInstance";

// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Vue from "vue";

import App from "@/App.vue";
import { IVueStore } from "@/vue/IVueStore";
import { DefaultVuexStore } from "@/vue/vuex/DefaultVuexStore";
import { DefaultVueRouter } from "@/vue/vue-router/DefaultVueRouter";
import { IVueRouter } from "@/vue/IVueRouter";

export class DefaultVueInstance implements IVueInstance {
  Vue: any;
  VueInstance: any;

  constructor() {
    this.Vue = Vue

    let stmgmt: IVueStore = new DefaultVuexStore();
    stmgmt.plugin.install(this.Vue);

    //stmgmt.Init();


    // Initialize Vue-Router

    let router: IVueRouter = new DefaultVueRouter();
    router.plugin.install(this.Vue);

    this.Vue.productionTip = false

    this.VueInstance = new Vue({
      el: '#app',
      router: router.router,
      store: stmgmt.store,
      render: h => h(App)
    })
  }




}