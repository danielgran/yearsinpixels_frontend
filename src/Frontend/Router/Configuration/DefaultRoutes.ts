import IRoute from "@/Frontend/Router/IRoute";


import Dashboard from "@/static/Dashboard/Dashboard.vue";
import Landing from "@/static/Landing/Landing.vue";
import Login from "@/static/Login/Login.vue";
import Profile from "@/static/Profile/Profile.vue";
import Pixels from "@/static/Pixels/Pixels.vue";


const DefaultRoutes: IRoute[] = [
  {
    Component: Landing,
    Path: "/",
    Name: "Landing"
  },
  {
    Component: Dashboard,
    Path: "/dashboard",
    Name: "Dashboard"
  },
  {
    Component: Login,
    Path: "/login",
    Name: "Login"
  },
  {
    Component: Profile,
    Path: "/profile",
    Name: "Profile"
  },
  {
    Component: Pixels,
    Path: "/pixels",
    Name: "Pixels"
  }
]

export default DefaultRoutes