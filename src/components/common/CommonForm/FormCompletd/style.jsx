import { palette } from "@/constant/colors";
import styled from "styled-components";

export const FormContentStyle = styled.section`
  width: 70%;
  height: auto;
  margin: 0 auto 5% auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 20px;
`;

export const FormStyle = styled.form`
  box-shadow: ${palette.shadow.boxDefault};
  display: flex;
  width: 100%;
  border-radius: 20px;
  height: 100%;
  flex-direction: column;
  background-color: #fff;
  gap: 20px;
  margin: 0 auto 5% auto;
`;
