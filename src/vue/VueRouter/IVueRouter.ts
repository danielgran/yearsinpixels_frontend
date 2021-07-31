import { IVueUsable } from "@/vue/IVueUsable";
import { IRoute } from "@/vue/VueRouter/IRoute";

export interface IVueRouterPlugin extends IVueUsable {
  routes: IRoute[]
}
