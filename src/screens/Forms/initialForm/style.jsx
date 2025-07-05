import styled from "styled-components";
import { palette } from "@/constant/colors";

export const InitialFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${palette[50]};

  .content-wrapper {
    display: flex;
    width: 90%;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 32px auto 48px; /* Espaçamento confortável: 32px topo, 48px base */
    text-align: center;
    color: #000;
  }
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
`;
