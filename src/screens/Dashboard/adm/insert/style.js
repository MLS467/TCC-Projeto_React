import { palette } from "@/constant/colors";
import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e0e7ff;
  margin-bottom: 2rem;
`;

export const UserIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #4a90e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-right: 1rem;
`;

export const HeaderContent = styled.div`
  text-align: left;
`;

export const FormTitle = styled.h2`
  color: #4a90e2;
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FormSubtitle = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 0.9rem;
`;

export const SectionContainer = styled.div`
  margin-bottom: 2rem;
  padding: 0 2rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const SectionIcon = styled.div`
  margin-right: 0.5rem;
  color: #4a90e2;
  font-size: 1.1rem;
`;

export const SectionTitle = styled.h3`
  color: #374151;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const LabelIcon = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  color: #374151;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
    font-style: italic;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #374151;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`;

export const FileSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`;

export const FileUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background-color: #f9fafb;
  text-align: center;
`;

export const UploadIcon = styled.div`
  font-size: 2rem;
  color: #9ca3af;
  margin-bottom: 1rem;
`;

export const UploadText = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 0.875rem;
`;

export const StatusGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${palette[500]};
    border-color: #9ca3af;
  }
`;

export const SaveButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #357abd;
  }
`;
