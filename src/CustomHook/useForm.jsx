import { useState } from "react";

// creating a useform hook

export const useForm = (initialstate) => {
  const [formInput, setFormInput] = useState(initialstate); // state

  return {
    formInput,
    setFormInput,
    handleOnChange: (e) => handleOnChange({ e, formInput, setFormInput }),
  };
};

//   Tracking the values and names
export const handleOnChange = ({ e, formInput, setFormInput }) => {
  const { name, value } = e.target;
  setFormInput({ ...formInput, [name]: value });
};
