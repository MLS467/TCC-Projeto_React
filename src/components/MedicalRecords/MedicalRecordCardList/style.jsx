import styled from "styled-components";
import { palette } from "../../../constant/colors";

export const ListContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ListHeader = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

export const ListTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${palette[800]};
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, ${palette[600]}, ${palette[800]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ListSubtitle = styled.p`
  font-size: 16px;
  color: ${palette[1000]};
  margin: 0;
  font-weight: 400;
  opacity: 0.8;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background: ${palette[10]};
  border-radius: 16px;
  border: 2px dashed ${palette[200]};
`;

export const EmptyStateIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
`;

export const EmptyStateText = styled.p`
  font-size: 18px;
  color: ${palette[1000]};
  margin: 0;
  font-weight: 500;
  opacity: 0.7;
`;
