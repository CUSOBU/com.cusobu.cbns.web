import { Button, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Box from '@mui/material/Box';
import { authAPI } from "../../../services/EntityApiServices";


// Definir el componente ActionCell
const ActionCell = ({ row, removeRow  }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [action, setAction] = useState(null);

  const handleClickOpen = (actionType) => {
    setOpen(true);
    setAction(actionType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    if(comment === "") {
      alert("Ingrese evidencia");
    }else{
      if (action === "FAIL") {    
        authAPI.patch(`/remittances/setstatus/${row.identifier}`, { status: "Cancel", statusCode: 4, provider: sessionStorage.user, evidence: comment });
      } else if (action === "COMPLETE") {
        authAPI.patch(`/remittances/setstatus/${row.identifier}`, { status: "Complete", statusCode: 3, provider: sessionStorage.user, evidence: comment });
      }
      removeRow(row.identifier);
      setOpen(false);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mx: 2, gap: 2 }}>
        <Button variant="contained" color="info" onClick={() => handleClickOpen("FAIL")} endIcon={<DoDisturbIcon sx={{ my: "auto" }}/>}></Button>
        {/* <Button variant="contained" color="info" endIcon={<DoneIcon sx={{ my: "auto" }}/>} onClick={() => handleClickOpen("COMPLETE")}></Button> */}
        <Button variant="contained" color="success" endIcon={<DoneIcon sx={{ my: "auto" }}/>} onClick={() => handleClickOpen("COMPLETE")}></Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ingrese Evidencia</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Evidencia"
            type="text"
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleConfirm}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ActionCell.propTypes = {
  row: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired
};

export default ActionCell;

