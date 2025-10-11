import { palette } from "@/constant/colors";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: ${palette[50]};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .NotFoundContent {
    max-width: 600px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    border-radius: 8px;
    width: 300px;
    height: 200px;
  }

  .titleNotFound {
    font-size: 60px;
    margin: 20px 0 10px;
  }

  .NotFound404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 50px;
    text-align: center;
    justify-content: center;
    font-size: 18px;

    .subTitleNotFound {
      width: 80%;
      color: ${palette[1000]};
      font-size: 22px;
      padding: 3% 0;
    }

    .notFoundText {
      width: 85%;
      color: ${palette[1000]};
      font-size: 15px;
    }
  }

  .buttonsContainer {
    display: flex;
    gap: 16px;
    margin-top: 32px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .backHomeButton {
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 160px;
    justify-content: center;

    &.primary {
      background: linear-gradient(135deg, #4285f4 0%, #1976d2 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);

      &:hover {
        background: linear-gradient(135deg, #3367d6 0%, #1565c0 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
      }
    }

    &.secondary {
      background: white;
      color: #666;
      border: 2px solid #e0e0e0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #f5f5f5;
        border-color: #ccc;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .buttonsContainer {
      flex-direction: column;
      align-items: center;
    }

    .backHomeButton {
      width: 100%;
      max-width: 200px;
    }
  }

  .supportSection {
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid #e0e0e0;
    text-align: center;

    .supportText {
      color: #666;
      font-size: 14px;
      margin: 0 0 8px 0;
      font-weight: 400;
    }

    .errorCode {
      color: #888;
      font-size: 12px;
      margin: 0;
      font-family: "Courier New", monospace;
      background: #f5f5f5;
      padding: 8px 12px;
      border-radius: 4px;
      display: inline-block;
    }
  }
`;
