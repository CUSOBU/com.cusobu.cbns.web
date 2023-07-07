import { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "./components/DataTable";
import { DateRangePicker } from "../../components";
import { useDetailsContext } from "./contexts/DetailsContext";
import { DIALOG_NAMESPACE } from "./constants/create";

const Processing = () => {
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
        {sessionStorage.getItem("roles") === "seller" && (
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={openDialog}
          >
            Create
          </Button>
        )}
      </Grid>
      <Grid item xs={12}>
        <DataTable
          status={["Pending", "Delivery"]}
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          actions={true}
        />
      </Grid>
    </Grid>
  );
};

export default Processing;
