import styled from "styled-components";

export const ContainerForm = styled.div`
margin-top: 5%;
display: flex;
flex-direction: column;
height: auto;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
    /* border: 1px solid #0f0; */
    width: ${props => props.theme.inputWidths[props.$size] || '10%'};
    display: flex;
    flex-direction: row;
    height:100%;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
`

export const Label = styled.label`
    font-size: 18px;
    color:${({ theme }) => theme.btnColor.dark};
    display: block;

    
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    box-sizing: border-box;
    outline: none;

    &:focus {
        border: 1px solid ${({ theme }) => theme.color.primary};
    }

`

export const Required = styled.sup`
    color: #f00 !important;
    font-size: 12px;
    margin-left: 5px;
`

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    box-sizing: border-box;
    outline: none;
 cursor: pointer !important;
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.primary} !important;
    }

`
export const Option = styled.option`
  padding: 10px;
  font-size: 18px;
  background: white;
  color: black;
  text-align: center;
  cursor: pointer !important;

  &:hover {
    cursor: pointer !important;
    background-color: ${({ theme }) => theme.color.primary || "blue"} !important; 
    color: white;
  }
`;

