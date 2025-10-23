import styled, { keyframes } from "styled-components";
import { palette } from "@/constant/colors";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: ${palette[50]};
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(74, 144, 226, 0.03) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(74, 144, 226, 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(74, 144, 226, 0.02) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: 0;
  }
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(74, 144, 226, 0.1);
  box-shadow: 0 4px 24px rgba(74, 144, 226, 0.08);
  transition: all 0.3s ease;
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
  animation: ${fadeInUp} 0.6s ease-out 0.1s both;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 48px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 1200px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding-top: 24px;
    padding-bottom: 32px;
  }
`;
