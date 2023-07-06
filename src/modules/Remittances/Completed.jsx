import { DateRangePicker } from "../../components";
import DataTable from "./components/DataTable";
import { Grid, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDetailsContext } from "./contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "./constants/create";

const Completed = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const { openDialog } = useDetailsContext(DIALOG_NAMESPACE);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mr={3}
      >
        <DateRangePicker
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onDateChange={setDateRange}
        />
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          onClick={openDialog}
        >
          Create
        </Button>
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
