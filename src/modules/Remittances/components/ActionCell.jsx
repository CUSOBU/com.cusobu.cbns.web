import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/details";
import {
  DIALOG_NAMESPACE_CANCEL,
  DIALOG_NAMESPACE_CONFIRM,
} from "../constants/columns";
import { useMemo } from "react";

// Definir el componente ActionCell
const ActionCell = ({ row }) => {
  const { openDialog: openDetails } = useDetailsContext(DIALOG_NAMESPACE);
  const { openDialog: openConfirm } = useDetailsContext(
    DIALOG_NAMESPACE_CONFIRM
  );
  const { openDialog: openCancel } = useDetailsContext(DIALOG_NAMESPACE_CANCEL);
  const hasPermission = useMemo(() => {
    const role = sessionStorage.getItem("roles").toString();
    return role === "admin" || role === "provider";
  }, [sessionStorage.getItem("roles")]);

  const handleOpenDetails = () => {
    openDetails(row);
  };

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
      {(row.status === "Pending" || row.status === "Delivery") &&
        !!hasPermission && (
          <>
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
};

export default ActionCell;

export const renderRemittenceActions = (row) => {
  return <ActionCell row={row} />;
};
