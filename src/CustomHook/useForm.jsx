import { useState } from "react";

export const useForm = (initialstate) => {
  const [formInput, setFormInput] = useState(initialstate);

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
