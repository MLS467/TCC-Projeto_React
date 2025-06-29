import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const checkAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.6);
  }
`;

// Styled Components
export const SuccessWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const SuccessCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.6s ease-out;
  border: 1px solid rgba(34, 197, 94, 0.1);

  @media (max-width: 768px) {
    padding: 32px 24px;
    margin: 16px;
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 32px;
`;

export const CheckIcon = styled.div`
  color: #22c55e;
  animation: ${checkAnimation} 0.8s ease-out 0.2s both,
    ${pulseGlow} 2s ease-in-out infinite 1s;
  display: inline-block;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 16px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #6b7280;
  margin: 0 0 24px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 32px 0;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoSection = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  margin: 32px 0;
  border: 1px solid #e2e8f0;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #e2e8f0;
  }
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.success ? "#22c55e" : "#1f2937")};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SecondaryButton = styled.button`
  background: white;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #d1d5db;
    color: #374151;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
