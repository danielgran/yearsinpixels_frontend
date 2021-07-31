// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css"


import { createApp } from 'vue';


import { IVueInstance } from "@/vue/IVueInstance";

import { DefaultVuexStore } from "@/vue/VueStore/DefaultVuexStore";
import { DefaultVueRouter } from "@/vue/VueRouter/DefaultVueRouter";

import App from '@/vue/App.vue'
import { IVueStorePlugin } from "../VueStore/IVueStorePlugin";
import { IVueRouterPlugin } from "../VueRouter/IVueRouter";

// This is the default Vue instance loaded in the project
export class DefaultVueInstance implements IVueInstance {
  Instance: any;

  constructor() {
    // The Vue Instance
    this.Instance = createApp(App);
    
    // Initialize State management
    let stmgmt: IVueStorePlugin = new DefaultVuexStore();
    this.Instance.use(stmgmt.plugin);
    
    // Initialize Vue-Router
    let router: IVueRouterPlugin = new DefaultVueRouter();
    this.Instance.use(router.plugin);
    
    
    this.Instance.mount('#app');
  }


}