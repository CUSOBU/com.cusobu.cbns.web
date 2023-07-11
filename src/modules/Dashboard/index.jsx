import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import DailyBarChart from "./DailyBarChart";
import { useDashboardContext } from "./contexts/DashboardContext";
import { formatDate } from "../../utils/format-date.util";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const { balanceData, isLoading: dataLoading } = useDashboardContext();
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item sm={3} xs={12} md={6} lg={6}>
                <TotalIncomeDarkCard
                  isLoading={isLoading || dataLoading}
                  label="Costo"
                  value={balanceData?.operational_price || 0}
                />
              </Grid>
              <Grid item sm={3} xs={12} md={6} lg={6}>
                <TotalIncomeDarkCard
                  isLoading={isLoading || dataLoading}
                  label="Precio"
                  value={balanceData?.customer_price || 0}
                />
              </Grid>
              <Grid item sm={3} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  isLoading={isLoading}
                  label="Último cierre"
                  value={formatDate(balanceData?.last_update || new Date())}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <DailyBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
