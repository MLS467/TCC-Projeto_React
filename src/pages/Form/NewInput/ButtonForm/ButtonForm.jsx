import React from "react";
import { ButtonForm as ButtonFormStyle } from "./ButtonForm.style";

const ButtonForm = ({ type, text, reset = null, action }) => {
  return (
    <ButtonFormStyle onClick={action || (() => {})} reset={reset} type={type}>
      {text}
    </ButtonFormStyle>
  );
};

export default ButtonForm;
