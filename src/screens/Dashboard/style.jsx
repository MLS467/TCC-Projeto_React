import styled from "styled-components";
import { palette } from "@/constant/colors";

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: ${palette[50]};
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.sidebarOpen ? "280px" : "70px")};
  transition: margin-left 0.3s ease;
  min-height: 100vh;
  padding: 40px 0;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const DashboardHeader = styled.header`
  width: 100%;
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[800]} 100%);
  padding: 32px 40px;

  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(34, 144, 246, 0.15);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const HeaderMainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  justify-content: center;
  height: 40px;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const MobileMenuButton = styled.button`
  background: ${(props) =>
    props.isOpen ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)"};
  border: none;
  color: white;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: ${(props) => (props.isOpen ? "scale(1.05)" : "scale(1)")};

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (min-width: 769px) {
    display: flex;
  }
`;

export const MobileOverlay = styled.div`
  display: none;

  border: 2px solid red;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export const HeaderIcon = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }

  img {
    border-radius: 8px;
  }
`;

export const HeaderText = styled.div``;

export const HeaderTitle = styled.h1`
  color: white;
  margin: 0 0 8px 0;
  font-size: 2rem;
  font-weight: 700;
`;

export const HeaderSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: center;
  font-size: 1.1rem;
`;

export const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 40px;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[700]} 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 20px;
  box-shadow: 0 4px 12px rgba(89, 153, 232, 0.25),
    0 2px 6px rgba(89, 153, 232, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      ${palette[500]} 0%,
      ${palette[600]} 100%
    );
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(89, 153, 232, 0.3),
      0 3px 8px rgba(89, 153, 232, 0.2);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProfessionalsSection = styled.div`
  background: ${palette[50]};
  border-radius: 16px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  svg {
    color: ${palette[600]};
  }
`;

export const SectionTitle = styled.h2`
  color: ${palette[800]};
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const ProfessionalsList = styled.div`
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${palette[100]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${palette[400]};
    border-radius: 3px;
  }
`;

export const DashboardWelcome = styled.div`
  background: linear-gradient(45deg, #0066ff, #3399ff);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: 0 8px 32px rgba(89, 153, 232, 0.15),
    0 4px 16px rgba(89, 153, 232, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }
`;

export const WelcomeContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const WelcomeTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const WelcomeSubtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DateIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

export const DateText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin: 0;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
