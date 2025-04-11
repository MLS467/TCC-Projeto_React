import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// div pai do banner 
export const HomeContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 670px ;
  width: 100%;
  max-height: 700px !important;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

// div do banner 
export const HomeBannerStyle = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary};
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

// div do texto do banner
export const HomeTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  height: 60%;
  align-items: center;
  animation: ${fadeInUp} 1.2s ease-out forwards;

  button {
    border: 1px solid #fff;
    padding: 15px 20px;
    width: 300px;
    background-color: transparent;
    color: white;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      box-shadow: 0px 2px 20px rgb(249, 248, 248);
      background-color: #fff;
      color: ${({ theme }) => theme.color.primary};
    }

    @media (max-width: 1280px) {
      width: 250px;
      font-size: 15px;
    }
  }

  div { 
    h1 {
      font-size: 40px;
      color: white;
      text-align: center;
      &::first-letter {
        font-size: 45px;
      }
    }

    p {
      font-size: 25px;
      color: white;
      text-align: center;
      font-style: italic;
      &::first-letter {
        font-size: 30px;
      }
      @media (max-width: 1280px) {
        font-size: 20px;
        &::first-letter {
          font-size: 23px;
        }
      }
    }
  }

  button {
    margin-top: 30px;
  }
`;

// div da imagem do banner
export const HomeImageStyle = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  animation: ${fadeInRight} 2s ease-out forwards;

  img {
    width: 100%;
    height: 100%;
  }
`;
