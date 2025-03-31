import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { PostNewuser } from "../helper/axiosHelper";
import { useForm } from "../CustomHook/useForm";

const initialstate = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUpForm = () => {
  const { handleOnChange, formInput, setFormInput } = useForm(initialstate);
  // const [formInput, setFormInput] = useState({});

  //   Tracking the submitted values
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmpassword, ...rest } = formInput;

    if (confirmpassword !== rest.password) {
      return toast.error("Password doesnot match");
    }

    //regular expression to check if the password has atleast one upper and number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (!passwordRegex.test(rest.password)) {
      return toast.error(
        "Password must contain at least one uppercase letter and one number"
      );
    }

    const pending = PostNewuser(rest);
    toast.promise(pending, {
      pending: "Please wait",
    });
    const { status, message } = await pending;
    toast[status](message);

    status === "success" && setFormInput(initialstate);
  };

  // Creating array for the form
  const inputField = [
    {
      label: "Name",
      placeholder: "Your Name",
      required: true,
      type: "text",
      name: "name",
      value: formInput.name,
    },
    {
      label: "Email",
      placeholder: "write your email",
      required: true,
      type: "email",
      name: "email",
      value: formInput.email,
    },
    {
      label: "Password",
      placeholder: "Type your password",
      required: true,
      type: "password",
      name: "password",
      value: formInput.password,
    },
    {
      label: "Confirm Password",
      placeholder: "Type your password",
      required: true,
      type: "password",
      name: "confirmpassword",
      value: formInput.confirmpassword,
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
