export const AvatarCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #f5f8fc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(44, 62, 80, 0.07);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
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
