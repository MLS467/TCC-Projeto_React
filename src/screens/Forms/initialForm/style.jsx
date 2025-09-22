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

export const HeaderContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto 50px auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const RequiredFieldsNotice = styled.div`
  font-size: 11px;
  color: #f00;
  margin-bottom: 10px;
  width: 100%;
  border-radius: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: #fff;
  gap: 4px;
  padding: 10px;
`;

export const RequiredFieldsText = styled.span`
  background: #fff;
  padding: 10px;
  width: 100%;
  border-radius: inherit;
  text-align: center;
  font-size: 10px;
`;
