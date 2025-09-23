import styled from "styled-components";
import { palette } from "@/constant/colors";

export const TriageFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${palette[50]};

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 32px auto 48px; /* Espaçamento confortável: 32px topo, 48px base */
    width: 90%;
    max-width: 1200px;
    text-align: center;
    color: #000;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto 50px auto;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
`;
