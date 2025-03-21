import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { useForm } from "../CustomHook/useForm";

// attributes of the form
const initialstate = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

export const TransactionForm = () => {
  // Importing custom hooks
  const { handleOnChange, formInput, setFormInput } = useForm(initialstate);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  const inputField = [
    {
      label: "Type",
      placeholder: "",
      required: true,
      type: "text",
      name: "type",
    },
    {
      label: "Title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: formInput.title,
    },
    {
      label: "Amount",
      placeholder: "$$",
      required: true,
      type: "number",
      name: "amount",
      value: formInput.amount,
    },
    {
      label: "Transaction Date",
      required: true,
      type: "date",
      name: "tdate",
      value: formInput.tdate,
    },
  ];

  return (
    <div className="border rounded p-4">
      <h4 className="mb-4"> Add Transactions !!</h4>
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
