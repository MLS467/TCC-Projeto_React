import styled from "styled-components";
import { palette } from "../../constant/colors";

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.sidebarOpen ? "280px" : "70px")};
  transition: margin-left 0.3s ease;
  min-height: 100vh;

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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  border: 1px solid ${palette[200]};
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
