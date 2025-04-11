import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  text-decoration: none;
`;
export const ContainerButtonLink = styled.div`
  border: 1px solid red;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    border-radius: 10px;
    color: ${(props) => props.theme.color.primary};
    font-size: 1rem;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .button:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent !important;
    border-radius: 5px;
    z-index: -2;
    cursor: pointer;
  }
  .button:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary} !important;
    transition: all 0.3s;
    border-radius: 5px;
    z-index: -1;
    cursor: pointer;
  }
  .button:hover {
    color: #fff;
    cursor: pointer;
  }
  .button:hover:before {
    width: 100%;
    cursor: pointer;
  }
`;
