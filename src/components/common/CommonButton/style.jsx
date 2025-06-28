import styled from "styled-components";

export const StyledButton = styled.button`
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 24px;
  height: 44px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;
