// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css"

import { App, createApp } from 'vue';

import YearsInPixels from '@/vue/YearsInPixels.vue'


import { IVueInstance } from "@/vue/IVueInstance";

import IVueRouterPlugin from "../Router/IVueRouterPlugin";
import IVueStorePlugin from "../Statemanagement/IVueStorePlugin";
import DefaultState from "../Statemanagement/Configuration/DefaultState";
import DefaultMutations from "../Statemanagement/Configuration/DefaultMutations";
import DefaultActions from "../Statemanagement/Configuration/DefaultActions";
import { VuexStore } from "../Statemanagement/VuexStore";
import { VueRouterRouter } from "../Router/VueRouterRouter";
import DefaultRoutes from "../Router/Configuration/DefaultRoutes";



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
    let router: IVueRouterPlugin = new VueRouterRouter(DefaultRoutes);
    this.Instance.use(router.plugin);

    this.Instance.mount('#app');
  }

  StopInstance(): void {
    this.Instance?.unmount()
    console.log("Deleting Instance")
  }
}