import { ImSpinner8 } from "react-icons/im";
import styled, { keyframes } from "styled-components";

export const LoginContainer = styled.div`
  background: #fff !important;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 70px;
  flex-direction: row;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const IframeContainer = styled.div`
  display: flex;

  width: 65%;
  height: inherit;
  justify-content: center;
  align-items: center;
  /* border:1px solid blue; */
  @media (max-width: 1100px) {
    display: none;
  }

  iframe {
    width: 90%;
    height: 100%;
    border: none;
  }
`;
export const LoginContainerStyle = styled.div`
  background-color: #f9f9f9;
  display: flex;
  width: 35% !important;
  height: inherit !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left:
    3px solid 0 6px 12px rgba(0, 0, 0, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1100px) {
    width: 50% !important;
    height: 90% !important;
  }

  @media (min-width: 1101px) {
    width: 90%;
    height: 90%;
  }

  .login_container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 70% !important;
    height: 80%;

    h2 {
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.color.primary};
      font-weight: 500;
      font-size: 3rem;
      margin-bottom: 10px;
    }

    a {
      text-align: center;
      text-decoration: none;
      color: ${({ theme }) => theme.color.primary};
      span {
        display: block;
      }

      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }

    button {
      @media (max-width: 1100px) {
        width: 100%;
        height: 15%;
      }

      @media (min-width: 1101px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 15%;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 60%;

      div {
        width: 100%;
        height: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        input {
          background-color: #f9f9f923;
          width: 100%;
          padding: 0px 30px;

          &:focus {
            background-color: #fff;
          }
        }
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
