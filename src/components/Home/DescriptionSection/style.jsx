import { palette } from "@/constant/colors";
import styled from "styled-components";

export const SectionWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: ${palette[50]};
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;
