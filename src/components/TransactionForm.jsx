import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import { useForm } from "../CustomHook/useForm";
import { toast } from "react-toastify";
import { postTransaction } from "../helper/axiosHelper";

// attributes of the form
const initialstate = {
  title: "",
  amount: "",
  tdate: "",
};

export const TransactionForm = () => {
  // Importing custom hooks
  const { handleOnChange, formInput, setFormInput } = useForm(initialstate);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const pending = postTransaction(formInput);
    toast.promise(pending, { pending: "please wait some moment" });

    const { status, message } = await pending;
    toast[status](message);

    status === "success" && setFormInput(initialstate);
  };

  const inputField = [
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
        <Form.Group className="mb-3">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">--Select--</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Form.Group>
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
