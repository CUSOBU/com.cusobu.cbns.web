import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Card } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import chartData from "./chart-data/radial-bar-chart";

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const OperationjAreaChartCard = ({ total, local, ext }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const { navType } = customization || { navType: null };

  const orangeDark = theme.palette.secondary[800];

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      tooltip: {
        theme: "light",
      },
    };
    ApexCharts.exec(`support-chart`, "updateOptions", newSupportChart);
  }, [navType, orangeDark]);

  return (
    <Card sx={{ bgcolor: "none" }}>
      <Chart
        options={{
          ...chartData.options,
          labels: ["Total", `Total ${ext.label}`, `Total ${local.label}`],
        }}
        series={[total, ext.value, local.value]}
        type="radialBar"
        height={350}
      />
    </Card>
  );
};

OperationjAreaChartCard.propTypes = {
  total: PropTypes.number,
  local: PropTypes.object,
  ext: PropTypes.object,
};

export default OperationjAreaChartCard;
