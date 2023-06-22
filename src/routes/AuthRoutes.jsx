import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { AuthLayout } from "../layouts";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/SignIn")));
const AuthRegister = Loadable(lazy(() => import("../pages/SignUp")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthRoutes;
