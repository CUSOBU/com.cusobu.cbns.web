import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from "@mui/material/DialogContentText";
import { useForm } from "react-hook-form";
import DialogTitle from "@mui/material/DialogTitle";
import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/create";
import { useEffect } from "react";

export default function FormDialog() {
  const { closeDialog, isOpen } = useDetailsContext(DIALOG_NAMESPACE);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    !isOpen && reset();
  }, [isOpen]);

  const onSubmit = async (formData) => {
    console.log({ formData });
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog} maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Create Remittance</DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Full name"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("full_name", {
                  required: "Este campo es requerido",
                  minLength: { value: 3, message: "Mínimo de valor 3" },
                })}
                error={!!errors.full_name}
                helperText={errors.full_name?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone number"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("phone_number", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.phone_number}
                helperText={errors.phone_number?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Card number"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("cardNumber", {
                  required: "Este campo es requerido",
                  min: { value: 16, message: "Mínimo de valor cero" },
                  max: { value: 16, message: "Mínimo de valor cero" },
                })}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Remittance amount"
                type="number"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                sx={{ mb: 1 }}
                {...register("remittance_amount", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.remittance_amount}
                helperText={errors.remittance_amount?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Remittance currency"
                type="number"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
                {...register("remittance_currency", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.remittance_currency}
                helperText={errors.remittance_currency?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Budget amount"
                type="number"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
                {...register("budget_amount", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.budget_amount}
                helperText={errors.budget_amount?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Budget currency"
                type="number"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
                {...register("budget_currency", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.budget_currency}
                helperText={errors.budget_currency?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="operation cost"
                type="number"
                variant="filled"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                sx={{ mb: 1 }}
                {...register("operation_cost", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.operation_cost}
                helperText={errors.operation_cost?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Source reference"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("source_reference", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.source_reference}
                helperText={errors.source_reference?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Details"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("details", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.details}
                helperText={errors.details?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Provider"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("provider", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.provider}
                helperText={errors.provider?.message}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
