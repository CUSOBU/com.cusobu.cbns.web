import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

// project import
import LoginRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { isAuth } = useSelector((state) => state.session);
  console.log(isAuth);
  let routes = isAuth ? MainRoutes : LoginRoutes;

  return useRoutes([routes]);
}
