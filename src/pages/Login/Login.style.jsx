import { ImSpinner8 } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

export const LoginContainer = styled.div` 
  display: flex;
  padding: 20px 0;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px); 
  flex-direction: row; 
  
  @media (max-width: 1100px) {
    justify-content: center; 
  }
`;

export const IframeContainer = styled.div`
display: flex;
width: 65%;
height: inherit;
justify-content:center;
align-items: center;
/* border:1px solid blue; */
  @media (max-width: 1100px) {
      display: none;
    }

  iframe{
    width: 90%;
    height: 100%;
    border:none;
    /* border:1px solid red; */
  }
  `
export const LoginContainerStyle = styled.div`
display: flex;
width: 35%;
height: inherit;
justify-content: center;
align-items: center;
   @media (max-width: 1100px) {
      width: 100%;
      height: 100%;
      align-items: flex-end;
    }
`

export const LoginBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 5%;
  height: 80%;
  width: 90%; 
  max-width: 400px; 
  border-radius: 50px;
  /* border: 2px solid ${({ theme }) => theme.color.primary}; */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);

   @media (max-width: 1100px) {
      width: 90%;
      height: inherit;
    }

   @media (min-width: 1101px) {
    width: 90%;
    height: 90%;
    }

    button{
       @media (min-width: 1101px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 10%;

       }
    }

  h1{
    color: ${({ theme }) => theme.color.primary};
    font-size: 2rem;
    margin-bottom: 10px;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 60%;
    
    div{
      width: 100%;
      height: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly; 

      input{
        width: 80%;
        padding: 0px 30px;
      }
    }
  }

 
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinningImSpinner8 = styled(ImSpinner8)`
  animation: ${rotate} 1s linear infinite;
`;
