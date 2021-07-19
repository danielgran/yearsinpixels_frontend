import { IVueRouter } from "@/vue/IVueRouter";
import { IRoute } from "@/vue/IRoute";

import { PluginObject } from "vue";
import VueRouter from "vue-router";

import StandardRoutes from "@/vue/vue-router/routes"


export class StandardVueRouter implements IVueRouter {
  plugin: PluginObject<any> | undefined
  router: VueRouter
  routes: IRoute[]


  constructor(vueinstance: any) {
    this.routes = StandardRoutes

    let realRoutes = []
    for (let i = 0; i < StandardRoutes.length; i++) {
      realRoutes.push({
        "component": StandardRoutes[i].comp,
        "name": StandardRoutes[i].name,
        "path": StandardRoutes[i].path
      })
    }

    const router = new VueRouter({
      routes: realRoutes,
      mode: "history"
    });

    this.router = router
    vueinstance.use(VueRouter)



  }


}