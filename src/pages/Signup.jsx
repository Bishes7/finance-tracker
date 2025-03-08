import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FinancialTips from "../components/FinancialTips";
import SignUpForm from "../components/SignUpForm";

const SignUP = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col md>
          <FinancialTips />
        </Col>
        <Col md>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUP;
