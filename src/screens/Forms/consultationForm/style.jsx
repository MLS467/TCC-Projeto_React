import styled from "styled-components";
import { palette } from "@/constant/colors";

export const ConsultationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${palette[50]};

  .title-section {
    text-align: left;
    color: #000;

    h1 {
      margin: 0 0 8px 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: #333;
    }

    span {
      color: #666;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .title-section {
      text-align: left;

      h1 {
        font-size: 1.5rem;
      }

      span {
        font-size: 0.9rem;
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  padding-left: 2%;
`;

export const AuthButtonWrapper = styled.div`
  padding-right: 2%;
`;

export const ViewDataButtonWrapper = styled.div`
  position: fixed;
  top: calc(50% + 20px);
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;

  button {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    border: none;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.2;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 32px rgba(37, 99, 235, 0.5);
    }

    &:active {
      transform: translateY(-1px) scale(1.02);
    }

    &::after {
      content: attr(title);
      position: absolute;
      right: 75px;
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      color: white;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1001;

      /* Seta do tooltip */
      &::before {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-left-color: #1f2937;
        z-index: 1002;
      }
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(-50%) translateX(-8px);
    }

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #235cda 0%, #2290f6 100%);
      box-shadow: 0 6px 20px rgba(34, 144, 246, 0.4);
      transform: scale(1.05);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
      box-shadow: 0 4px 16px rgba(34, 144, 246, 0.3);
    }

    &:disabled {
      background: #8d949d;
      color: white;
      cursor: not-allowed;
      opacity: 0.6;
      transform: none;
      box-shadow: 0 2px 8px rgba(141, 148, 157, 0.3);
    }
  }

  @media (max-width: 768px) {
    top: calc(50% + 15px);
    right: 15px;

    button {
      width: 50px;
      height: 50px;
      font-size: 0.7rem;

      &::before {
        right: 60px;
        font-size: 0.7rem;
        padding: 6px 10px;
      }
    }
  }
`;

export const HistoryButtonWrapper = styled.div`
  position: fixed;
  top: calc(50% - 80px);
  right: 20px;
  transform: translateY(-50%);
  z-index: 1000;

  button {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    padding: 8px;
    position: relative;
    backdrop-filter: blur(10px);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 32px rgba(16, 185, 129, 0.5);
    }

    &:active {
      transform: translateY(-1px) scale(1.02);
    }

    &::after {
      content: attr(title);
      position: absolute;
      right: 75px;
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      color: white;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1001;

      /* Seta do tooltip */
      &::before {
        content: "";
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-left-color: #1f2937;
        z-index: 1002;
      }
    }

    &:hover::after {
      opacity: 1;
      transform: translateY(-50%) translateX(-8px);
    }

    &:disabled {
      background: #9ca3af;
      color: white;
      cursor: not-allowed;
      opacity: 0.6;
      transform: none;
      box-shadow: 0 2px 8px rgba(156, 163, 175, 0.3);
    }
  }

  @media (max-width: 768px) {
    top: calc(50% - 65px);
    right: 15px;

    button {
      width: 50px;
      height: 50px;
      font-size: 0.7rem;
      gap: 1px;

      &::before {
        right: 60px;
        font-size: 0.7rem;
        padding: 6px 10px;
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto 50px auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: ${palette.shadow.boxDefault};
`;
