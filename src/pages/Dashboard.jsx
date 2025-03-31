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

      <div className="mt-5  ">
        <Row className="d-flex justify-content-between  ">
          {/* Pie Chart */}
          <Col xs={12} sm={6} md={3} className="chart-item mb-4 ">
            <h3>Pie Chart</h3>
            <PieChart transactions={transactions} />
          </Col>

          {/* Income Chart */}
          <Col xs={12} sm={6} md={3} className="chart-item mb-4 ">
            <h3>Income Chart</h3>
            <LineChart transactions={transactions} />
          </Col>

          {/* Expense Chart */}
          <Col xs={12} sm={6} md={3} className="chart-item mb-4 ">
            <h3>Expense Chart</h3>
            <LineChart1 transactions={transactions} />
          </Col>
        </Row>

        {/* Bar Chart */}
        <Row>
          <Col xs={12} className="mb-4 ">
            <BarChart transactions={transactions} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashBoard;
