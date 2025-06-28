import styled from "styled-components";

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f8fc;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  padding: 4px 18px;
  font-size: 15px;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.04);
  transition: background 0.18s, border 0.18s;

  &:hover {
    background: #f0f3f7;
    border-color: #dbeafe;
  }

  svg {
    font-size: 24px;
    color: #374151;
  }
`;

export const AuthButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;
