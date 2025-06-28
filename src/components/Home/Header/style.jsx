import { styled } from "styled-components";
import { palette } from "../../../constant/colors.js";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 65px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #000; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  width: 80%;
  display: flex;

  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 60%;
  /* border: 1px solid #000; */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 40px;

    li {
      a {
        text-decoration: none;
        color: ${palette[1000]};
        font-weight: 500;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

export const UserActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .login-btn,
  .signup-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &.login-btn {
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    }

    &.signup-btn {
      background-color: #28a745;
      color: white;

      &:hover {
        background-color: #218838;
      }
    }
  }
`;
