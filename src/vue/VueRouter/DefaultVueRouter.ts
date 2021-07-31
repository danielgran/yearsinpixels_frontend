import {createRouter, createWebHistory} from "vue-router";

import { IVueRouterPlugin } from "@/vue/VueRouter/IVueRouter";
import { IRoute } from "@/vue/VueRouter/IRoute";

import DefaultRoutes from "@/vue/VueRouter/DefaultRoutes";


export class DefaultVueRouter implements IVueRouterPlugin {
  plugin: any;
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

    const router = createRouter({
      routes: realRoutes,
      history: createWebHistory()
    });

    this.plugin = router;
  }


}