import Frontend from "@/Application/Frontend";

// Concrete Styling Dependencies
import "@/static/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Interfaces
import IState from "./Statemanagement/IState";
import IMutations from "./Statemanagement/IMutations";
import IActions from "./Statemanagement/IActions";
import IRoute from "./Router/IRoute";

// The Root Component
import YearsInPixels from "@/Frontend/YearsInPixels.vue";

// Vue itself
import { App, Component, createApp } from "vue";

// Plugins
import IVueStorePlugin from "@/Frontend/Statemanagement/IVueStorePlugin";
import VuexStore from "@/Frontend/Statemanagement/VuexStore";

import IVueRouterPlugin from "@/Frontend/Router/IVueRouterPlugin";
import VueRouterRouter from "@/Frontend/Router/VueRouterRouter";

// Statemamangement Concretion
import DefaultState from "@/Frontend/Statemanagement/Configuration/DefaultState";
import DefaultMutations from "@/Frontend/Statemanagement/Configuration/DefaultMutations";
import DefaultActions from "@/Frontend/Statemanagement/Configuration/DefaultActions";

// Router Concretion
import DefaultRoutes from "@/Frontend/Router/Configuration/DefaultRoutes";

export default class YearsInPixelsFrontend implements Frontend {
  Instance: App | undefined;
  RootComponent: Component;

  constructor() {
    this.RootComponent = YearsInPixels;
  }

  StartFrontend(): void {
    // Set the Root Vue Instance with the Root Component
    this.Instance = createApp(this.RootComponent);

    let statemangementInstance = this.CreateStatemanagementInstance(
      new DefaultState(),
      new DefaultMutations(),
      new DefaultActions()
    );
    this.RegisterPluginOnVueInstance(statemangementInstance.Plugin);

    let router = this.CreateRouterInstance(DefaultRoutes);
    this.RegisterPluginOnVueInstance(router.Plugin);

    this.MountVueInstanceOnId("#app");
  }

  StopFrontend(): void {
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
