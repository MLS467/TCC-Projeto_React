import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const StatsCardWrapper = styled.div`
  background: ${palette[700]};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 120px;
  box-shadow: 0 4px 12px rgba(34, 144, 246, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(34, 144, 246, 0.2);
  }
`;

export const StatsNumber = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 8px 0;
  line-height: 1;
`;

export const StatsLabel = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
`;

export const StatsChange = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;

  svg {
    color: white;
  }
`;
