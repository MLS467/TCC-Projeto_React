import styled from "styled-components";
import { palette } from "@/constant/colors";

export const MobileScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: ${palette[50]};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(89, 153, 232, 0.08) 0%,
      rgba(89, 153, 232, 0.02) 40%,
      transparent 70%
    );
    animation: gentle-pulse 8s ease-in-out infinite alternate;
  }

  @keyframes gentle-pulse {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.1) rotate(5deg);
      opacity: 0.8;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[700]} 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(89, 153, 232, 0.15),
    0 8px 16px rgba(89, 153, 232, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 26px;
    padding: 2px;
    background: linear-gradient(135deg, ${palette[400]}, ${palette[800]});
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    opacity: 0.6;
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 25px 50px rgba(89, 153, 232, 0.2),
      0 12px 24px rgba(89, 153, 232, 0.15);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${palette[900]};
  margin-bottom: 8px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${palette[700]};
  margin-bottom: 16px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${palette[1000]};
  line-height: 1.6;
  margin-bottom: 8px;
  max-width: 320px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
  width: 100%;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(89, 153, 232, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: rgba(89, 153, 232, 0.2);
    transform: translateX(4px);
  }
`;

export const FeatureIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${palette[500]} 0%, ${palette[600]} 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  flex-shrink: 0;
`;

export const FeatureText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${palette[800]};
  line-height: 1.4;
`;

export const SystemName = styled.div`
  margin-top: 32px;
  padding: 16px 24px;
  background: linear-gradient(
    135deg,
    rgba(89, 153, 232, 0.1) 0%,
    rgba(89, 153, 232, 0.05) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(89, 153, 232, 0.15);
`;

export const SystemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${palette[700]};
  margin-bottom: 4px;
  letter-spacing: -0.01em;
`;

export const SystemSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${palette[600]};
  letter-spacing: 0.02em;
`;

export const FooterNote = styled.div`
  margin-top: 40px;
  padding: 16px;
  font-size: 12px;
  color: ${palette[1000]};
  opacity: 0.8;
  line-height: 1.5;
  text-align: center;
`;
