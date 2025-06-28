import styled, { keyframes } from "styled-components";
import { palette } from "../../../constant/colors";

const buttonSpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingPulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

export const SpinnerButtonContainer = styled.button`
  position: relative;
  width: 100%;
  padding: 18px 24px;
  background: ${palette[500]};
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.18s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 54px;
  overflow: hidden;

  &:hover:not(:disabled) {
    background: ${palette[600]};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(89, 153, 232, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &.loading {
    background: ${palette[400]};
    animation: ${loadingPulse} 2s ease-in-out infinite;

    &:hover {
      background: ${palette[400]};
      transform: none;
      box-shadow: none;
    }
  }

  .loading-text {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export const ButtonSpinner = styled.div`
  width: 20px;
  height: 20px;

  .spinner-circle {
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid #fff;
    border-radius: 50%;
    animation: ${buttonSpinAnimation} 0.8s linear infinite;
  }
`;
