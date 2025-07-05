import styled from "styled-components";
import { palette } from "@/constant/colors";

export const ConsultationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${palette[50]};

  .content-wrapper {
    margin: 32px auto 48px; /* Espaçamento confortável: 32px topo, 48px base */
    width: 90%;
    max-width: 1200px;
  }

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }

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
  display: flex;
  align-items: center;
  flex-shrink: 0;

  button {
    white-space: nowrap;
    background: linear-gradient(135deg, #2290f6 0%, #4a90e2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(34, 144, 246, 0.25);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #235cda 0%, #2290f6 100%);
      box-shadow: 0 4px 12px rgba(34, 144, 246, 0.35);
      transform: translateY(-2px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(34, 144, 246, 0.25);
    }

    &:disabled {
      background: #8d949d;
      color: white;
      cursor: not-allowed;
      opacity: 0.6;
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    align-self: flex-end;

    button {
      padding: 8px 14px;
      font-size: 0.85rem;
    }
  }
`;
