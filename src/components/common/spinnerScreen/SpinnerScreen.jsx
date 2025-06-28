import {
  SpinnerScreenContainer,
  SpinnerWrapper,
  Spinner,
  LoadingText,
  Dot,
} from "./SpinnerScreen.style";

const SpinnerScreen = ({ message = "Carregando..." }) => {
  return (
    <SpinnerScreenContainer>
      <SpinnerWrapper>
        <Spinner>
          <div className="spinner-circle"></div>
          <div className="spinner-inner"></div>
        </Spinner>
        <LoadingText>
          {message}
          <span className="dots">
            <Dot $delay="0s">.</Dot>
            <Dot $delay="0.2s">.</Dot>
            <Dot $delay="0.4s">.</Dot>
          </span>
        </LoadingText>
      </SpinnerWrapper>
    </SpinnerScreenContainer>
  );
};

export default SpinnerScreen;
