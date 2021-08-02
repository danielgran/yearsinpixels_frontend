// UI and stuff
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css"


//Vue itself
import { App, createApp } from 'vue';


// Interfaces
import IVueInstance from "@/vue/IVueInstance";
import IVueStorePlugin from "@/vue/Statemanagement/IVueStorePlugin";
import IVueRouterPlugin from "@/vue//Router/IVueRouterPlugin";

// Plugins
import VuexStore from "@/vue/Statemanagement/VuexStore";
import VueRouterRouter from "@/vue/Router/VueRouterRouter";

// Statemanagement Configuration
import DefaultState from "@/vue/Statemanagement/Configuration/DefaultState";
import DefaultMutations from "@/vue/Statemanagement/Configuration/DefaultMutations";
import DefaultActions from "@/vue/Statemanagement/Configuration/DefaultActions";

// Router Configuration
import DefaultRoutes from "@/vue/Router/Configuration/DefaultRoutes";

// The Root Vue Component
import YearsInPixels from '@/vue/YearsInPixels.vue'

// This is the default Vue instance loaded in the project
export default class DefaultVueInstance implements IVueInstance {
  Instance: App | undefined;

  constructor() {
    this.Instance = createApp({});
  }

  StartInstance(): void {
    // Create the Root Vue Instance
    this.Instance = createApp(YearsInPixels);

    // Initialize State management
    let stmgmt: IVueStorePlugin = new VuexStore(new DefaultState(), new DefaultMutations(), new DefaultActions());
    this.Instance.use(stmgmt.plugin);
    
    // Initialize Vue-Router
    let router: IVueRouterPlugin = new VueRouterRouter(DefaultRoutes);
    this.Instance.use(router.plugin);

    // Finally mount the app
    this.Instance.mount('#app');
  }

  StopInstance(): void {
    this.Instance?.unmount()
  }

}