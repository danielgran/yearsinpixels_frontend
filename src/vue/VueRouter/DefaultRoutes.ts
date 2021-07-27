import { IRoute } from "@/vue/VueRouter/IRoute";
import Dashboard from "@/static/Dashboard/Dashboard";
import Login from "@/static/login/Login";
import Landing from "@/static/landing/Landing";

const DefaultRoutes: IRoute[] = [
  {
    comp: Landing,
    path: "/"
  },
  {
    comp: Dashboard,
    path: "/dashboard"
  },
  {
    comp: Login,
    path: "/login"
  }
]

export default DefaultRoutes