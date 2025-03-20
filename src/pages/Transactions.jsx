import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FinancialTips from "../components/FinancialTips";
import SignUpForm from "../components/SignUpForm";

// Actual Page
const Transactions = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col md={6}>Hello Transactions</Col>
      </Row>
    </Container>
  );
};

export default Transactions;
