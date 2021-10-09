import IRoute from "@/Frontend/Router/IRoute";


import Dashboard from "@/Static/Dashboard/Dashboard.vue";
import Landing from "@/Static/Landing/Landing.vue";
import Login from "@/Static/Login/Login.vue";
import Profile from "@/Static/Profile/Profile.vue";
import Pixels from "@/Static/Pixels/Pixels.vue";


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