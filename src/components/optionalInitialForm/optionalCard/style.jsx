import styled from "styled-components";
import { palette } from "../../../constant/colors";

// Definindo as opções de cores usando a paleta do projeto
const colorOptions = {
  blue: {
    primary: palette[600], // #4A90E2
    secondary: palette[700], // #2290F6
    background: palette[50], // #eaf0fb
    light: palette[10], // #eff7ff
  },
  green: {
    primary: palette.patient_color.mild_details, // #219653
    secondary: "#27AE60",
    background: palette.patient_color.mild, // #e6f9ee
    light: "#F0FFF4",
  },
  orange: {
    primary: palette.patient_color.serious_details, // #f57c00
    secondary: "#FF9800",
    background: palette.patient_color.serious, // #fff4e3
    light: "#FFFAF0",
  },
  red: {
    primary: palette.patient_color.critical_details, // #b71c1c
    secondary: "#C0392B",
    background: palette.patient_color.critical, // #fdeaea
    light: "#FFF5F5",
  },
  purple: {
    primary: palette[900], // #2C63DD
    secondary: palette[800], // #235CDA
    background: palette[5], // #fdf5fb
    light: "#FAF0FF",
  },
};

export const CardContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none;
  color: inherit;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  max-width: 320px;
  min-height: 280px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${(props) => colorOptions[props.color]?.light || colorOptions.blue.light}
        0%,
      ${(props) =>
          colorOptions[props.color]?.background || colorOptions.blue.background}
        100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: ${(props) =>
      colorOptions[props.color]?.primary || colorOptions.blue.primary};

    &::before {
      opacity: 0.6;
    }
  }

  &:active {
    transform: translateY(-4px);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${(props) =>
    colorOptions[props.color]?.primary || colorOptions.blue.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

  ${CardContainer}:hover & {
    transform: scale(1.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      135deg,
      ${(props) =>
        colorOptions[props.color]?.primary || colorOptions.blue.primary},
      ${(props) =>
        colorOptions[props.color]?.secondary || colorOptions.blue.secondary}
    );
  }
`;

export const Icon = styled.span`
  font-size: 28px;
  color: white;
  font-weight: 400;
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${palette[800]};
  margin: 0 0 12px 0;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: ${(props) =>
      colorOptions[props.color]?.primary || colorOptions.blue.primary};
  }
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: ${palette[1000]};
  margin: 0 0 28px 0;
  line-height: 1.5;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const ActionButton = styled.button`
  background: ${(props) =>
    colorOptions[props.color]?.primary || colorOptions.blue.primary};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${(props) =>
      colorOptions[props.color]?.secondary || colorOptions.blue.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
