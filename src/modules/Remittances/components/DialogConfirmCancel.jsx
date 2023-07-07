import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE_CANCEL } from "../constants/columns";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";

export default function ConfirmDialog() {
  const { closeDialog, isOpen, payload } = useDetailsContext(
    DIALOG_NAMESPACE_CANCEL
  );

  const authAPI = new API(
    utils.api_url,
    localStorage.getItem("token") || ""
  );

  const onCancel = () => {
    //Submit to cancel
    console.log(`Se elimina el elemento ${payload?.identifier}`);

    authAPI.patch(`/remittances/setstatus/${payload?.identifier}`, {
      status: "Cancel",
      statusCode: 4,
      provider: sessionStorage.user,
      evidence: "comment",
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Confirmar Cancelación</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Estas seguro que deseas cancelar la remitancia.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancelar</Button>
        <Button onClick={onCancel} autoFocus>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
