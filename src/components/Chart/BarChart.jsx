import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useUser } from "../context/UserContext";

const BarChart = () => {
  const { transactions } = useUser(); // Get transactions from context
  const [data, setData] = useState(null); // Initialize data as null to prevent rendering issues

  // Create an array of months
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

  useEffect(() => {
    if (!transactions) return; // Prevent processing if transactions are not available

    // Initialize arrays to store monthly income and expenses
    const income = new Array(12).fill(0);
    const expenses = new Array(12).fill(0);

    // Loop through transactions and sum income and expenses by month
    transactions.map((transaction) => {
      const month = new Date(transaction.tdate).getMonth(); // Get the month (0-11)

      if (transaction.type === "income") {
        income[month] += transaction.amount; // Add to the corresponding month's income
      } else if (transaction.type === "expenses") {
        expenses[month] += transaction.amount; // Add to the corresponding month's expenses
      }
    });

    // Set the data for the chart only when we have valid transaction data
    setData({
      labels: months, // Set the months as labels
      datasets: [
        {
          label: "Income",
          data: income, // Data for income
          backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for income bars
        },
        {
          label: "Expenses",
          data: expenses, // Data for expenses
          backgroundColor: "rgba(255, 99, 132, 0.6)", // Color for expense bars
        },
      ],
    });
  }, [transactions]); // Recalculate when transactions change

  if (!data) {
    // Render a loading message or spinner if data is not ready
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Income vs Expenses</h2>
      <Bar
        data={data}
        options={{ responsive: true, plugins: { legend: { position: "top" } } }}
      />
    </div>
  );
};

export default BarChart;
