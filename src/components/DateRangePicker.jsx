import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker  } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid, Box } from "@mui/material";

const PickerComponent = () => {
  const [startDate, setStartDate] = useState(() => dayjs(new Date()));
  const [endDate, setEndDate] = useState(() => dayjs(new Date()));

  useEffect(() => {
    console.log({ startDate, endDate });
  }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid display="flex">
        <DatePicker
          label="Controlled picker"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
        <Box sx={{ mx: 2, my: "auto" }}> to </Box>
        <DatePicker
          label="Controlled picker"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </Grid>
    </LocalizationProvider>
  );
};

export default PickerComponent;
