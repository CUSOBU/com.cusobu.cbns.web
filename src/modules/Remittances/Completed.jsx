import { DateRangePicker } from "../../components";
import DataTable from "./components/DataTable";
import Grid from "@mui/material/Grid";
import { useState } from "react";


const Completed = () => {

  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <DateRangePicker 
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onDateChange={setDateRange}
        />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          status={["Complete"]}
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
        />
      </Grid>
    </Grid>
  );
};

export default Completed;
