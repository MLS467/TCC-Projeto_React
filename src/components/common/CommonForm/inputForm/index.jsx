import { InputWrapper, InputLabel, StyledInput } from "./style";

const InputForm = ({
  title,
  type = "text",
  placeholder,
  handleInput = () => {},
  handleCep = () => {},
  multiline = false,
  value,
  borderColorInput,
  eventType = "onChange", // "onChange" ou "onBlur"

  ...props
}) => {
  const elementType = multiline ? "textarea" : "input";

  const eventProps =
    eventType === "CEP" || eventType === "onBlur"
      ? { onBlur: handleCep, onChange: handleInput }
      : { onChange: handleInput };

  // Adiciona propriedades específicas para textarea
  const textareaProps = multiline
    ? {
        rows: 4,
        style: { resize: "vertical", minHeight: "120px" },
      }
    : {};

  return (
    <InputWrapper borderColorInput={borderColorInput}>
      <InputLabel>
        {title}
        <sup>{props["required"] && "*"}</sup>
      </InputLabel>
      <StyledInput
        as={elementType}
        borderColorInput={borderColorInput}
        type={multiline ? undefined : type}
        placeholder={placeholder}
        value={value}
        {...eventProps}
        {...textareaProps}
        {...props}
      />
    </InputWrapper>
  );
};

export default InputForm;
