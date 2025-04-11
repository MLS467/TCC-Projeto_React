import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f9;
  color: #333;
  font-family: "Arial", sans-serif;
  text-align: center;
  padding: 20px;
`;

export const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin: 10px 0 30px;
`;

export const BackButton = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
