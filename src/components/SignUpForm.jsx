import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";

const SignUpForm = () => {
  const [formInput, setFormInput] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  // Creating array for the form
  const inputField = [
    {
      label: "Name",
      placeholder: "Your Name",
      required: true,
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "write your email",
      required: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "Type your password",
      required: true,
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Type your password",
      required: true,
      type: "password",
      name: "confirmpassword",
    },
  ];
  return (
    <div className="border rounded p-4">
      <h4 className="mb-4"> SignUP NOW !!</h4>
      <Form>
        {inputField.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
