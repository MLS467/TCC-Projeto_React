import styled from "styled-components";
import { palette } from "../../../constant/colors";

export const CardContainer = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid ${palette[50]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border-color: ${palette[400]};
  }

  &:focus {
    outline: none;
    border-color: ${palette[600]};
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardIcon = styled.div`
  font-size: 24px;
  background: linear-gradient(135deg, ${palette[400]}, ${palette[600]});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

export const RecordId = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${palette[600]};
  background: ${palette[50]};
  padding: 4px 12px;
  border-radius: 12px;
  letter-spacing: 0.5px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PatientName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${palette[800]};
  margin: 0;
  line-height: 1.3;
`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RecordDate = styled.span`
  font-size: 14px;
  color: ${palette[1000]};
  font-weight: 500;
  display: inline-block;
  min-height: 20px;

  &::before {
    content: "📅";
    margin-right: 6px;
  }
`;
