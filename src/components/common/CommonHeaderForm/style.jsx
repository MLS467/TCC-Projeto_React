import styled from "styled-components";

export const CommonHeaderWrapper = styled.div`
  padding-top: 60px; /* Espaçamento confortável do navbar */
  background: linear-gradient(135deg, #fdf5fb 0%, #eff7ff 100%);
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 120px;
    padding-bottom: 30px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #eaf0fb 0%, #b9d6f7 100%);
  border: 1px solid #b9d6f7;

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
  flex-direction: column;
  gap: 4px;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    line-height: 1.2;
  }

  span {
    color: #666;
    font-size: 0.9rem;
    font-weight: 400;
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
