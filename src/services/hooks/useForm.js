import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState((prevState) => {
      const { name, value } = target;
      const newValue = value;
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
