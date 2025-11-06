import styled, { keyframes } from "styled-components";
import { palette } from "@/constant/colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 20% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeInOut = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  width: 100%;
  background: ${palette[50]};
  padding: 40px;
`;

export const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Spinner = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid ${palette[600]};
    border-right: 3px solid ${palette[500]};
    border-radius: 50%;
    animation: ${spin} 1.2s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    border: 2px solid transparent;
    border-top: 2px solid ${palette[400]};
    border-right: 2px solid ${palette[300]};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite reverse;
  }
`;

export const SpinnerCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[700]} 100%);
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(34, 144, 246, 0.3);
`;

export const LoadingText = styled.div`
  color: ${palette[700]};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  animation: ${fadeInOut} 2s ease-in-out infinite;
  letter-spacing: 0.5px;
`;

export const LoadingSubtext = styled.div`
  color: ${palette[500]};
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;
  opacity: 0.8;
`;
