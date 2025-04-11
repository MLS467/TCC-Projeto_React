import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const ContainerMargin = styled.div`
  // uso
  padding: 2% 5%;
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const ContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 1280px) {
    width: 70%;
  }
`;

export const ContainerCardsServices = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerTextStyle = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: row;
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .img {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 20px;
    width: 70%;
    height: 100%;
  }

  @media (min-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 70%;
    height: auto;
    gap: 20px;

    .img {
      width: 100%;
      height: 70%;
    }

    .text {
      width: 100%;
      height: 30%;
      text-align: center;

      button {
        margin-top: 20px;
      }
    }
  }
`;

export const HomeContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
`;

export const ObjectTextDiv = styled.div`
  width: 70%;
  height: 500px;
`;

export const ObjectTextDiv2 = styled.div`
  width: 20%;
  height: 500px;
`;

export const ContentDivStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ContainerRadiusDiv = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-around;
`;

export const RadiusDiv = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  img {
    height: inherit;
    width: inherit;
    border-radius: inherit;
  }
`;

export const ConteinerDivImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: inherit;
  height: inherit;
`;

export const ContentDivImg = styled.div`
  width: 33.9%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  @media (max-width: 1172px) {
    width: 50%;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  text-align: center;
  margin: 20px auto;
`;

export const ContainerCardsStyle = styled.div`
  // uso
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
`;

export const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 10px 15px;
`;

export const CardButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const ContentTextStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 100%;
    color: ${({ theme }) => theme.color.primary};
    text-align: center;
    font-size: 14pt;
  }

  div {
    img {
      float: right;
    }
  }
`;
