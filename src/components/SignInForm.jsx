import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../helper/axiosHelper";
import { useUser } from "./context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const location = useLocation(); //to locate the path

  const { user, setUser } = useUser(); //destructure the value of the useUser
  const [formInput, setFormInput] = useState({});
  //   Tracking the values and names

  // Use useNavigate to redirect to the desired page
  const navigate = useNavigate();

  const goTo = location?.state?.from?.pathname || "/dashboard";

  // Using useEffect to render the page
  useEffect(() => {
    user?._id && navigate(goTo); // redirects us to the desired page
  }, [user?._id, navigate, goTo]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  //   Tracking the submitted values
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const pendingResp = loginUser(formInput);
    toast.promise(pendingResp, {
      pending: "Please wait...",
    });
    const { status, message, user, accessToken } = await pendingResp;
    toast[status](message);

    setUser(user);

    localStorage.setItem("accessToken", accessToken);
  };

  // Creating array for the form
  const inputField = [
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
  ];
  return (
    <div className="border rounded p-4">
      <h4 className="mb-4"> Login NOW !!</h4>
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

export default SigninForm;
