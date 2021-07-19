import { IVue } from "@/vue/IVue";

// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Vue from "vue";

import App from "@/App.vue";
import { IVueStore } from "@/vue/IVueStore";
import { DefaultVuexStore } from "@/vue/vuex/DefaultVuexStore";
import { StandardVueRouter } from "@/vue/vue-router/StandardVueRouter";
import { IVueRouter } from "@/vue/IVueRouter";

export class DefaultVueInstance implements IVue {
  Vue: any;
  VueInstance: any;

  constructor() {
    this.Vue = Vue

    let stmgmt: IVueStore = new DefaultVuexStore();
    stmgmt.plugin.install(this.Vue);

    //stmgmt.Init();


    // Initialize Vue-Router

    let router: IVueRouter = new StandardVueRouter();
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