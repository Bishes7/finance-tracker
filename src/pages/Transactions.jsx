import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { TransactionForm } from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import { useUser } from "../components/context/UserContext";

// Actual Page
const Transactions = () => {
  const { getTransactions } = useUser();
  // using useeffect to render the transactions page

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col>
          <TransactionForm />
          <hr />
          <TransactionTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;
