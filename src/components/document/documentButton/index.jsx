import { FiPrinter, FiDownload, FiSend, FiEdit } from "react-icons/fi";
import {
  ButtonContainer,
  DocumentButton,
  ButtonIcon,
  ButtonText,
} from "./style";

const DocumentButtons = ({ onEdit, onConfirm }) => {
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
        <ButtonText>Editar</ButtonText>
      </DocumentButton>

      <DocumentButton variant="send" onClick={onConfirm}>
        <ButtonIcon>
          <FiSend />
        </ButtonIcon>
        <ButtonText>Confirmar e Enviar</ButtonText>
      </DocumentButton>
    </ButtonContainer>
  );
};

export default DocumentButtons;
