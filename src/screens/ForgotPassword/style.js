import { palette } from "@/constant/colors";
import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette[50]};
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ForgotPasswordCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 0;
  width: 100%;
  max-width: 420px;
  max-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px;
    max-width: none;
    max-height: 95vh;
  }
`;

export const Header = styled.div`
  background: ${palette[600]};
  color: white;
  text-align: center;
  padding: 20px 30px;
  flex-shrink: 0;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 4px 0;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 14px;
    margin: 0;
    opacity: 0.9;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 18px 20px;

    h1 {
      font-size: 22px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const FormSection = styled.div`
  padding: 20px 30px 16px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .icon-container {
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 14px;

    svg {
      color: #1976d2;
      width: 22px;
      height: 22px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0 0 4px 0;
  }

  .description {
    font-size: 14px;
    color: #666;
    margin: 0 0 18px 0;
    line-height: 1.4;
  }

  form {
    margin-bottom: 14px;
  }

  @media (max-width: 768px) {
    padding: 18px 20px 14px;

    .icon-container {
      width: 48px;
      height: 48px;
      margin: 0 auto 10px;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    h2 {
      font-size: 18px;
    }

    .description {
      font-size: 13px;
      margin: 0 0 16px 0;
    }
  }
`;

export const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 14px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #555;
    margin-bottom: 5px;

    svg {
      color: #1976d2;
      width: 16px;
      height: 16px;
    }
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1976d2;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const RecoverButton = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #4285f4 0%, #1976d2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #3367d6 0%, #1565c0 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(66, 133, 244, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SecurityNotice = styled.div`
  background: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 6px;
  padding: 10px;
  font-size: 12px;
  color: #1565c0;
  text-align: left;

  strong {
    font-weight: 600;
  }
`;

export const BackToSystemLink = styled.button`
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  border: none;
  border-top: 1px solid #f0f0f0;
  color: #666;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #f9f9f9;
    color: #333;
  }

  svg {
    font-size: 12px;
  }
`;
