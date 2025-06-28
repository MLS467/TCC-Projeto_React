import { StyledInput } from "./style";

const RoundedInput = ({
  placeholder,
  name,
  type,
  id,
  handleInput = () => {},
  ...props
}) => (
  <StyledInput
    onChange={handleInput}
    placeholder={placeholder}
    type={type || "text"}
    autoComplete="off"
    name={name}
    id={id}
    {...props}
  />
);

export default RoundedInput;
