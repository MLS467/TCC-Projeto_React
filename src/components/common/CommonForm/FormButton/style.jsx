import styled from "styled-components";

export const ButtonRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  align-items: center;
  padding: 32px;
  margin-top: 32px;
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  color: #374151;
  border: 2px solid #e3e8ee;
  border-radius: 5px;
  font-size: 1rem; // menor fonte
  font-weight: 500;
  padding: 12px 22px; // padding menor
  cursor: pointer;
  transition: border 0.18s, background 0.18s, color 0.18s;
  box-shadow: none;

  &:hover {
    border: 2px solid #2563eb;
    background: #f5f8fc;
    color: #2563eb;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem; // menor fonte
  font-weight: 600;
  padding: 12px 28px; // padding menor
  cursor: pointer;
  box-shadow: none;
  transition: background 0.18s;

  &:hover {
    background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 100%);
  }
`;
