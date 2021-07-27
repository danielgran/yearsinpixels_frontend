import { IVueUsable } from "@/vue/IVueUsable";
import { IRoute } from "@/vue/VueRouter/IRoute";

export interface IVueRouter extends IVueUsable {
  routes: IRoute[]
}
