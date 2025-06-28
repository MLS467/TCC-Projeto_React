import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  sup {
    color: #f00;
    font-size: 0.8rem;
    font-weight: 600;
  }

  &:hover {
    label {
      color: ${({ borderColorInput }) => borderColorInput || "#2563eb"};
      transition: color 0.2s ease;
    }

    input,
    textarea {
      border-color: ${({ borderColorInput }) => borderColorInput || "#2563eb"};
      transition: border-color 0.2s ease;
    }
  }

  &:focus-within {
    label {
      color: ${({ borderColorInput }) => borderColorInput || "#2563eb"};
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  transition: color 0.2s ease;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 18px;
  border: 1.5px solid #e3e8ee;
  border-radius: 10px;
  font-size: 1.05rem;
  color: #222;
  background: #fff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.18s;

  &::placeholder {
    color: #8b98a9;
    opacity: 1;
  }

  &:focus {
    border: 1.5px solid
      ${({ borderColorInput }) => borderColorInput || "#2563eb"};
    box-shadow: 0 0 0 3px #2563eb22;
  }
`;
