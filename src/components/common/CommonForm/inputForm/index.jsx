import { InputWrapper, InputLabel, StyledInput } from "./style";

const InputForm = ({
  title,
  type = "text",
  placeholder,
  handleInput = () => {},
  multiline = false,
  borderColorInput,

  ...props
}) => {
  // Determina qual elemento usar baseado no multiline
  const elementType = multiline ? "textarea" : "input";

  return (
    <InputWrapper borderColorInput={borderColorInput}>
      <InputLabel>
        {title}
        <sup>{props["required"] && "*"}</sup>
      </InputLabel>
      <StyledInput
        as={elementType}
        onChange={handleInput}
        borderColorInput={borderColorInput}
        type={multiline ? undefined : type}
        placeholder={placeholder}
        {...props}
      />
    </InputWrapper>
  );
};

export default InputForm;
