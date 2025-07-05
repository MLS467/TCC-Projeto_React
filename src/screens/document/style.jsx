import styled from "styled-components";

/*
  Estilos para a tela de documentos
  - Inclui regras @media print para ocultar elementos durante a impressão
  - FixedHeader e ButtonsContainer são ocultados com display: none
  - DocumentWrapper tem margens zeradas para impressão
*/

export const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 100px; /* Espaço para os botões flutuantes */
  margin-top: 50px; /* Espaço para o FixedHeader */

  /* Para PDF, ajustar margens */
  #conteudo-pdf & {
    margin-top: 0;
    padding-bottom: 20px;
  }

  @media print {
    margin-top: 0;
    padding-bottom: 0;
  }
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

  @media print {
    display: none;
  }
`;

export const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media print {
    display: none;
  }
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
