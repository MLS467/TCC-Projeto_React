import { createGlobalStyle } from "styled-components";
import { palette } from "@/constant/colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    scroll-behavior: smooth;
    position: relative;
    width: 100% !important;
    height: 100% !important;
    font-family: 'roboto', sans-serif;
    /* background-color: ${palette[50]}; */
    background: linear-gradient(135deg, #fdf5fb 0%, #eff7ff 100%);
    color: ${palette[900]};
  }

  /* Estilização global da barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${palette[400]} 0%, ${palette[500]} 100%);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, ${palette[500]} 0%, ${palette[600]} 100%);
    transform: scale(1.1);
  }

  ::-webkit-scrollbar-corner {
    background: #f1f5f9;
  }

  /* Para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${palette[400]} #f1f5f9;
  }

  /* Estilização específica para mobile */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
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
