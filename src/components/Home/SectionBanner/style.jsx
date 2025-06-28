import { styled } from "styled-components";
import { palette } from "../../../constant/colors.js";

export const SectionContainerStyle = styled.section`
  margin-top: 65px;
  width: 100%;
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, ${palette[700]}, ${palette[800]});
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  .Section_Content {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .section-banner {
    color: #fff;
    /* border: 1px solid green; */
    width: 50%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 120px;
    padding: 20px;

    h1 {
      font-size: 50px;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
    }
  }

  .section-image-container {
    /* border: 1px solid yellow; */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .section-border-image {
    margin: 50px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* border: 1px solid gray; */
    border-radius: 2%;
    width: 90%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: ${palette[500]};
  }

  .section-image {
    /* border: 1px solid red; */
    border-radius: 2%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: cover;
      max-height: 100%;
      max-width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  .section-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
    align-items: flex-end;
    width: 55%;
    margin-top: 20px;
  }

  @media screen and (min-width: 1200px) {
    .section-buttons {
      width: 65%;
      justify-content: flex-start;
    }
  }
`;

export const PrimaryButton = styled.button`
  background-color: white;
  color: ${palette[600]}; /* Azul */
  border: 1px solid #fff; /* Azul */
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff; /* Azul */
  }
`;

export const OutlineButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: ${palette[600]}; /* Azul */
  }
`;
