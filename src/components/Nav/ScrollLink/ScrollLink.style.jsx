import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const StyledScrollLink = styled(ScrollLink)`
  color: #379bd2;
  font-weight: 500;
  font-size: 1rem;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #379bd2;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: #379bd2;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
