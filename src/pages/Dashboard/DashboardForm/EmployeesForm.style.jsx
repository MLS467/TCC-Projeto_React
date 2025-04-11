import { IoIosAddCircleOutline } from "react-icons/io";

import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 25%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 16px;
  background-color: #fff;
  color: ${(props) => props.theme.color.primary};
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StyledOption = styled.option`
  background-color: #fff;
  color: ${(props) => props.theme.color.primary};
`;

export const ContainerBtnStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
`;
