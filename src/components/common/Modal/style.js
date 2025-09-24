import styled from "styled-components";

const WidthLength = "60%";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderModal = styled.div`
  width: ${WidthLength};
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  background: white;
  border-bottom: 1px solid #eee;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

export const ContentModal = styled.div`
  background: white;
  padding: 16px;
  width: ${WidthLength};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: darken(#007bff, 10%);
    }
  }
  button:focus {
    outline: none;
  }
  button:active {
    background: darken(#007bff, 15%);
  }
  button + button {
    margin-left: 8px;
  }
`;

export const FooterModal = styled.div`
  width: ${WidthLength};
  background: white;
  padding: 12px 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
`;
