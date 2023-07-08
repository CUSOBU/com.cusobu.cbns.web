// ===========================|| DASHBOARD - RADIAL AREA CHART ||=========================== //

const chartData = {
  series: [44, 55, 67],
  colors: ["blue", "green", "red"],
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "35%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: { name: { show: false }, value: { show: false } },
      },
    },
    labels: ["Total", "Total USD", "Total MLC"],
    legend: {
      show: true,
      floating: true,
      position: "left",
      offsetX: 85,
      offsetY: 12,
      labels: { useSeriesColors: false },
      markers: { size: 0 },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: { horizontal: 3 },
    },
  },
};

export default chartData;
