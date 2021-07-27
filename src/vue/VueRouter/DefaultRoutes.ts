import { IRoute } from "@/vue/VueRouter/IRoute";


import Dashboard from "@/static/Dashboard/Dashboard.vue";
import Login from "@/static/login/Login.vue";
import Landing from "@/static/landing/Landing.vue";


const DefaultRoutes: IRoute[] = [
  {
    comp: Landing,
    path: "/",
    name: "Landing"
  },
  {
    comp: Dashboard,
    path: "/dashboard",
    name: "Dashboard"
  },
  {
    comp: Login,
    path: "/login",
    name: "Login"
  }
]

export default DefaultRoutes