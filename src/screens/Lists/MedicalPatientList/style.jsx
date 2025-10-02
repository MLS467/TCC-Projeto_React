import styled from "styled-components";
import { palette } from "@/constant/colors";

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: ${palette[50]};
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: #fff;
`;

export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 48px;
`;

export const PriorityCardsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const PriorityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 33%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${(props) => props.borderColor};
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const PriorityIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const PriorityLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${palette[600]};
`;

export const PriorityCount = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
