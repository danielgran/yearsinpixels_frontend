import { IRoute } from "@/vue/IRoute";
import Dashboard from "@/static/dashboard/Dashboard.vue";
import Login from "@/static/login/Login.vue";
import Landing from "@/static/landing/Landing.vue";

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