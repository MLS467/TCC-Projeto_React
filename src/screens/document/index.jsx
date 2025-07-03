import DocumentCard from "../../components/document/documentCard";
import DataField from "../../components/document/documentCard/dataField";
import DocumentContent from "../../components/document/documentContent";
import DocumentButtons from "../../components/document/documentButton";
import {
  AuthButtonWrapper,
  CardsContainer,
  DocumentWrapper,
  FixedHeader,
  LogoWrapper,
  ButtonsContainer,
} from "./style";
import NavBar from "../../components/common/NavBar";
import Logo from "../../components/common/Logo";
import AuthButton from "../../components/common/AuthButton";
import { labels } from "./labels";
import { useContext } from "react";
import { DocumentContext } from "../../Context/DocumentContext/exports";

const DocumentScreen = () => {
  const { patientDisplayData, triageData, handleConfirm, handleEdit } =
    useContext(DocumentContext);

  // Função para renderizar campos dinamicamente
  const renderFields = (data) => {
    return Object.keys(data).map((key) => {
      if (labels[key]) {
        return <DataField key={key} label={labels[key]} value={data[key]} />;
      }
      return null;
    });
  };

  return (
    <DocumentContent>
      <FixedHeader>
        <NavBar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div />
          <AuthButtonWrapper>
            <AuthButton title={"Logout"} type={"logout"} />
          </AuthButtonWrapper>
        </NavBar>
      </FixedHeader>

      <DocumentWrapper>
        <CardsContainer>
          <DocumentCard title="DADOS BÁSICOS DO PACIENTE">
            {renderFields(patientDisplayData)}
          </DocumentCard>

          <DocumentCard title="DADOS TRIAGEM">
            {renderFields(triageData)}
          </DocumentCard>

          <DocumentCard title="DADOS CONSULTA">
            {renderFields(triageData)}
          </DocumentCard>
        </CardsContainer>
      </DocumentWrapper>

      <ButtonsContainer>
        <DocumentButtons onEdit={handleEdit} onConfirm={handleConfirm} />
      </ButtonsContainer>
    </DocumentContent>
  );
};

export default DocumentScreen;
