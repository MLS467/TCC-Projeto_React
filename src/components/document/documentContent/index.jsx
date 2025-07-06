import { v4 } from "uuid";
import { useContext } from "react";
import { DocumentContext } from "@/Context/DocumentContext/exports";
import {
  DocumentContentWrapper,
  HeaderDocument,
  HeaderTop,
  DocumentTitle,
  DocumentInfo,
  DocumentNumber,
  GeneratedDate,
  SystemName,
  BlueLine,
  DocumentContentStyle,
} from "./style";

const DocumentContent = ({ children, id, $class, generateDocId = false }) => {
  const { documentId } = useContext(DocumentContext) || {};

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Usar documentId do contexto se disponível, senão gerar novo ID
  const id_doc = generateDocId
    ? documentId
      ? documentId.slice(0, 8)
      : v4().toString().slice(0, 8)
    : null;

  return (
    <DocumentContentWrapper id={id} className={$class}>
      <HeaderDocument>
        <HeaderTop>
          <DocumentTitle>PRONTUÁRIO DE ATENDIMENTO</DocumentTitle>
          <DocumentInfo>
            {generateDocId && <DocumentNumber>DOC-{id_doc}</DocumentNumber>}
            <GeneratedDate>
              Gerado em: {formattedDate} às {formattedTime}
            </GeneratedDate>
          </DocumentInfo>
        </HeaderTop>
        <SystemName>Prontuário Eletrônico AtendeBem</SystemName>
      </HeaderDocument>
      <BlueLine />
      <DocumentContentStyle>{children}</DocumentContentStyle>
    </DocumentContentWrapper>
  );
};

export default DocumentContent;
