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

const DocumentScreen = () => {
  const patientData = {
    name: "Maria Silva Santos",
    age: "45 anos",
    cpf: "123.456.789-00",
    telefone: "(11) 99999-9999",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    convenio: "Unimed",
  };

  const triageData = {
    pressao: "120/80 mmHg",
    temperatura: "36.5°C",
    peso: "65 kg",
    altura: "1.65 m",
    queixa: "Dor no peito",
  };

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
            {renderFields(patientData)}
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
        <DocumentButtons />
      </ButtonsContainer>
    </DocumentContent>
  );
};

export default DocumentScreen;
