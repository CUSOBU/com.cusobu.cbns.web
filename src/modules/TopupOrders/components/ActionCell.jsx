import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/details";
import { useMemo } from "react";

import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";

// Definir el componente ActionCell
const ActionCell = ({ row, setFetchDataFlag }) => {
  const { openDialog: openDetails } = useDetailsContext(DIALOG_NAMESPACE);

  const [openActionDialog, setOpenActionDialog] = useState(false);
  const [evidence, setEvidence] = useState("");
  const [actionDialog, setActionDialog] = useState("");
  const [evidenceError, setEvidenceError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authAPI = new API(utils.api_url, localStorage.getItem("token") || "");

  const hasPermission = useMemo(() => {
    const role = sessionStorage.getItem("roles").toString();
    return role === "admin" || role === "provider";
  }, [sessionStorage.getItem("roles")]);

  const handleOpenDetails = () => {
    openDetails(row);
  };

  const handleGetTopupOrder = async () => {
    //Submit to get remittance
    console.log(`Se obtiene el elemento ${row.id}`);
    await authAPI.patch(`/topuporders/setstatus/${row?.id}`, {
      status: "Delivery",
      statusCode: 1,
      provider: sessionStorage.user,
    });
    setFetchDataFlag(true);
  };

  const handleReleaseTopupOrder = async () => {
    //Submit to get remittance
    console.log(`Se libera el elemento ${row.id}`);
    await authAPI.patch(`/topuporders/setstatus/${row?.id}`, {
      status: "Pending",
      statusCode: 0,
      provider: sessionStorage.user,
    });
    setFetchDataFlag(true);
  };

  const closeActionDialog = () => {
    setOpenActionDialog(false);
  };

  const onConfirmAction = async () => {
    if (!evidence) {
      setEvidenceError(true);
      return;
    } else {
      setEvidenceError(false);
    }
    setIsLoading(true);
    if (actionDialog === "Cancelar") {
      await authAPI.patch(`/topuporders/setstatus/${row?.id}`, {
        status: "Cancel",
        statusCode: 4,
        evidence: evidence,
      });
    } else if (actionDialog === "Completar") {
      await authAPI.patch(`/topuporders/setstatus/${row?.id}`, {
        status: "Complete",
        statusCode: 3,
        provider: sessionStorage.user,
        evidence: evidence,
      });
    }
    setFetchDataFlag(true);
    setIsLoading(false);
    closeActionDialog();
  };
  const handleOpenConfirm = () => {
    setOpenActionDialog(true);
    setActionDialog("Completar");
  };
  const handleOpenCancel = () => {
    setOpenActionDialog(true);
    setActionDialog("Cancelar");
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
      {row.status === "Pending" && !!hasPermission && (
        <>
          <Tooltip title="Get">
            <IconButton
              color="secondary"
              aria-label="Get"
              size="large"
              sx={{ margin: 0, padding: 0 }}
              onClick={handleGetTopupOrder}
            >
              <PlaylistAddCheckCircleIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </>
      )}
      {row.status === "Delivery" && !!hasPermission && (
        <>
          <Tooltip title="Release">
            <IconButton
              color="info"
              aria-label="Release"
              size="large"
              onClick={handleReleaseTopupOrder}
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
      <Dialog
        open={openActionDialog}
        onClose={closeActionDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{actionDialog} remesa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Evidencia"
            value={evidence}
            onChange={(e) => setEvidence(e.target.value)}
            fullWidth
            sx={{ margin: "10px 0" }}
            required
          />
          {evidenceError && (
            <Typography variant="caption" color="error">
              *Obligatorio
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeActionDialog}>Cancelar</Button>
          <Button onClick={onConfirmAction} disabled={isLoading} autoFocus>
          {isLoading ? <CircularProgress size={24} /> : "Confirmar"}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};


ActionCell.propTypes = {
  row: PropTypes.object.isRequired,
  setFetchDataFlag: PropTypes.func,
};

export default ActionCell;

export const renderTopupsActions = (row, setFetchDataFlag) => {
  return <ActionCell row={row} setFetchDataFlag={setFetchDataFlag} />;
};
