import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { authAPI } from "../../../services/EntityApiServices";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/details";

// Definir el componente ActionCell
const ActionCell = ({ row, removeRow }) => {
  const { openDialog } = useDetailsContext(DIALOG_NAMESPACE);
  const [comment, setComment] = useState("");
  const [action, setAction] = useState(null);

  const handleClickOpen = () => {
    openDialog(row);
  };

  const handleClose = () => {};

  const handleConfirm = () => {
    if (comment === "") {
      alert("Ingrese evidencia");
    } else {
      if (action === "FAIL") {
        authAPI.patch(`/remittances/setstatus/${row.identifier}`, {
          status: "Cancel",
          statusCode: 4,
          provider: sessionStorage.user,
          evidence: comment,
        });
      } else if (action === "COMPLETE") {
        authAPI.patch(`/remittances/setstatus/${row.identifier}`, {
          status: "Complete",
          statusCode: 3,
          provider: sessionStorage.user,
          evidence: comment,
        });
      }
      removeRow(row.identifier);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Details">
        <IconButton aria-label="Details" size="small" onClick={handleClickOpen}>
          <InfoIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Confirm">
        <IconButton
          color="secondary"
          aria-label="Confirm"
          size="small"
          onClick={handleConfirm}
        >
          <CheckCircleIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cancel">
        <IconButton
          color="error"
          aria-label="Cancel"
          size="small"
          onClick={handleClose}
        >
          <CancelIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

ActionCell.propTypes = {
  row: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
};

export default ActionCell;
