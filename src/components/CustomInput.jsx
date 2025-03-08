import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...input }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...input} />
    </Form.Group>
  );
};

export default CustomInput;
