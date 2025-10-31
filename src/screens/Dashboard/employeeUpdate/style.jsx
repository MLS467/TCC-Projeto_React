import { palette } from "@/constant/colors";
import styled from "styled-components";

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${palette[50]};
  padding: 24px;
  margin: 0;
`;

export const UpdateHeader = styled.div`
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[800]} 100%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const HeaderInfo = styled.div`
  color: white;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: white;
`;

export const HeaderSubtitle = styled.p`
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
  color: white;
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
