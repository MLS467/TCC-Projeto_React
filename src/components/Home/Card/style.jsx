import styled from "styled-components";
import { palette } from "@/constant/colors";

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  padding: 30px;
  width: 350px;
`;

export const IconContainer = styled.div`
  background-color: #e8f0fe;
  padding: 12px;
  border-radius: 12px;
  color: ${palette[800]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${palette[700]};
    color: ${palette[50]};
  }
`;

export const Content = styled.div`
  margin-left: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #1a1a1a;
`;

export const Description = styled.p`
  margin: 15px 0 0 0;
  color: #5f6368;
  font-size: 16px;
`;
