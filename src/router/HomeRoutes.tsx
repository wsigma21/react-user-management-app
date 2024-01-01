import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    name: "home",
    index: true,
    children: <Home />
  },
  {
    name: "user_management",
    path: "user_management",
    index: false,
    children: <UserManagement />
  },
  {
    name: "setting",
    path: "setting",
    index: false,
    children: <Setting />
  },
]