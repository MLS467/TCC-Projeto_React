import {
  ContentModal,
  FooterModal,
  HeaderModal,
  ModalContainer,
  CloseButton,
} from "./style";

const Modal = ({ children, visible, onClose }) => {
  return (
    visible && (
      <ModalContainer>
        <HeaderModal>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </HeaderModal>
        <ContentModal>{children}</ContentModal>
        <FooterModal></FooterModal>
      </ModalContainer>
    )
  );
};

export default Modal;
