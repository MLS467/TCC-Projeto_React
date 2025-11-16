import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const ScreenContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${palette[600]};
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  z-index: 15;

  &:hover {
    color: ${palette[700]};
  }
`;

export const BackIcon = styled.span`
  font-size: 20px;
`;

export const BackText = styled.span`
  font-size: 16px;
`;

export const CardContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 20px;
  }
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${palette[700]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${palette[700]};
  margin: 0 0 8px 0;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${palette[1000]};
  margin: 0 0 32px 0;
  line-height: 1.5;
  opacity: 0.8;
`;

export const FormSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${palette[800]};
  margin-bottom: 8px;
  text-align: left;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid ${palette[100]};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  background: ${palette[10]};

  &:focus {
    outline: none;
    border-color: ${palette[700]};
    box-shadow: 0 0 0 3px rgba(181, 159, 0, 0.1);
    background: white;
  }

  &::placeholder {
    color: ${palette[1000]};
    opacity: 0.5;
    letter-spacing: 2px;
  }
`;

export const InputHint = styled.p`
  font-size: 12px;
  color: ${palette[1000]};
  margin: 8px 0 0 0;
  text-align: center;
  opacity: 0.7;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${palette[700]};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;

  &:hover:not(:disabled) {
    background: ${palette[700]};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(181, 159, 0, 0.3);
  }

  &:disabled {
    background: ${palette[1000]};
    cursor: not-allowed;
    opacity: 0.5;
    transform: none;
  }
`;

export const ButtonIcon = styled.span`
  font-size: 20px;
`;

export const TestSection = styled.div`
  background: ${palette.patient_color.moderate};
  border-radius: 12px;
  padding: 16px;
  width: 100%;
`;

export const TestText = styled.p`
  font-size: 13px;
  color: ${palette[700]};
  margin: 0;
  line-height: 1.4;
`;