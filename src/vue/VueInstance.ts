// Fontawesome implementation
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global CSS defines
import "@/static/css/style.css";

// Vue itself
import { App, Component, createApp, toHandlers } from "vue";

// Interfaces
import IVueInstance from "@/vue/IVueInstance";
import IVueStorePlugin from "@/vue/Statemanagement/IVueStorePlugin";
import IVueRouterPlugin from "@/vue//Router/IVueRouterPlugin";
import IState from "./Statemanagement/IState";
import IMutations from "./Statemanagement/IMutations";
import IActions from "./Statemanagement/IActions";
import IRoute from "./Router/IRoute";

// Plugins
import VuexStore from "@/vue/Statemanagement/VuexStore";
import VueRouterRouter from "@/vue/Router/VueRouterRouter";

// Statemanagement Configuration
import DefaultState from "@/vue/Statemanagement/Configuration/DefaultState";
import DefaultMutations from "@/vue/Statemanagement/Configuration/DefaultMutations";
import DefaultActions from "@/vue/Statemanagement/Configuration/DefaultActions";

// Router Configuration
import DefaultRoutes from "@/vue/Router/Configuration/DefaultRoutes";


// This is the default Vue instance loaded in the project
export default class VueInstance implements IVueInstance {
  Instance: App | undefined;

  RootComponent: Component;

  constructor(rootComponent: Component) {
    this.RootComponent = rootComponent;
    this.Instance = createApp({});
  }

  StartInstance(): void {
    // Create the Root Vue Instance
    this.Instance = createApp(this.RootComponent);

    // Initialize State management
    let statemangementInstance = this.CreateStatemanagementInstance(
      new DefaultState(),
      new DefaultMutations(),
      new DefaultActions()
    );
    this.RegisterPluginOnVueInstance(statemangementInstance.Plugin);

    // Initialize the Vue Router
    let router = this.CreateRouterInstance(DefaultRoutes);
    this.RegisterPluginOnVueInstance(router.Plugin);

    this.MountVueInstanceOnId("#app");
  }

  StopInstance(): void {
    this.UnmountVueInstance();
    this.DeleteVueInstance();
  }

  public MountVueInstanceOnId(id: String): void {
    this.Instance?.mount(id);
  }

  public UnmountVueInstance(): void {
    this.Instance?.unmount();
  }

  public DeleteVueInstance(): void {
    delete this.Instance;
  }

  private CreateStatemanagementInstance(
    state: IState,
    mutations: IMutations,
    actions: IActions
  ): IVueStorePlugin {
    return new VuexStore(state, mutations, actions);
  }

  private CreateRouterInstance(routes: IRoute[]): IVueRouterPlugin {
    return new VueRouterRouter(routes);
  }

  RegisterPluginOnVueInstance(plugin: any): void {
    this.Instance?.use(plugin);
  }
}
