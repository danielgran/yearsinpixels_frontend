// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css"

import { App, createApp } from 'vue';

import YearsInPixels from '@/vue/YearsInPixels.vue'


import { IVueInstance } from "@/vue/IVueInstance";

import IVueRouterPlugin from "../VueRouter/IVueRouterPlugin";
import { DefaultVueRouter } from "@/vue/VueRouter/DefaultVueRouter";
import IVueStorePlugin from "../Vuex/IVueStorePlugin";
import DefaultState from "../Vuex/Configuration/DefaultState";
import DefaultMutations from "../Vuex/Configuration/DefaultMutations";
import DefaultActions from "../Vuex/Configuration/DefaultActions";
import { VuexStore } from "../Vuex/VuexStore";



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
    let stmgmt: IVueStorePlugin = new VuexStore(new DefaultState(), new DefaultMutations(), new DefaultActions());
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