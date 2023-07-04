import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PropTypes from 'prop-types';

const PickerComponent = ({onDateChange}) => {
  const [startDate, setStartDate] = useState(() => dayjs(new Date()));
  const [endDate, setEndDate] = useState(() => dayjs(new Date()));

  useEffect(() => {
  }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid display="flex" sx={{ mx: 3, my: "auto" }}>
        <DatePicker
          label="Desde"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
        <Box sx={{ mx: 2, my: "auto" }}> - </Box>
        <DatePicker
          label="Hasta"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
        <Box sx={{ mx: 2, my: "auto"}}>
          <Button
            variant="contained"
            height="100%"
            size="large"
            endIcon={<ManageSearchIcon />}
            onClick={() => {
              onDateChange({
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
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
