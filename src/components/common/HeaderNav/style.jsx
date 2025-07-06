import styled from "styled-components";
import { palette } from "@/constant/colors";

export const HeaderNavWrapper = styled.header`
  width: 100%;
  background: linear-gradient(135deg, ${palette[600]} 0%, ${palette[800]} 100%);
  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.12),
    0 2px 8px rgba(74, 144, 226, 0.08);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 0.3s ease;
  margin: 0;
  padding: 0;

  &:hover {
    box-shadow: 0 6px 20px rgba(74, 144, 226, 0.18),
      0 4px 12px rgba(74, 144, 226, 0.12);
  }
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
  display: flex;
  align-items: center;

  /* Adicionar um efeito sutil no logo */
  & > * {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: filter 0.3s ease;
  }

  &:hover > * {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
  display: flex;
  align-items: center;

  /* Manter o estilo original dos botões */
  button {
    background: #f5f8fc;
    border: 1px solid #e3e8ee;
    border-radius: 5px;
    padding: 4px 18px;
    font-size: 15px;
    color: #374151;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(44, 62, 80, 0.04);
    transition: background 0.18s, border 0.18s;

    &:hover {
      background: #f0f3f7;
      border-color: #dbeafe;
    }

    &:active {
      transform: translateY(0);
    }
  }
`;
