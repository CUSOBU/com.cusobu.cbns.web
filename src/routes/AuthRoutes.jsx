import { lazy } from "react";

// project import
import { Loadable } from "../components";
import { AuthLayout } from "../layouts";

// render - login
const AuthLogin = Loadable(lazy(() => import("../modules/SignIn")));
const AuthRegister = Loadable(lazy(() => import("../modules/SignUp")));

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
