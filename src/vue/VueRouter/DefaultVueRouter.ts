import {IVueRouter} from "@/vue/VueRouter/IVueRouter";
import {IRoute} from "@/vue/VueRouter/IRoute";

import VueRouter from "vue-router";

import StandardRoutes from "@/vue/VueRouter/DefaultRoutes";


export class DefaultVueRouter implements IVueRouter {
  plugin: any;
  router: VueRouter;
  routes: IRoute[];

  constructor() {
    this.routes = StandardRoutes;

    this.plugin = VueRouter

    let realRoutes = [];
    for (let i = 0; i < StandardRoutes.length; i++) {
      realRoutes.push({
        "component": StandardRoutes[i].comp,
        "name": StandardRoutes[i].name,
        "path": StandardRoutes[i].path
      });
    }

    const router = new VueRouter({
      routes: realRoutes,
      mode: "history"
    });

    this.router = router;
  }


}