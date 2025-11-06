import {
  LoadingWrapper,
  SpinnerContainer,
  Spinner,
  SpinnerCore,
  LoadingText,
  LoadingSubtext,
} from "./style";

const LoadingDashboard = ({
  message = "Carregando...",
  subtext = "Por favor, aguarde um momento",
}) => {
  return (
    <LoadingWrapper>
      <SpinnerContainer>
        <Spinner />
        <SpinnerCore />
      </SpinnerContainer>
      <LoadingText>{message}</LoadingText>
      {subtext && <LoadingSubtext>{subtext}</LoadingSubtext>}
    </LoadingWrapper>
  );
};

export default LoadingDashboard;
