import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const ScreenContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: ${palette[50]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
  gap: 40px;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-top: 60px;
  max-width: 600px;
  padding: 0 20px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: ${palette[600]};
  margin: 0 0 16px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${palette[1000]};
  margin: 0;
  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const SecurityNote = styled.p`
  font-size: 14px;
  color: ${palette[1000]};
  text-align: center;
  opacity: 0.6;
  margin: 0;
  font-style: italic;

  &::before {
    content: "🔒";
    margin-right: 8px;
  }
`;
