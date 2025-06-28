import styled from "styled-components";
import { palette } from "../../../constant/colors";

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 50px auto;
  min-height: 400px;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0;
  justify-content: center;
  align-items: stretch;
  background: #fff;
`;

// No style.jsx
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  border: none;
  width: 33.3%;
  min-width: 320px;
  padding: 32px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const IconCircle = styled.div`
  background: #eaf2fe;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${palette[900]};
    span {
      color: #fff !important;
    }
  }
`;

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin: 24px 0 12px 0;
  color: #222;
`;

export const CardText = styled.p`
  color: #4a5568;
  font-size: 18px;
  margin: 0;
  max-width: 380px;
`;
