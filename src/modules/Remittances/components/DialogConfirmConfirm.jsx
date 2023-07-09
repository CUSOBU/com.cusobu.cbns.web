import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE_CONFIRM } from "../constants/columns";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function ConfirmDialog() {
  const { closeDialog, isOpen, payload } = useDetailsContext(
    DIALOG_NAMESPACE_CONFIRM
  );

  const [comment, setComment] = useState("");

  const authAPI = new API(utils.api_url, localStorage.getItem("token") || "");

  const onConfirm = () => {
    //Submit to confirm
    console.log(`Se confirma el elemento ${payload}`);
    authAPI.patch(`/remittances/setstatus/${payload?.identifier}`, {
      status: "Complete",
      statusCode: 3,
      provider: sessionStorage.user,
      evidence: comment
    });
    closeDialog();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Completar remesa</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Evidencia de confirmación"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          sx={{margin: "10px 0"}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Completar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
