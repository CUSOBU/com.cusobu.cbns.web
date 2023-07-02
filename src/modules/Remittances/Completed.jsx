import { DateRangePicker } from "../../components";
import DataTable from "./components/DataTable";
import Grid from "@mui/material/Grid";

const Completed = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <DateRangePicker />
      </Grid>
      <Grid item xs={12}>
        <DataTable
          status={["Complete"]}
          startDate="2023-06-20"
          endDate="2023-12-29"
        />
      </Grid>
    </Grid>
  );
};

export default Completed;
