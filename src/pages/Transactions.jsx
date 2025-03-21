import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FinancialTips from "../components/FinancialTips";
import SignUpForm from "../components/SignUpForm";
import { TransactionForm } from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

// Actual Page
const Transactions = () => {
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
