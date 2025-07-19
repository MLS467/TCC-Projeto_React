import { palette } from "@/constant/colors";
import styled from "styled-components";

export const UpdateWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  background: ${palette[50]};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(60, 60, 120, 0.1);
  padding: 32px;
`;

export const Title = styled.h2`
  color: ${palette[700]};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 500;
  color: ${palette[600]};
`;

export const Input = styled.input`
  margin-top: 6px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid ${palette[200]};
  font-size: 1rem;
  background: ${palette[100]};
  color: ${palette[800]};
  outline: none;
  transition: border 0.18s;

  &:focus {
    border: 1.5px solid ${palette[600]};
  }
`;

export const Button = styled.button`
  grid-column: span 2;
  background: ${palette[600]};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
  margin-top: 20px;

  &:hover {
    background: ${palette[700]};
  }
`;
