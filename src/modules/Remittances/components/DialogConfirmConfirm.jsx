import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE_CONFIRM } from "../constants/columns";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";

export default function ConfirmDialog() {
  const { closeDialog, isOpen, payload } = useDetailsContext(
    DIALOG_NAMESPACE_CONFIRM
  );

  const authAPI = new API(
    utils.api_url,
    localStorage.getItem("token") || ""
  );

  const onConfirm = () => {
    //Submit to confirm
    console.log(`Se confirma el elemento ${payload?.id}`);
    authAPI.patch(`/remittances/setstatus/${payload?.id}`, {
      status: "Complete",
      statusCode: 3,
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
          Estas seguro que deseas confirmar la remitancia.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
