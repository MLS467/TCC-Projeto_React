import styled from "styled-components";


export const BreakPageContainerStyle = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
font-family: "DM Serif Text", serif;
    margin: 0px 0px 30px 0px;
    color:${({ theme }) => theme.color.secondary};
}
`
export const BreakPageImgStyle = styled.img`
width: 50px;
height: 50px;
`