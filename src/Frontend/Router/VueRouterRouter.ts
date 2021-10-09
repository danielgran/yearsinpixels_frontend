import { createRouter, createWebHistory, Router } from "vue-router";

import IVueRouterPlugin from "@/Frontend/Router/IVueRouterPlugin";
import IRoute from "@/Frontend/Router/IRoute";

export default class VueRouterRouter implements IVueRouterPlugin {
  Plugin: Router;
  Routes: IRoute[];

  constructor(routes: IRoute[]) {
    this.Routes = routes;

    let routerRoutes = this.ConvertToLegacyArray(routes);
    const router = createRouter({
      routes: routerRoutes,
      history: createWebHistory(),
    });

    this.Plugin = router;
  }

  private ConvertToLegacyArray(routes: IRoute[]): Array<any> {
    let returnRoutes = [];

    for (let i = 0; i < routes.length; i++) {
      returnRoutes.push({
        component: routes[i].Component,
        path: routes[i].Path,
        name: routes[i].Name,
      });
    }

    return returnRoutes;
  }
}
