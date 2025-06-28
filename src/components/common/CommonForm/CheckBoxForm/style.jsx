import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
  width: 100%;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  user-select: none;

  span {
    margin-left: 12px;
    line-height: 1.4;
  }

  &:hover {
    color: #6366f1;
  }

  &:hover input:not(:checked) + div {
    border-color: #6366f1;
    background-color: #f8fafc;
  }
`;

export const StyledCheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + div {
    background-color: #6366f1;
    border-color: #6366f1;

    &::after {
      display: block;
    }
  }

  &:focus + div {
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  }
`;

export const CheckMark = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
