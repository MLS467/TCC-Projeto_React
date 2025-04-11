import React from "react";
import { InputLoginStyle } from "./InputLogin.Style";

const InputLogin = ({
  type,
  onBlur = () => {},
  name,
  placeholder,
  handleChange = () => {},
  size,
  p,
  value,
  require = false,
}) => {
  return (
    <>
      <InputLoginStyle
        id={name}
        type={type}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        required={require}
        size={size}
        p={p}
        value={value}
      />
    </>
  );
};

export default InputLogin;
