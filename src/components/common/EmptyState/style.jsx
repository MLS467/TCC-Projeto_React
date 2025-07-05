import { palette } from "@/constant/colors";
import styled from "styled-components";

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  background: #fdfdfd;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  margin: 40px 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${palette[600]}, ${palette[500]});
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
  }
`;

export const EmptyStateIcon = styled.div`
  width: 64px;
  height: 64px;
  color: ${palette[600]};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${palette[600]}15, ${palette[600]}25);
  border-radius: 50%;
  padding: 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const EmptyStateTitle = styled.h3`
  color: #1e293b;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.2;
`;

export const EmptyStateDescription = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  max-width: 400px;
`;
