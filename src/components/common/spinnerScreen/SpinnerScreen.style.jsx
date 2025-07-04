import styled, { keyframes } from "styled-components";
import { palette } from "../../../constant/colors";

// Animação principal do spinner moderno
const modernSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Animação de fade suave para textos
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container principal com fundo limpo
export const SpinnerScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// Wrapper centralizado do conteúdo
export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  animation: ${fadeIn} 0.6s ease-out;
`;

// Spinner moderno com gradiente circular
export const ModernSpinner = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

// Dot do spinner com gradiente da paleta
export const SpinnerDot = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid ${palette[600]};
  border-right: 3px solid ${palette[500]};
  border-bottom: 3px solid ${palette[400]};
  border-left: 3px solid ${palette[300]};
  animation: ${modernSpinAnimation} 1.2s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${palette[600]};
    border-radius: 50%;
    box-shadow: 0 0 12px ${palette[400]};
  }
`;

// Texto principal com cor da paleta
export const LoadingText = styled.div`
  color: ${palette[800]};
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
`;

// Subtexto com cor mais suave
export const SubText = styled.div`
  color: ${palette[1000]};
  font-size: 0.95rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  letter-spacing: -0.01em;
  opacity: 0.8;
`;
