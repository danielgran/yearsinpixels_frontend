// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css"


import { App, createApp } from 'vue';


import { IVueInstance } from "@/vue/IVueInstance";

import { DefaultVuexStore } from "@/vue/VueStore/DefaultVuexStore";
import { DefaultVueRouter } from "@/vue/VueRouter/DefaultVueRouter";

import YearsInPixels from '@/vue/YearsInPixels.vue'
import { IVueStorePlugin } from "../VueStore/IVueStorePlugin";
import IVueRouterPlugin from "../VueRouter/IVueRouterPlugin";

// This is the default Vue instance loaded in the project
export class DefaultVueInstance implements IVueInstance {
  Instance: App | undefined;

  constructor() {
    this.Instance = createApp({});
  }

  StartInstance(): void {
    // The Vue Instance
    this.Instance = createApp(YearsInPixels);
    console.log("Wheetelwhee");

    // Initialize State management
    let stmgmt: IVueStorePlugin = new DefaultVuexStore();
    this.Instance.use(stmgmt.plugin);
    
    // Initialize Vue-Router
    let router: IVueRouterPlugin = new DefaultVueRouter();
    this.Instance.use(router.plugin);

    this.Instance.mount('#app');
  }

  StopInstance(): void {
    this.Instance?.unmount()
    console.log("Deleting Instance")
  }
}