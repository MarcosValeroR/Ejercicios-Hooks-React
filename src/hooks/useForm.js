import { useState } from "react";

export const useForm = (initialForm = {
    user: "juan",
    mail: "juan@email.com",
    password: " "
}) => {
  const [formState, setFormState] = useState(initialForm);


  function handleChange({target}) {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  function resetForm(){
    setFormState(initialForm)
  }
  return {
    ...formState,
    handleChange,
    resetForm
  };
};
