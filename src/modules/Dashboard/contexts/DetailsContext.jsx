import { createContext, useEffect, useContext, useState } from "react";

import API from "../../services/EntityApiServices";
import utils from "../../utils/env";

const DashboardContext = createContext();

function DashboardContextProvider(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const authAPI = new API(utils.api_url, localStorage.getItem("token") || "");

  const fetchData = async () => {
    try {
      let response = await authAPI.get(
        `/remittances/filter?page=1&pageSize=20`,
      );

      setData(response.remittances);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <DashboardContext.Provider value={{ ...data, loading }} {...props} />;
}

function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardContext must be used within a DashboardContextProvider"
    );
  }

  try {
    return {
      ...context
    };
  } catch (e) {
    console.log(e);
    return {
      isLoading: false,
      isError: true,
    };
  }
}

export { DashboardContextProvider, useDashboardContext };
