import styled from "styled-components";

export const InputFormStyle = styled.input`
  width: ${(props) =>
    props.size ? props.theme.inputWidths[props.size] : "100%"};
  padding: 10px;
  margin: 10px 0;
  padding: 5px;
  border: #000;
  box-sizing: border-box;
  font-size: 1rem;
  border-bottom: 1px solid #000;
  &:focus {
    outline: none;
    border-bottom: 1px solid #000;
  }
`;
