import { FiPrinter, FiDownload, FiSend, FiEdit } from "react-icons/fi";
import {
  ButtonContainer,
  DocumentButton,
  ButtonIcon,
  ButtonText,
} from "./style";

const DocumentButtons = ({
  onEdit,
  onConfirm,
  confirmText = "Confirmar e Enviar",
  editText = "Editar",
  showConfirm = true,
}) => {
  return (
    <ButtonContainer>
      <DocumentButton variant="print">
        <ButtonIcon>
          <FiPrinter />
        </ButtonIcon>
        <ButtonText>Imprimir</ButtonText>
      </DocumentButton>

      <DocumentButton variant="save">
        <ButtonIcon>
          <FiDownload />
        </ButtonIcon>
        <ButtonText>Salvar PDF</ButtonText>
      </DocumentButton>

      <DocumentButton variant="edit" onClick={onEdit}>
        <ButtonIcon>
          <FiEdit />
        </ButtonIcon>
        <ButtonText>{editText}</ButtonText>
      </DocumentButton>

      {showConfirm && (
        <DocumentButton variant="send" onClick={onConfirm}>
          <ButtonIcon>
            <FiSend />
          </ButtonIcon>
          <ButtonText>{confirmText}</ButtonText>
        </DocumentButton>
      )}
    </ButtonContainer>
  );
};

export default DocumentButtons;
