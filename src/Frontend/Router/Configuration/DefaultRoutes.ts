import IRoute from "@/Frontend/Router/IRoute";


import Dashboard from "@/Static/Dashboard/Dashboard.vue";
import Landing from "@/Static/Landing/Landing.vue";
import Login from "@/Static/Login/Login.vue";
import Profile from "@/Static/Profile/Profile.vue";
import Pixels from "@/Static/Pixels/Pixels.vue";
import Logout from "@/Static/Logout/Logout.vue";
import AddDay from "@/Static/BottomSheets/AddDay/AddDay.vue";
import Register from "@/Static/Register/Register.vue";


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
    Component: AddDay,
    Path: "/add",
    Name: "AddDay"
  },
  {
    Component: Login,
    Path: "/login",
    Name: "Login"
  },
  {
    Component: Register,
    Path: "/register",
    Name: "Register"
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
  },
  {
    Component: Logout,
    Path: "/logout",
    Name: "Logout"
  }
]

export default DefaultRoutes