import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 70%;
    height: 70vh;
`;

export const ContainerInputStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.inputWidths[props.$width] || '100%'};
`;

export const NewInputStyle = styled.input`
    width: 80%;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom:1px solid #000;
    outline: none;
    background-color: transparent;
    font-size: 1.2rem;
`;