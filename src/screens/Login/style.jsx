import { styled } from "styled-components";
import { palette } from "@/constant/colors";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${palette[50]};
  position: relative;

  .LoginContent {
    position: relative;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .header {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    margin: 0 auto;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 100px;
  }
  .anima {
    width: 70%;
    height: 600px;
  }

  .tela_login {
    width: 40%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .box_login {
      width: 100%;
      max-width: 480px;
      background: #fff;
      border-radius: 32px;
      box-shadow: 0 8px 48px 0 rgba(44, 62, 80, 0.12);
      padding: 48px 32px 32px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

      .forgot_password_link {
        margin-top: "16px";
        text-align: "center";
        text-decoration: "none";
        font-size: "30px";
        color: #6b7280;

        &:hover {
          color: ${palette[500]};
          text-decoration: underline;
        }
      }

      h2 {
        color: ${palette[500]};
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 12px;
      }

      .login-input {
        width: 100%;
        padding: 18px 25px;
        border: 1px solid #ececec;
        border-radius: 15px;
        font-size: 1.1rem;
        color: #222;
        margin-bottom: 18px;
        background: #fafcff;
        outline: none;
        transition: border 0.2s;
      }

      .login-input:focus {
        border: 1.5px solid ${palette[500]};
      }

      .login-btn {
        width: 100%;
        padding: 18px 0;
        background: ${palette[500]};
        color: #fff;
        font-size: 1.3rem;
        font-weight: 600;
        border: none;
        border-radius: 16px;
        margin-top: 5px;
        cursor: pointer;
        transition: background 0.18s;
      }

      .login-btn:hover {
        background: ${palette[600]};
      }
    }
  }
`;
