import React from "react";
import { FiPrinter, FiDownload, FiSend, FiX } from "react-icons/fi";
import {
  ButtonContainer,
  DocumentButton,
  ButtonIcon,
  ButtonText,
} from "./style";

const DocumentButtons = () => {
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

      <DocumentButton variant="send">
        <ButtonIcon>
          <FiSend />
        </ButtonIcon>
        <ButtonText>Enviar</ButtonText>
      </DocumentButton>

      <DocumentButton variant="cancel">
        <ButtonIcon>
          <FiX />
        </ButtonIcon>
        <ButtonText>Cancelar</ButtonText>
      </DocumentButton>
    </ButtonContainer>
  );
};

export default DocumentButtons;
