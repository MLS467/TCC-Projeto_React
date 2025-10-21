import styled from "styled-components";
import { palette } from "@/constant/colors";

export const ResetPasswordContainer = styled.div`
  min-height: 100vh;
  background: ${palette[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const ResetPasswordCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: ${palette.shadow.boxDefault};
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, ${palette[700]}, ${palette[600]});
  }

  @media (max-width: 768px) {
    margin: 10px;
    max-width: none;
  }
`;

export const Header = styled.div`
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[600]} 100%);
  color: white;
  padding: 2rem;
  text-align: center;

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.9;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h1 {
      font-size: 1.75rem;
    }
  }
`;

export const FormSection = styled.div`
  padding: 2.5rem 2rem;

  .icon-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${palette[700]};
  }

  h2 {
    text-align: center;
    color: ${palette[800]};
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .description {
    text-align: center;
    color: ${palette[1000]};
    margin: 0 0 2rem 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: ${palette[800]};
    font-weight: 500;
    font-size: 0.9rem;

    svg {
      color: ${palette[700]};
    }
  }

  .password-input-container {
    position: relative;
    display: flex;
    align-items: center;

    .toggle-password {
      position: absolute;
      right: 12px;
      background: none;
      border: none;
      color: ${palette[1000]};
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;

      &:hover {
        color: ${palette[700]};
        background: ${palette[100]};
      }
    }
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  color: ${palette[800]};

  &:focus {
    outline: none;
    border-color: ${palette[700]};
    box-shadow: 0 0 0 3px rgba(34, 144, 246, 0.1);
  }

  &::placeholder {
    color: ${palette[1000]};
    font-style: italic;
  }

  &:disabled {
    background: #f8fafc;
    cursor: not-allowed;
  }
`;

export const PasswordStrength = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StrengthBar = styled.div`
  flex: 1;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.strength}%;
    background: ${(props) => props.color};
    transition: all 0.3s ease;
    border-radius: 2px;
  }
`;

export const StrengthText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.color};
  min-width: 80px;
  text-align: right;
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[600]} 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1.5rem 0 1rem 0;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 144, 246, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${palette[1000]};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SecurityNotice = styled.div`
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  border: 1px solid ${palette[200]};
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  font-size: 0.85rem;
  color: ${palette[800]};

  strong {
    color: ${palette[700]};
    display: block;
    margin-bottom: 0.5rem;
  }

  ul {
    margin: 0;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.25rem;
      color: ${palette[1000]};
    }
  }
`;

export const BackToSystemLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  background: none;
  border: none;
  color: ${palette[700]};
  font-size: 0.9rem;
  font-weight: 500;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-top: 1px solid #e2e8f0;

  &:hover {
    background: ${palette[50]};
    color: ${palette[800]};
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(-2px);
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  margin: 2rem 0;

  h2 {
    color: #16a34a;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${palette[1000]};
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

export const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #f87171;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "⚠️";
    font-size: 1rem;
  }
`;
