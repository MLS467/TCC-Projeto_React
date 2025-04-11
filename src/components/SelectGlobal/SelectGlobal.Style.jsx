import styled from "styled-components";

// Estilo base para o Select
export const BaseSelectStyle = styled.select`
  color: ${(props) =>
    props.$textColor ? props.$textColor : props.theme.color.primary};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#fff")};
  width: ${(props) =>
    props.$size ? props.theme.buttonWidths[props.$size] : "150px"};
  padding: ${(props) => (props.$padding ? props.$padding : "10px")};
  border-radius: ${(props) =>
    props.$borderRadius ? props.$borderRadius : "8px"};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.color.primary};
  cursor: pointer;
  outline: none;
  appearance: none;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: #fff;
  }

  &:focus {
    box-shadow: 0 0 5px ${(props) => props.theme.color.primary};
  }
`;

// Estilo para as opções do Select
export const SelectOption = styled.option`
  color: ${(props) => (props.$textColor ? props.$textColor : "#000")};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#fff")};
  padding: ${(props) => (props.$padding ? props.$padding : "10px")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
`;
