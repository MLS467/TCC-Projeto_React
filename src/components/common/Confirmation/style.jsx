import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ConfirmationModal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 450px;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-out;
`;

export const ConfirmationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ConfirmationIcon = styled.div`
  background: #fef3e2;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #f59e0b;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    color: #374151;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ConfirmationTitle = styled.h3`
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.3;
`;

export const ConfirmationMessage = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 32px 0;
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  background: white;
  color: #374151;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;

  &:hover:not(:disabled) {
    background: #f9fafb;
    border-color: #d1d5db;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ConfirmButton = styled.button`
  background: #ef4444;
  color: white;
  border: 2px solid #ef4444;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;

  &:hover:not(:disabled) {
    background: #dc2626;
    border-color: #dc2626;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
