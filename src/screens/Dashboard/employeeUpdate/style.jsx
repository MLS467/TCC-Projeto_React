import { palette } from "@/constant/colors";
import styled from "styled-components";

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${palette[50]};
  padding: 0;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
