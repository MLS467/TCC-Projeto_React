import { ImSpinner8 } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

export const LoginContainer = styled.div` 
  display: flex;
  padding: 0 20px;
  justify-content: center; 
  align-items: flex-start;
  width: 100%;
  height: 90vh; 
  flex-direction: column; 
  
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const LoginBoxStyle = styled.div`
  border: 1px solid purple;
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
  border: 2px solid ${({ theme }) => theme.color.primary};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);

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

  @media (max-width: 768px) {
    width: 90%;
    height: auto; 
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
