import React from "react";
import { BaseSelectStyle, SelectOption } from "./SelectGlobal.Style";

const SelectGlobal = ({ name, data, value, size, text, handleChange }) => {
  const result = data.map((item) => {
    return (
      <SelectOption key={item.id} value={item.name}>
        {item.name}
      </SelectOption>
    );
  });

  return (
    <>
      <BaseSelectStyle
        value={value}
        $size={size}
        name={name}
        onChange={handleChange}
      >
        <SelectOption disabled={true}>{text}</SelectOption>
        {result}
      </BaseSelectStyle>
    </>
  );
};

export default SelectGlobal;
