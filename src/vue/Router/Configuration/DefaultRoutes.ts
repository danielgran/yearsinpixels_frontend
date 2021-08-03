import IRoute from "@/vue/Router/IRoute";


import Dashboard from "@/static/Dashboard/Dashboard.vue";
import Landing from "@/static/Landing/Landing.vue";
import Login from "@/static/Login/Login.vue";
import Register from "@/static/Register/Register.vue";
import Profile from "@/static/Profile/Profile.vue";
import Pixels from "@/static/Pixels/Pixels.vue";


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
  },
  {
    comp: Register,
    path: "/register",
    name: "Register"
  },
  {
    comp: Profile,
    path: "/profile",
    name: "Profile"
  },
  {
    comp: Pixels,
    path: "/pixels",
    name: "Pixels"
  }
]

export default DefaultRoutes