import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ transactions }) => {
  const incomeData = transactions.map((transaction) =>
    transaction.type === "income" ? transaction.amount : 0
  );

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      { label: "Income", data: incomeData, borderColor: "green", tension: 0.3 },
    ],
  };
  return (
    <div style={{ width: "500px", height: "450px" }}>
      <Line data={chartData} />;
    </div>
  );
};

export default LineChart;
