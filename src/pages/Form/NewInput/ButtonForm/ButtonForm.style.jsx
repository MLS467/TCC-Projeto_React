import styled from "styled-components";

export const ButtonFormContainer = styled.div`
    width: 71%;
    height: 85px;
    display: flex;
    justify-content: flex-end;

    
     @media(max-width: 1331px) {
     width: 100%;
     justify-content: center;
    }
    `;

export const ButtonFormDiv = styled.button`
    background-color: #fff;
    display: inherit;
    align-items: flex-end;
    justify-content: flex-end;
    width: 25%;
    gap: 10px;
    border: none;

     @media(max-width: 1331px) {
     width: 50%;
     justify-content: space-evenly;
    }
`;

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

