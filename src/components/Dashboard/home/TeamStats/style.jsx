import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const TeamStatsWrapper = styled.div`
  background: linear-gradient(135deg, ${palette[50]} 0%, ${palette[100]} 100%);
  border-radius: 16px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const TeamStatsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  svg {
    color: ${palette[600]};
  }
`;

export const TeamStatsTitle = styled.h3`
  color: ${palette[800]};
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const TeamStatsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${palette[100]};

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TeamStatsLabel = styled.span`
  color: ${palette[1000]};
  font-size: 0.95rem;
`;

export const TeamStatsNumber = styled.span`
  color: ${palette[800]};
  font-weight: 600;
  font-size: 1.1rem;
`;

export const TeamStatsTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 0 0;
  margin-top: 12px;
  border-top: 2px solid ${palette[200]};

  ${TeamStatsLabel} {
    font-weight: 600;
    color: ${palette[800]};
  }

  ${TeamStatsNumber} {
    font-size: 1.4rem;
    color: ${palette[700]};
  }
`;
