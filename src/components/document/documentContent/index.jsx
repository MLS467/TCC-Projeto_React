import React from "react";
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

const DocumentContent = ({ children }) => {
  return (
    <DocumentContentWrapper>
      <HeaderDocument>
        <HeaderTop>
          <DocumentTitle>DOCUMENTO MÉDICO</DocumentTitle>
          <DocumentInfo>
            <DocumentNumber>DOC-2024-001234</DocumentNumber>
            <GeneratedDate>Gerado em: 15/01/2024 às 14:30</GeneratedDate>
          </DocumentInfo>
        </HeaderTop>
        <SystemName>Sistema Hospitalar MedCare</SystemName>
      </HeaderDocument>
      <BlueLine />
      <DocumentContentStyle>{children}</DocumentContentStyle>
    </DocumentContentWrapper>
  );
};

export default DocumentContent;
