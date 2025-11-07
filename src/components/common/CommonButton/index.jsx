import { StyledButton } from "./style";

const PrimaryButton = ({ children, onClick, vertical = false, ...props }) => (
  <StyledButton
    onClick={onClick}
    {...props}
    style={{
      ...props.style,
      flexDirection: vertical ? "column" : "row",
      gap: vertical ? "4px" : "8px",
    }}
  >
    <span
      style={{
        fontSize: vertical ? "1.6rem" : "1.8rem",
        fontWeight: "700",
        marginRight: vertical ? "0" : "8px",
        display: "flex",
        alignItems: "center",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      +
    </span>
    <span
      style={{
        display: "flex",
        alignItems: "center",
        filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))",
      }}
    >
      {children}
    </span>
  </StyledButton>
);

export default PrimaryButton;
