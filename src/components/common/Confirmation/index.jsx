import { FiAlertTriangle, FiX } from "react-icons/fi";
import {
  ConfirmationOverlay,
  ConfirmationModal,
  ConfirmationHeader,
  ConfirmationIcon,
  ConfirmationTitle,
  ConfirmationMessage,
  ConfirmationButtons,
  CancelButton,
  ConfirmButton,
  CloseButton,
} from "./style";

const Confirmation = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirmar ação",
  message = "Tem certeza que deseja continuar?",
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  isLoading = false,
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    if (!isLoading) {
      onClose();
    }
  };

  return (
    <ConfirmationOverlay onClick={handleCancel}>
      <ConfirmationModal onClick={(e) => e.stopPropagation()}>
        <ConfirmationHeader>
          <ConfirmationIcon>
            <FiAlertTriangle size={24} />
          </ConfirmationIcon>
          <CloseButton onClick={handleCancel} disabled={isLoading}>
            <FiX size={20} />
          </CloseButton>
        </ConfirmationHeader>

        <ConfirmationTitle>{title}</ConfirmationTitle>
        <ConfirmationMessage>{message}</ConfirmationMessage>

        <ConfirmationButtons>
          <CancelButton onClick={handleCancel} disabled={isLoading}>
            {cancelText}
          </CancelButton>
          <ConfirmButton onClick={handleConfirm} disabled={isLoading}>
            {isLoading ? "Processando..." : confirmText}
          </ConfirmButton>
        </ConfirmationButtons>
      </ConfirmationModal>
    </ConfirmationOverlay>
  );
};

export default Confirmation;
