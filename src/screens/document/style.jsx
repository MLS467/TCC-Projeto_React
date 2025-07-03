import styled from "styled-components";

export const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 100px; /* Espaço para os botões flutuantes */
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonsContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
