import { IVueInstance } from "@/vue/IVueInstance";

// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Vue from "vue";
import App from "src/vue/App.vue"

import { IVueStore } from "@/vue/VueStore/IVueStore";
import { DefaultVuexStore } from "@/vue/VueStore/DefaultVuexStore";
import { DefaultVueRouter } from "@/vue/VueRouter/DefaultVueRouter";
import { IVueRouter } from "@/vue/VueRouter/IVueRouter";

export class DefaultVueInstance implements IVueInstance {
  Vue: any;
  VueInstance: any;

  constructor() {
    this.Vue = Vue

    let stmgmt: IVueStore = new DefaultVuexStore();
    stmgmt.plugin.install(this.Vue);
    stmgmt.Init();


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