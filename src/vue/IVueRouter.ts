import {IVueUsable} from "@/vue/IVueUsable";
import { IRoute } from "@/vue/IRoute";

export interface IVueRouter extends IVueUsable {
    router: any
    routes: IRoute[]
}
