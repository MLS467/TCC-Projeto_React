import {
  SpinnerScreenContainer,
  SpinnerWrapper,
  LoadingText,
  SubText,
  ModernSpinner,
  SpinnerDot,
} from "./SpinnerScreen.style";

const SpinnerScreen = ({ message = "Carregando aplicação..." }) => {
  return (
    <SpinnerScreenContainer>
      <SpinnerWrapper>
        <ModernSpinner>
          <SpinnerDot />
        </ModernSpinner>
        <LoadingText>{message}</LoadingText>
        <SubText>Aguarde um momento...</SubText>
      </SpinnerWrapper>
    </SpinnerScreenContainer>
  );
};

export default SpinnerScreen;
