import  { useState } from "react";
import { ModalContainer } from "./Modal.style";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleModal = () => {
    return (
      visible && (
        <ModalContainer>
          <button onClick={handleVisible}>Modal</button>
        </ModalContainer>
      )
    );
  };

  return { handleModal, handleVisible };
};

export default Modal;
