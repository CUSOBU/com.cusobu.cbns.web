import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import CancelIcon from "@mui/icons-material/Cancel";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/details";
import {
  DIALOG_NAMESPACE_CANCEL,
  DIALOG_NAMESPACE_CONFIRM,
} from "../constants/columns";
import { useMemo } from "react";

import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";

// Definir el componente ActionCell
const ActionCell = ({ row, setFetchDataFlag}) => {
  const { openDialog: openDetails } = useDetailsContext(DIALOG_NAMESPACE);
  const { openDialog: openConfirm } = useDetailsContext(DIALOG_NAMESPACE_CONFIRM);
  const { openDialog: openCancel } = useDetailsContext(DIALOG_NAMESPACE_CANCEL);
  
  const authAPI = new API(
    utils.api_url,
    localStorage.getItem("token") || ""
  );

  const hasPermission = useMemo(() => {
    const role = sessionStorage.getItem("roles").toString();
    return role === "admin" || role === "provider";
  }, [sessionStorage.getItem("roles")]);

  const handleOpenDetails = () => {
    openDetails(row);
  };

  const handleGetRemittance = () => {
    //Submit to get remittance
    console.log(`Se elimina el elemento ${row.identifier}`);
    authAPI.patch(`/remittances/setstatus/${row?.identifier}`, {
      status: "Delivery",
      statusCode: 1,
      provider: sessionStorage.user,
    });
    setFetchDataFlag();
  }

  const handleReleaseRemittance = () => {
    //Submit to get remittance
    console.log(`Se elimina el elemento ${row.identifier}`);
    authAPI.patch(`/remittances/setstatus/${row?.identifier}`, {
      status: "Pending",
      statusCode: 0,
      provider: sessionStorage.user,
    });
    console.log(row);
    
    setFetchDataFlag();
  }


  const handleOpenConfirm = () => {
    openConfirm(row);
  };
  const handleOpenCancel = () => {
    openCancel(row);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Details">
        <IconButton
          aria-label="Details"
          size="large"
          onClick={handleOpenDetails}
          sx={{ margin: 0, padding: 0 }}
        >
          <InfoIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      {(row.status === "Pending") &&
        !!hasPermission && (
          <>
            <Tooltip title="Get">
              <IconButton
                color="secondary"
                aria-label="Get"
                size="large"
                sx={{ margin: 0, padding: 0 }}
                onClick={handleGetRemittance}
              >
                <PlaylistAddCheckCircleIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </>
        )}
      {(row.status === "Delivery") &&
        !!hasPermission && (
          <>
            <Tooltip title="Release">
              <IconButton
                color="info"
                aria-label="Release"
                size="large"
                onClick={handleReleaseRemittance}
                sx={{ margin: 0, padding: 0 }}
              >
                <ExitToAppIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton
                color="error"
                aria-label="Cancel"
                size="large"
                onClick={handleOpenCancel}
                sx={{ margin: 0, padding: 0 }}
              >
                <CancelIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Confirm">
              <IconButton
                color="secondary"
                aria-label="Confirm"
                size="large"
                sx={{ margin: 0, padding: 0 }}
                onClick={handleOpenConfirm}
              >
                <CheckCircleIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </>
        )}
    </Stack>
  );
};

ActionCell.propTypes = {
  row: PropTypes.object.isRequired,
  setFetchDataFlag: PropTypes.func,
};

export default ActionCell;

export const renderRemittenceActions = (row, setFetchDataFlag) => {
  return <ActionCell row={row} setFetchDataFlag={setFetchDataFlag} />;
};
