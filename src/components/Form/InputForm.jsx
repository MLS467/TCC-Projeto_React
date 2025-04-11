import React from "react";
import { InputFormStyle } from "./InputForm.Style";

const InputForm = ({
  name,
  type,
  placeholder,
  handleChange = () => {},
  size,
  req,
}) => {
  return (
    <>
      <label htmlFor={name}>{name}: </label>
      <InputFormStyle
        required={req}
        size={size}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputForm;
