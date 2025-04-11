import React from "react";
import { BaseButtonStyle } from "./BtnGlobalStyle";

const BtnGlobal = ({
  type,
  text,
  btnBgColor,
  btnColor,
  size,
  fontSize,
  func = () => {},
}) => {
  return (
    <BaseButtonStyle
      id={text}
      onClick={func}
      fontSize={fontSize}
      width={size}
      size={size}
      $btnBgColor={btnBgColor}
      $btnColor={btnColor}
      type={type}
    >
      {text}
    </BaseButtonStyle>
  );
};

export default BtnGlobal;
