import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useUser } from "../components/context/UserContext";

import PieChart from "../components/Chart/PieChart";
import BarChart from "../components/Chart/BarChart";
import LineChart from "../components/Chart/LineChart";
import LineChart1 from "../components/Chart/LineChart1";

// Actual Page
const DashBoard = () => {
  const { getTransactions, transactions } = useUser();

  // Fetch transactions when the Dashboard component is mounted
  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <div className="bg-dark p-5 rounded">
      <h2>DashBoard</h2>
      <hr />

      <div className="mt-5 charts-container d-flex justify-content-between ">
        <div className="chart-item">
          <h3>Pie Chart</h3>
          <PieChart transactions={transactions} />
        </div>

        <div className="chart-item">
          <h3> Income Chart</h3>
          <LineChart transactions={transactions} />
        </div>

        <div className="chart-item">
          <h3>Expense Chart</h3>
          <LineChart1 transactions={transactions} />
        </div>
      </div>
      <div>
        <BarChart transactions={transactions} />
      </div>
    </div>
  );
};

export default DashBoard;
