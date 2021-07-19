import {IVueRouter} from "@/vue/IVueRouter";

import VueRouter from "vue-router";
import {PluginObject} from "vue";


export class VueRouterImpl implements IVueRouter {

    router: VueRouter
    plugin: PluginObject<any>

    constructor(vueinstance: any) {
        this.plugin = VueRouter
        vueinstance.use(this.plugin)

    }


}