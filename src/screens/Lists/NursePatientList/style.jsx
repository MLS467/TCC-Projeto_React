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
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 20px;
`;
