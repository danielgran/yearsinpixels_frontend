import {createRouter, createWebHistory, Router} from "vue-router";

import { IVueRouterPlugin } from "@/vue/VueRouter/IVueRouter";
import { IRoute } from "@/vue/VueRouter/IRoute";

import DefaultRoutes from "@/vue/VueRouter/DefaultRoutes";


export class DefaultVueRouter implements IVueRouterPlugin {
  plugin: Router;
  routes: IRoute[];

  constructor() {
    this.routes = DefaultRoutes;

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