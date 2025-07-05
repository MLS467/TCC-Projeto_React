import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: #f8fafc;
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
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  color: #000;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 1px solid #e2e8f0;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4a90e2 0%, #2290f6 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3);

  svg {
    filter: brightness(0) invert(1);
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.2;
`;

export const SubtitleText = styled.span`
  font-size: 16px;
  color: #64748b;
  font-weight: 500;
`;
