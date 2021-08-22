import { createRouter, createWebHistory, Router } from "vue-router";

import IVueRouterPlugin from "@/Frontend/Router/IVueRouterPlugin";
import IRoute from "@/Frontend/Router/IRoute";

export default class VueRouterRouter implements IVueRouterPlugin {
  Plugin: Router;
  Routes: IRoute[];

  constructor(routes: IRoute[]) {
    this.Routes = routes;

    // Convert the interface array back to a normal array
    let realRoutes = [];
    for (let i = 0; i < this.Routes.length; i++) {
      realRoutes.push({
        component: this.Routes[i].Component,
        path: this.Routes[i].Path,
        name: this.Routes[i].Name,
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