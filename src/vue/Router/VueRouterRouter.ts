import { createRouter, createWebHistory, Router } from "vue-router";

import IVueRouterPlugin from "@/vue/Router/IVueRouterPlugin";
import IRoute from "@/vue/Router/IRoute";

export default class VueRouterRouter implements IVueRouterPlugin {
  Plugin: Router;
  Routes: IRoute[];

  constructor(routes: IRoute[]) {
    this.Routes = routes;

    // Convert the interface array back to a normal array
    let realRoutes = [];
    for (let i = 0; i < this.Routes.length; i++) {
      realRoutes.push({
        Component: this.Routes[i].Component,
        Path: this.Routes[i].Path,
        Name: this.Routes[i].Name,
      });
    }

    // That is the "implementation of the adapter" which connects to another interface
    const router = createRouter({
      routes: realRoutes,
      history: createWebHistory(),
    });

    this.Plugin = router;
  }
}
