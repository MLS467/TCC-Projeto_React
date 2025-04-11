import styled from "styled-components";

export const Button = styled.button`
  position: sticky;
  bottom: 24px;
  right: 0 !important;
  padding: 8px;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  transition:
    background-color 0.3s ease,
    opacity 0.1s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    color: gray;
    width: 36px;
    height: 36px;
  }
`;
