import styled from "styled-components";
import { palette } from "@/constant/colors";

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${(props) => (props.isOpen ? "280px" : "70px")};
  background: linear-gradient(180deg, ${palette[700]} 0%, ${palette[800]} 100%);
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 4px 0 20px rgba(34, 144, 246, 0.15);
  overflow: hidden;

  @media (max-width: 768px) {
    width: 280px;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  }
`;

export const SidebarHeader = styled.div`
  padding: 29px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;

  svg {
    color: white;
    flex-shrink: 0;
  }

  img {
    flex-shrink: 0;
    border-radius: 4px;
  }

  span {
    white-space: nowrap;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s ease;
  }
`;

export const ToggleButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const MenuSection = styled.div`
  padding: 8px 0;
`;

export const MenuCategory = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 16px 20px 8px;
  margin-bottom: 4px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: ${(props) => (props.isActive ? "white" : "rgba(255, 255, 255, 0.8)")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  margin: 2px 12px;
  border-radius: 8px;
  justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
  background: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.15)" : "transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(4px);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }

  ${(props) =>
    props.isActive &&
    `
    &::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: white;
      border-radius: 2px;
    }
  `}
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    transition: transform 0.2s ease;
  }

  ${MenuItem}:hover & svg {
    transform: scale(1.1);
  }
`;

export const MenuText = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
`;
