import styled, { keyframes } from "styled-components";
import { palette } from "../../../constant/colors";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const SpinnerScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right top,
    ${palette[10]} 0%,
    ${palette[5]} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 48px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 32px;
  box-shadow: 0 8px 48px 0 rgba(44, 62, 80, 0.12);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Spinner = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  .spinner-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${palette[100]};
    border-top: 4px solid ${palette[500]};
    border-radius: 50%;
    animation: ${rotateAnimation} 1s linear infinite;
  }

  .spinner-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: ${palette[500]};
    border-radius: 50%;
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  }
`;

export const LoadingText = styled.div`
  color: ${palette[600]};
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 4px;

  .dots {
    display: flex;
    gap: 2px;
  }
`;

export const Dot = styled.span`
  animation: ${fadeInOut} 1.5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  font-weight: bold;
`;
