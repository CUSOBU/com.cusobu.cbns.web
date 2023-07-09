import { createContext, useEffect, useContext, useState } from "react";

import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";

const DashboardContext = createContext();

function DashboardContextProvider(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authAPI = new API(utils.api_url, localStorage.getItem("token") || "");
    authAPI
      .get("/statistics")
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [localStorage.getItem("token")]);

  return <DashboardContext.Provider value={{ ...data, error, loading }} {...props}/>;
}

function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardContext must be used within a DashboardContextProvider"
    );
  }

  try {
    return context;
  } catch (e) {
    console.log(e);
    return {
      isLoading: false,
      isError: !!context.error,
    };
  }
}

export { DashboardContextProvider, useDashboardContext };
