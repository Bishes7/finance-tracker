import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ transactions }) => {
  // Month names
  const months = [
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
  ];

  //   Initialize an empty array to hold the total amouts for each months
  const monthlyAmounts = new Array(12).fill(0); // created array with 12 zeros for each months

  // looping through each transactions to accumulate the amount for correct  months
  transactions.map((transaction) => {
    const transactionMonth = new Date(transaction.tdate).getMonth(); //getting months index

    //Adding transaction amount to correct month
    monthlyAmounts[transactionMonth] += transaction.amount;
  });
  // Define the chart data
  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Monthly Transactions",
        data: monthlyAmounts,
        backgroundColor: "rgba(75, 192, 600, 0.6)",
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
