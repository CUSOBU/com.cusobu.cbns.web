import { lazy } from "react";
import { Navigate } from "react-router-dom";


// project import
import { Loadable } from "../components";
import { AuthLayout } from "../layouts";

// render - login
const AuthLogin = Loadable(lazy(() => import("../modules/SignIn")));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="login" />,
    },
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    }
  ]
};

export default AuthRoutes;
