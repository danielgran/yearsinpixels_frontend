import { IRoute } from "@/vue/IRoute";
import Dashboard from "../../static/dashboard/Dashboard.vue";
import Login from "../../static/login/Login.vue";

const StandardRoutes: IRoute[] = [
  {
    comp: Dashboard,
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    comp: Login,
    name: "Login",
    path: "/login"
  }
]

export default StandardRoutes