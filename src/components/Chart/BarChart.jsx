import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  // Define the chart data
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Amount",
        data: data.values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };
  return <Bar data={chartData} />;
};

export default BarChart;
