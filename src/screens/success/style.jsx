import styled, { keyframes } from "styled-components";
import { palette } from "../../constant/colors";

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
    box-shadow: 0 0 20px rgba(33, 150, 83, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(33, 150, 83, 0.6);
  }
`;

// Styled Components
export const SuccessWrapper = styled.div`
  min-height: 100vh;
  background: ${palette[50]};
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(89, 153, 232, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(74, 144, 226, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

export const SuccessCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 56px 48px;
  max-width: 650px;
  width: 100%;
  text-align: center;
  box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4);
  animation: ${fadeIn} 0.8s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${palette[600]},
      ${palette[700]},
      ${palette[800]}
    );
    border-radius: 32px 32px 0 0;
  }

  @media (max-width: 768px) {
    padding: 40px 28px;
    margin: 16px;
    border-radius: 24px;
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

export const CheckIcon = styled.div`
  color: ${palette.patient_color.mild_details};
  animation: ${checkAnimation} 1s ease-out 0.3s both,
    ${pulseGlow} 3s ease-in-out infinite 1.5s;
  display: inline-block;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${palette.patient_color.mild} 0%,
      rgba(33, 150, 83, 0.05) 100%
    );
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, ${palette[900]} 0%, ${palette[800]} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 20px 0;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${palette[1000]};
  margin: 0 0 32px 0;
  line-height: 1.4;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  color: ${palette[1000]};
  line-height: 1.7;
  margin: 0 0 36px 0;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: 0.01em;
`;

export const InfoSection = styled.div`
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  border-radius: 20px;
  padding: 32px 28px;
  margin: 36px 0;
  border: 1px solid rgba(185, 214, 247, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 4px 6px -1px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  transition: all 0.3s ease;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(185, 214, 247, 0.3);
  }

  &:hover {
    transform: translateX(4px);
    padding-left: 8px;
  }
`;

export const InfoLabel = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${palette[900]};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InfoValue = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) =>
    props.success ? palette.patient_color.mild_details : palette[900]};
  text-align: right;

  ${(props) =>
    props.success &&
    `
    padding: 4px 12px;
    background: ${palette.patient_color.mild};
    border-radius: 20px;
    border: 1px solid ${palette.patient_color.mild_details}40;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[700]} 100%);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 18px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px -4px rgba(74, 144, 226, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px -4px rgba(74, 144, 226, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    background: linear-gradient(
      135deg,
      ${palette[700]} 0%,
      ${palette[800]} 100%
    );

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
  }
`;
