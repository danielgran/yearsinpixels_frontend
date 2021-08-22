import IVueUsable from "@/Frontend/IVueUsable";
import IRoute from "@/Frontend/Router/IRoute";

export default interface IVueRouterPlugin extends IVueUsable {
  Routes: IRoute[]
}
