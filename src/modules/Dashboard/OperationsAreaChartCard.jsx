import { useEffect } from "react";
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

const OperationjAreaChartCard = () => {
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
      <Chart options={chartData.options} series={chartData.series} type="radialBar" height={350}/>
    </Card>
  );
};

export default OperationjAreaChartCard;
