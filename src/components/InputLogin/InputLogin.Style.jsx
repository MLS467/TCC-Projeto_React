import styled from "styled-components";

export const InputLoginStyle = styled.input`
  width: ${(props) => props.theme.inputWidths[props.size] || "m"};
  height: ${(props) => (props.height ? props.height : "40px")};
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 2px 0;
  padding: 0 10px;
  font-size: 20px;
  outline: none;
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;
