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
      max-width: 420px;
      background: #fff;
      border-radius: 24px;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.08),
        0 3px 15px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(44, 62, 80, 0.05);
      padding: 40px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      transform: translateY(0);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 60px rgba(0, 0, 0, 0.1),
          0 5px 25px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(44, 62, 80, 0.05);
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 24px;
        padding: 2px;
        background: linear-gradient(
          135deg,
          transparent 40%,
          ${palette[300]} 85%,
          transparent
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      &:hover::before {
        opacity: 1;
        animation: rotate 4s linear infinite;
      }

      @keyframes rotate {
        from {
          background: linear-gradient(
            135deg,
            transparent 40%,
            ${palette[300]} 85%,
            transparent
          );
        }
        to {
          background: linear-gradient(
            495deg,
            transparent 40%,
            ${palette[300]} 85%,
            transparent
          );
        }
      }

      .forgot_password_link {
        margin-top: 8px;
        text-align: center;
        text-decoration: none;
        font-size: 0.9rem;
        color: #6b7280;
        position: relative;
        padding: 4px 0;
        transition: all 0.25s ease;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: ${palette[500]};
          transition: width 0.3s ease;
        }

        &:hover {
          color: ${palette[600]};

          &::after {
            width: 100%;
          }
        }
      }

      h2 {
        color: ${palette[600]};
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 8px;
        position: relative;
        padding-bottom: 12px;
        letter-spacing: 0.5px;

        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(
            90deg,
            ${palette[400]} 0%,
            ${palette[600]} 100%
          );
          transform: translateX(-50%);
          border-radius: 10px;
        }
      }

      .input-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #a0aec0;
        font-size: 18px;
        z-index: 2;
        transition: all 0.3s ease;
      }

      .input-wrapper {
        width: 100%;
        position: relative;
        margin-bottom: 8px;

        &:focus-within .input-icon {
          color: ${palette[600]};
          transform: translateY(-50%) scale(1.1);
        }
      }

      .login-input {
        width: 100%;
        padding: 16px 20px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        font-size: 1rem;
        color: #333;
        margin-bottom: 16px;
        background: #f8fafd;
        outline: none;
        transition: all 0.25s ease;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.02);

        &:focus {
          border-color: ${palette[400]};
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
          background: #fff;
        }

        &::placeholder {
          color: #a0aec0;
          font-size: 0.95rem;
        }
      }

      .login-btn {
        width: 100%;
        padding: 16px 0;
        background: linear-gradient(
          135deg,
          ${palette[500]} 0%,
          ${palette[600]} 100%
        );
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        border: none;
        border-radius: 14px;
        margin-top: 8px;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 4px 12px rgba(74, 144, 226, 0.25);
        position: relative;
        overflow: hidden;
        z-index: 1;

        &:hover {
          box-shadow: 0 6px 16px rgba(74, 144, 226, 0.3);
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
          box-shadow: 0 3px 8px rgba(74, 144, 226, 0.2);
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            ${palette[600]} 0%,
            ${palette[700]} 100%
          );
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        &:hover::before {
          opacity: 1;
        }

        &::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(30deg);
          transition: all 0.8s ease;
        }

        &:hover::after {
          left: 120%;
        }

        /* Efeito de brilho nos cantos */
        .btn-glow {
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.7s, height 0.7s;
        }
      }
    }
  }
`;
