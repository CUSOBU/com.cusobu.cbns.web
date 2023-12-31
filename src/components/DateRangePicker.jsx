import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

// Define custom styles
const useStyles = makeStyles({
  root: {
    // Override styles here
    // For example:
    "& .MuiInputBase-input": {
      height: "0.4375em !important",
    },
    // Add any other custom styles you need
  },
});

const PickerComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(() => dayjs(new Date()));
  const [endDate, setEndDate] = useState(() => dayjs(new Date()));

  const classes = useStyles();

  useEffect(() => { }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid display="flex" sx={{ mx: 3, my: "auto", flexWrap: "wrap" }} maxWidth="lg">
        <DatePicker
          label="Desde"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          className={classes.root}
          sx={{ minWidth: 100 }}
        />
        <Box sx={{ mx: 2, my: "auto", display: { xs: "none", sm: "block" } }}> - </Box>
        <DatePicker
          label="Hasta"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          className={classes.root}
          sx={{ minWidth: 100, mt: { xs: 2, sm: 0 } }}
        />
        <Box sx={{ mx: { xs: 0, sm: 2 }, my: "auto", mt: { xs: 2, sm: 0 } }}>
          <Button
            variant="contained"
            size="small"
            endIcon={<ManageSearchIcon />}
            sx={{ minWidth: 100 }}
            onClick={() => {
              onDateChange({
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
              });
            }}
          >
            Filtrar
          </Button>
        </Box>
      </Grid>
    </LocalizationProvider>
  );
};

PickerComponent.propTypes = {
  onDateChange: PropTypes.func,
};

export default PickerComponent;
