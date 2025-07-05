import styled from "styled-components";

export const CommonHeaderWrapper = styled.div`
  padding-top: 80px; /* Espaçamento para o navbar fixo */
  padding-bottom: 24px;
  background: linear-gradient(135deg, #fdf5fb 0%, #eff7ff 100%);
  border-bottom: 1px solid #eaf0fb;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 70px; /* Menos espaçamento em telas menores */
    padding-bottom: 20px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 0 4%;
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
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;

    .icon {
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
