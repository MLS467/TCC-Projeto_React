import styled, { keyframes } from "styled-components";
import { palette } from "@/constant/colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  width: 100%;
  background: ${palette[50]};
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${palette[200]};
  border-top: 5px solid ${palette[600]};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.span`
  margin-left: 18px;
  color: ${palette[700]};
  font-size: 1.1rem;
  font-weight: 500;
`;
