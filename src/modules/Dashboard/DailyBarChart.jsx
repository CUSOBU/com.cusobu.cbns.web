import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { useDashboardContext } from "./contexts/DashboardContext";

// project imports
import SkeletonTotalGrowthBarChart from "../../components/cards/Skeleton/TotalGrowthBarChart";
import MainCard from "../../components/cards/MainCard";

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const DailyBarChart = ({ isLoading }) => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const { remittancesDates, isLoading: dataLoading } = useDashboardContext();
  const newChartData = {
    series: [
      {
        name: "Cantidad de recargas",
        data,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories,
        offsetY: -10,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Cantidad de recargas por días",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  useEffect(() => {
    // do not load chart when loading
    if (!isLoading && !dataLoading) {
      const categories = remittancesDates?.map((el) => el.date);
      const data = remittancesDates?.map((el) => el.cant);
      setCategories(categories);
      setData(data);
      ApexCharts.exec(`bar-chart`, "updateOptions", newChartData);
    }
  }, [remittancesDates, isLoading, dataLoading]);

  return (
    <>
      {isLoading || dataLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">
                        Total de recargas
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart
                options={newChartData.options}
                series={newChartData.series}
                type="bar"
                height={350}
              />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

DailyBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default DailyBarChart;
