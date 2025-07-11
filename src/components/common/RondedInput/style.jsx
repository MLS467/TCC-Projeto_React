import styled from "styled-components";
import { palette } from "@/constant/colors";

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  font-size: 1rem;
  color: #333;
  background: #f8fafd;
  outline: none;
  box-sizing: border-box;
  transition: all 0.25s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: #a0aec0;
    font-size: 0.95rem;
  }

  &:focus {
    border-color: ${palette[400]};
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
    background: #fff;
  }

  &:hover:not(:focus) {
    border-color: rgba(0, 0, 0, 0.15);
    background: #f9fbfe;
  }
`;
