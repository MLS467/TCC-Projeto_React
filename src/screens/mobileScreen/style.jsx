import styled from "styled-components";
import { palette } from "@/constant/colors";

export const MobileScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: #ffffff;
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
      rgba(89, 153, 232, 0.03) 0%,
      rgba(89, 153, 232, 0.01) 40%,
      transparent 70%
    );
    animation: gentle-pulse 8s ease-in-out infinite alternate;
  }

  @keyframes gentle-pulse {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.1) rotate(5deg);
      opacity: 0.5;
    }
  }
`;

// Alias para compatibilidade
export const MobileContainer = MobileScreenContainer;

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

// Alias para compatibilidade
export const ContentContainer = ContentWrapper;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 40px;
  background: transparent;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
`;

export const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${palette[600]};
  letter-spacing: -0.02em;
  text-shadow: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${palette[800]};
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
  color: ${palette[700]};
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

export const Icon = styled.div`
  font-size: 64px;
  margin: 30px 0;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;
