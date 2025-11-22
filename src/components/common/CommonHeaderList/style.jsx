import styled from "styled-components";
import { palette } from "@/constant/colors";

export const CommonHeaderListWrapper = styled.div`
  position: relative;
  width: 100%;
  background: transparent;
  padding: 100px 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 250px;
  }
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #fdf5fb 0%, #eff7ff 50%, #eaf0fb 100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(74, 144, 226, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(185, 214, 247, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 80%,
        rgba(126, 209, 255, 0.08) 0%,
        transparent 50%
      );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${palette[100]} 20%,
      ${palette[200]} 50%,
      ${palette[100]} 80%,
      transparent 100%
    );
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 8px;
  }
`;

export const DecorationLine = styled.div`
  width: 2px;
  height: 40px;
  background: linear-gradient(
    180deg,
    ${palette[600]} 0%,
    ${palette[200]} 50%,
    ${palette[100]} 100%
  );
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(74, 144, 226, 0.3);

  @media (max-width: 768px) {
    height: 35px;
  }
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(234, 240, 251, 0.8) 50%,
    rgba(185, 214, 247, 0.6) 100%
  );
  border: 2px solid rgba(185, 214, 247, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(74, 144, 226, 0.12),
    0 2px 8px rgba(74, 144, 226, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 21px;
    background: linear-gradient(
      135deg,
      rgba(74, 144, 226, 0.2) 0%,
      rgba(185, 214, 247, 0.1) 100%
    );
    z-index: -1;
  }

  .icon {
    font-size: 1.8rem;
    color: ${(props) => props.iconColor};
    line-height: 1;
    vertical-align: middle;
    filter: drop-shadow(0 2px 4px rgba(74, 144, 226, 0.2));
  }

  .material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 1.8rem;
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
    width: 56px;
    height: 56px;
    border-radius: 16px;

    &::before {
      border-radius: 17px;
    }

    .icon,
    .material-icons {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    border-radius: 14px;

    &::before {
      border-radius: 15px;
    }

    .icon,
    .material-icons {
      font-size: 1.3rem;
    }
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;

  .brand-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${palette[600]};
    letter-spacing: -0.02em;
  }

  @media (max-width: 768px) {
    .brand-name {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;

    .brand-name {
      font-size: 1.4rem;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  h1 {
    font-size: 42px;
    font-weight: 700;
    color: ${palette[600]};
    margin: 0 0 16px 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .description {
    color: #333;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
  }

  @media (max-width: 768px) {
    gap: 8px;

    h1 {
      font-size: 1.8rem;
    }

    .description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    gap: 6px;

    h1 {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.9rem;
    }
  }
`;

export const RequiredFieldsNotice = styled.div`
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 8px;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: rgba(220, 38, 38, 0.05);
  border: 1px solid rgba(220, 38, 38, 0.1);

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }
`;
