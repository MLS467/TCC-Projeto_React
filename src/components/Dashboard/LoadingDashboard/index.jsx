import { LoadingWrapper, Spinner, LoadingText } from "./style";

const LoadingDashboard = ({ message = "Carregando..." }) => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingDashboard;
