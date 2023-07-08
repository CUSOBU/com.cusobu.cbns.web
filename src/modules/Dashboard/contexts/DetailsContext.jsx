import { createContext, useEffect, useContext, useMemo, useState } from "react";

import API from "../../services/EntityApiServices";
import utils from "../../utils/env";

const DashboardContext = createContext();

function DashboardContextProvider(props) {
  const [data, setData] = useState({});

  const authAPI = new API(utils.api_url, localStorage.getItem("token") || "");

  const fetchData = async () => {
    try {
      let response = await authAPI.post(
        `/remittances/filter?page=1&pageSize=20`,
        {
          status,
          startDate,
          endDate,
        }
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

  return <DashboardContext.Provider value={{ ...data }} {...props} />;
}

function useDashboardContext(dialog) {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      "useDashboardContext must be used within a DashboardContextProvider"
    );
  }

  const { openDialog, closeDialog, setOpen } = useMemo(() => {
    const openDialog = (payload) => context.openDialog(dialog, payload);
    const closeDialog = () => context.closeDialog();
    const setOpen = (value) =>
      value ? context.openDialog(dialog) : context.closeDialog();
    return { openDialog, closeDialog, setOpen };
  }, [context.openDialog, context.closeDialog]);

  const isOpen = context.isOpen && context.dialog === dialog;
  try {
    return {
      openDialog,
      closeDialog,
      setOpen,
      isOpen,
      payload: isOpen ? context.payload : null,
    };
  } catch (e) {
    console.log(e);
    return {
      openDialog: () => {},
      closeDialog: () => {},
    };
  }
}

export { DashboardContextProvider, useDashboardContext };
