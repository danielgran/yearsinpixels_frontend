import { createRouter, createWebHistory, Router} from "vue-router";


import IVueRouterPlugin from "@/vue/Router/IVueRouterPlugin";
import IRoute from "@/vue/Router/IRoute";


export class VueRouterRouter implements IVueRouterPlugin {
  plugin: Router;
  routes: IRoute[];

  constructor(routes: IRoute[]) {
    this.routes = routes;

    // Convert the interface array back to a normal array
    let realRoutes = [];
    for (let i = 0; i < this.routes.length; i++) {
      realRoutes.push({
        component: this.routes[i].comp,
        path: this.routes[i].path,
        name: this.routes[i].name
      });
    }

    // That is the "implementation of the adapter" which connects to another interface
    const router = createRouter({
      routes: realRoutes,
      history: createWebHistory()
    });

    this.plugin = router;
  }


}