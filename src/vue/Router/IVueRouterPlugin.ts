import IVueUsable from "@/vue/IVueUsable";
import IRoute from "@/vue/Router/IRoute";

export default interface IVueRouterPlugin extends IVueUsable {
  Routes: IRoute[]
}
