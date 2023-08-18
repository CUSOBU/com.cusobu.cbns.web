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

  const [topupBudget, setTopupBudget] = useState(0);
  const [topupAmount, setTopupAmount] = useState(0);
  const [topupCost, setTopupCost] = useState(0);
  const [topupOffer, setTopupOffer] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const authAPI = new API(
      utils.api_url,
      localStorage.getItem("token") || ""
  );

  const fetchData = async () => {
    try {
      setLoading(true)
      let response = await authAPI.get(
          `topups?page=1&pageSize=100`
      );
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [
  //   topupOffer,
  //
  // ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  // useEffect(() => {
  //   !isOpen && reset();
  // }, [isOpen]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (formData) => {
    setLoading(true);
    const data = {
      ...formData,
    };
    await authAPI
      .post("/topuporders", data)
      .then(closeDialog)
      .catch((errors) => {
        console.log({ errors });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Función que maneja el cambio en el select
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value; // Esta es solo el id
    const selectedItem = data.find(item => item.id === selectedValue);

    if (selectedItem) {
      setTopupOffer(selectedItem);
      setTopupBudget(selectedItem.price);
      setTopupAmount(selectedItem.amount);
      setTopupCost(selectedItem.cost); // Asumo que querrías usar "cost", ya que estás duplicando "price". Si no es así, corrige esto.
    }
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog} maxWidth="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Enviar Micro-recarga</DialogTitle>
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
            <Grid item xs={5}>
              <TextField
                label="Nombre completo"
                variant="filled"
                fullWidth
                sx={{ mb: 1 }}
                {...register("senderName", {
                  required: "Este campo es requerido",
                  minLength: { value: 3, message: "Mínimo de valor 3" },
                })}
                error={!!errors.senderName}
                helperText={errors.senderName?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                  label="Oferta"
                  variant="filled"
                  fullWidth
                  value={topupOffer.id? topupOffer.id : ""}
                  {...register("topupId", {
                    required: "Este campo es requerido",
                    min: { value: 0, message: "Mínimo de valor cero" },
                  })}
                  error={!!errors.topupId}
                  onChange={handleSelectChange}
              >
                {data.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.price} - {item.amount} : {item.header}
                    </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid container sx={{ my: 2 }}>
              <Grid item xs={1}>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item xs={1} sx={{ my: "auto" }}>
                <Typography align="center" variant="body2">
                  Recarga
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Divider sx={{ my: 2 }} />
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <TextField
                  label="Teléfono"
                  type="number"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 1 }}
                  {...register("phoneNumber", {
                    required: "Este campo es requerido",
                    min: { value: 0, message: "Mínimo de valor 6" },
                  })}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
              />
            </Grid>
            <Grid item xs={3}>
              <input type="hidden" {...register("budget")} value={topupBudget} />
              <TextField
                  label={"Cobrar:"}
                  type="number"
                  value={topupBudget}
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  fullWidth
                  sx={{ mb: 1 }}
                  error={!!errors.budget}
                  helperText={errors.budget?.message}
                  disabled
              />
            </Grid>
            <Grid item xs={3}>
              <input type="hidden" {...register("amount")} value={topupAmount} />
              <TextField
                label={"Recarga:"}
                type="number"
                value={topupAmount}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                sx={{ mb: 1 }}
                error={!!errors.amount}
                helperText={errors.amount?.message}
                disabled
              />
            </Grid>
            <Grid item xs={3}>
              <input type="hidden" {...register("cost")} value={topupCost} />
              <TextField
                  label={"Costo:"}
                  type="number"
                  value={topupCost}
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  fullWidth
                  sx={{ mb: 1 }}
                  error={!!errors.cost}
                  helperText={errors.cost?.message}
                  disabled
              />
            </Grid>

          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
