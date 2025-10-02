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
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2290f6 0%, #4a90e2 100%);
    color: white;
    border: none;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(34, 144, 246, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.2;
    padding: 8px;
    position: relative;

    &::before {
      content: attr(title);
      position: absolute;
      right: 70px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1001;
    }

    &:hover::before {
      opacity: 1;
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
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2px;
    padding: 8px;
    position: relative;

    &::before {
      content: attr(title);
      position: absolute;
      right: 70px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1001;
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
      transform: scale(1.05);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
      box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
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
