import { createGlobalStyle } from "styled-components";
import { palette } from "../constant/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    scroll-behavior: smooth;
    position: relative;
    width: 100% !important;
    height: 100% !important;
    font-family: 'Segoe UI', sans-serif;
    background-color: ${palette[50]};
    color: ${palette[900]};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fadeInUp {
    animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;
