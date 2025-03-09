import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { PostNewuser } from "../helper/axiosHelper";
const SignUpForm = () => {
  const [formInput, setFormInput] = useState({});

  //   Tracking the values and names
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  //   Tracking the submitted values
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmpassword, ...rest } = formInput;

    if (confirmpassword !== rest.password) {
      return toast.error("Password doesnot match");
    }

    const { status, message } = await PostNewuser(rest);
    toast[status](message);
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
      <Form onSubmit={handleOnSubmit}>
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
