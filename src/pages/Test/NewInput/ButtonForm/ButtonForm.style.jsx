import styled from "styled-components";

export const ButtonForm = styled.button`
    background-color: ${(props) => props.reset ? ({ theme }) => theme.btnColor.warning : ({ theme }) => theme.color.primary};
    color:  ${(props) => props.reset ? '#000' : '#fff'};
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 10px;
    transition: all 0.3s;
    &:hover {
         transition: all 0.3s;
        opacity: 0.9;
    }

`