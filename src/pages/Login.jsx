import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import SigninForm from "../components/SignInForm";

// Actual Page
const Login = () => {
  // const { user, setUser } = useUser(); //destructure the value of the useUser

  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded">
        <Col md={6}>
          <SigninForm />
        </Col>
        <Col md>
          <div
            className="d-flex flex-column justify-content-center fs-1  "
            style={{ height: "100%" }}
          >
            <div className="text-danger fw-bold text-decoration-line-through">
              Reduce your EXPENSES <BsGraphDownArrow />
            </div>
            <div className="text-success fw-bold text-decoration-underline">
              Uplift your INCOMES <BsGraphUpArrow />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
