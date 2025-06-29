import {
  SelectContainer,
  StyledSelect,
  StyledLabel,
  RequiredIndicator,
} from "./style";

const CommonSelectInput = ({
  title,
  name,
  id,
  value,
  options = [],
  placeholder = "Selecione uma opção",
  required = false,
  handleInput,
  disabled = false,
  ...props
}) => {
  const handleChange = (e) => {
    if (handleInput) {
      handleInput(e);
    }
  };

  return (
    <SelectContainer>
      {title && (
        <StyledLabel htmlFor={id || name}>
          {title}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </StyledLabel>
      )}
      <StyledSelect
        name={name}
        id={id || name}
        value={value || ""}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
};

export default CommonSelectInput;
