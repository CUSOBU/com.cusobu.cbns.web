import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useDetailsContext } from "../contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "../constants/create";
import API from "../../../services/EntityApiServices";
import utils from "../../../utils/env";
import CircularProgress from "@mui/material/CircularProgress";

export default function FormDialog() {
  const { closeDialog, isOpen } = useDetailsContext(DIALOG_NAMESPACE);
  // const {budgetCurrency, setBudgetCurrency} = useState("CUP");
  const [remittanceCurrency, setRemittanceCurrency] = useState("MLC");
  const [budgetCurrency, setBudgetCurrency] = useState("USD");
  const [remittanceAmount, setRemittanceAmount] = useState(0);
  const [operationCost, setOperationCost] = useState(0);
  const [budgetAmount, setBudgetAmount] = useState(110);

  useEffect(() => {
    calculateRemittanceAmount(remittanceCurrency, budgetAmount, budgetCurrency);
  }, [remittanceCurrency, budgetCurrency, remittanceAmount, budgetAmount]);

  const [isLoading, setIsLoading] = useState(false);

  const authAPI = new API(
    utils.api_url, // eslint-disable-line
    localStorage.getItem("token") || ""
  );

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
    setIsLoading(true);
    const data = {
      ...formData,
    };
    await authAPI
      .post("/remittances", data)
      .then(closeDialog)
      .catch((errors) => {
        console.log({ errors });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const calculateRemittanceAmount = async (
    remmitance_currency,
    budget,
    budget_currency
  ) => {
    if (budget > 0) {
      const data = await authAPI.post("/remittances/pricing", {
        remmitance_currency,
        budget,
        budget_currency,
      });
      setRemittanceAmount(data.remittance_prices.remittance_amount);
      setOperationCost(data.remittance_prices.operation_cost);
      // console.log("Proces", data);
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog} maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Enviar Remesa</DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid container sx={{ my: 2 }}>
              <Grid item xs={1}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={1} sx={{ my: "auto" }}>
                <Typography align="center" variant="body2">
                  Generales
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Divider sx={{ my: 2 }} />
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Nombre completo"
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
                label="Teléfonos"
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
                label="Tarjeta"
                type="number"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("cardNumber", {
                  required: "Este campo es requerido",
                  min: { value: 12, message: "Mínimo de valor 12" },
                })}
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message}
              />
            </Grid>

            <Grid container sx={{ my: 2 }}>
              <Grid item xs={1}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={1} sx={{ my: "auto" }}>
                <Typography align="center" variant="body2">
                  Remesa
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Divider sx={{ my: 2 }} />
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Select
                label="Moneda"
                variant="filled"
                value={budgetCurrency}
                fullWidth
                {...register("budget_currency", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.budget_currency}
                onChange={(event) => {
                  setBudgetCurrency(event.target.value);
                }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"UYU"}>UYU</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Precio (Enviar)"
                type="number"
                variant="filled"
                fullWidth
                value={budgetAmount}
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
                onChange={(event) => {
                  setBudgetAmount(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                label="Moneda"
                variant="filled"
                value={remittanceCurrency}
                fullWidth
                {...register("remittance_currency", {
                  required: "Este campo es requerido",
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.remittance_currency}
                onChange={(event) => {
                  setRemittanceCurrency(event.target.value);
                }}
              >
                <MenuItem value={"MLC"}>MLC</MenuItem>
                <MenuItem value={"CUP"}>CUP</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Monto (Recibe)"
                type="number"
                value={remittanceAmount}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                sx={{ mb: 1 }}
                {...register("remittance_amount", {
                  min: { value: 0, message: "Mínimo de valor cero" },
                })}
                error={!!errors.remittance_amount}
                helperText={errors.remittance_amount?.message}
                disabled
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} disabled={isLoading}>Cancel</Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
