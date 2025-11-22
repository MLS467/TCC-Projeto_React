import { palette } from "@/constant/colors";
import styled from "styled-components";

export const CommonHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  padding: 30px 0;
  width: 100%;
  border-radius: 20px 20px 0 0;
  gap: 16px;

  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 30px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const IconSection = styled.div`
  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.iconColor};
    line-height: 1;
    vertical-align: middle;
  }

  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga";
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;

    .icon,
    .material-icons {
      font-size: 1.2rem;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: ${palette[600]};
    margin: 0 0 16px 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  span {
    color: #666;
    font-size: 1.2rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.3rem;
    }

    span {
      font-size: 0.85rem;
    }
  }
`;

export const RequiredFieldsNotice = styled.div`
  font-size: 11px;
  color: #f00;
  margin-bottom: 10px;
  width: 100%;
  border-radius: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: transparent;
  gap: 4px;
  padding: 10px;
`;

export const RequiredFieldsText = styled.span`
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;

  div {
    width: 30%;
    padding: 10px;
    border-radius: 50px;
    background: #f693937b;
  }
`;
