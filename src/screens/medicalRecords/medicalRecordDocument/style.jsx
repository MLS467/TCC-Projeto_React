import styled from "styled-components";
import { palette } from "@/constant/colors";

export const MedicalRecordDocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding-bottom: 100px;
  background: ${palette[50]};
  min-height: 100vh;
  padding: 20px;

  @media print {
    margin-top: 0;
    padding-bottom: 0;
    background: white;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 30px auto;
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

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${palette[50]};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${palette[50]};
  gap: 16px;

  h2 {
    color: ${palette[800]};
    font-size: 24px;
    margin: 0;
  }

  p {
    color: ${palette[600]};
    font-size: 16px;
    margin: 0;
  }
`;
