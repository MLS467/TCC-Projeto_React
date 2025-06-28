import { StyledButton } from "./style";

const PrimaryButton = ({ children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>+</span>
    {children}
  </StyledButton>
);

export default PrimaryButton;
