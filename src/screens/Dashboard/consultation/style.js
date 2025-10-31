import styled from "styled-components";
import { palette } from "@/constant/colors";

export const ConsultationWrapper = styled.div`
  padding: 24px;
  background: ${palette[50]};
  min-height: 100vh;
`;

export const ConsultationHeader = styled.div`
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[800]} 100%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: ${palette.shadow.boxDefault};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const HeaderInfo = styled.div`
  color: white;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: white;
`;

export const HeaderSubtitle = styled.p`
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
  color: white;
`;

export const ConsultationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ConsultationCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${palette.shadow.boxDefault};
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(34, 144, 246, 0.15);
  }
`;

export const ConsultationCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
`;

export const ConsultationId = styled.div`
  background: linear-gradient(135deg, ${palette[100]} 0%, ${palette[200]} 100%);
  color: ${palette[800]};
  font-size: 14px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 8px;
  margin-right: auto;
`;

export const ConsultationDate = styled.div`
  color: ${palette[600]};
  font-size: 14px;
  font-weight: 500;
`;

export const PatientInfo = styled.div`
  background: linear-gradient(135deg, ${palette[5]} 0%, ${palette[10]} 100%);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid rgba(34, 144, 246, 0.1);
`;

export const PatientId = styled.div`
  color: ${palette[700]};
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
`;

export const ConsultationField = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FieldLabel = styled.div`
  color: ${palette[800]};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FieldValue = styled.div`
  color: ${palette[1000]};
  font-size: 14px;
  line-height: 1.5;
  padding: 8px 12px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  &.empty {
    color: ${palette[1000]};
    font-style: italic;
    opacity: 0.7;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  flex-direction: column;
  gap: 16px;
`;

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid ${palette[700]};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  color: ${palette[600]};
  font-size: 16px;
  margin: 0;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 16px;
`;

export const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${palette[100]} 0%, ${palette[200]} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette[700]};
  font-size: 32px;
`;

export const EmptyText = styled.p`
  color: ${palette[600]};
  font-size: 18px;
  text-align: center;
  margin: 0;
  max-width: 400px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 16px;
  padding: 32px;
`;

export const ErrorIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  font-size: 32px;
`;

export const ErrorText = styled.p`
  color: #dc2626;
  font-size: 18px;
  text-align: center;
  margin: 0;
  max-width: 400px;
`;

export const RetryButton = styled.button`
  background: linear-gradient(135deg, ${palette[700]} 0%, ${palette[800]} 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(34, 144, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
