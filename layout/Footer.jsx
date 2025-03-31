import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Container fluid className="bg-dark p-3  ">
      <Row className="d-flex justify-content-center  ">
        &copy; Copy Rights all reserved.|| Made By Bishes
      </Row>
    </Container>
  );
};

export default Footer;
