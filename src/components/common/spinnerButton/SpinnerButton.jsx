import { SpinnerButtonContainer, ButtonSpinner } from "./SpinnerButton.style";

const SpinnerButton = ({
  children,
  isLoading = false,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  loadingText = "Carregando...",
  ...props
}) => {
  return (
    <SpinnerButtonContainer
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${className} ${isLoading ? "loading" : ""}`}
      {...props}
    >
      {isLoading ? (
        <>
          <ButtonSpinner>
            <div className="spinner-circle"></div>
          </ButtonSpinner>
          <span className="loading-text">{loadingText}</span>
        </>
      ) : (
        children
      )}
    </SpinnerButtonContainer>
  );
};

export default SpinnerButton;
