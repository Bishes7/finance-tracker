import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ transactions }) => {
  // Prepare data for the pie chart by type
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expenses")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const chartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Transaction Type",
        data: [income, expenses],
        backgroundColor: ["#36A2EB", "#FF5733"],
        hoveroffset: 4,
      },
    ],
  };
  return (
    <div style={{ width: "250px", height: "250px" }}>
      <Pie data={chartData} />;
    </div>
  );
};

export default PieChart;
