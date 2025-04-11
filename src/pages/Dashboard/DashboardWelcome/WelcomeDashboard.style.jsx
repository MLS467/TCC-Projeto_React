import React from "react";
import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.primary};
  text-align: center;
`;

export const WelcomeBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.color.primary};
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0 20px;
  color: ${(props) => props.theme.color.primary};
`;

export const DashboardButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.btnColor.success};
  }
`;
