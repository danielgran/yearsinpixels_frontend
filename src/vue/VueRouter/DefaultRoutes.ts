import { IRoute } from "@/vue/VueRouter/IRoute";
import Dashboard from "@/static/Dashboard/Dashboard";
import Login from "@/static/login/Login";
import Landing from "@/static/landing/Landing";

const StandardRoutes: IRoute[] = [
  {
    comp: Landing,
    name: "Landing",
    path: "/"
  },
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