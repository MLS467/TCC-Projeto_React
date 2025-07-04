import DocumentCard from "@/components/document/documentCard";
import DataField from "@/components/document/documentCard/dataField";
import DocumentContent from "@/components/document/documentContent";
import DocumentButtons from "@/components/document/documentButton";
import {
  AuthButtonWrapper,
  CardsContainer,
  DocumentWrapper,
  FixedHeader,
  LogoWrapper,
  ButtonsContainer,
} from "./style";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import AuthButton from "@/components/common/AuthButton";
import { labels } from "./labels";
import { useContext } from "react";
import { DocumentContext } from "@/Context/DocumentContext/exports";
import SpinnerScreen from "@/components/common/spinnerScreen";

const DocumentScreen = () => {
  const {
    patientDisplayData,
    triageData,
    consultationData,
    hasTriageData,
    hasConsultationData,
    formType,
    handleConfirm,
    handleEdit,
  } = useContext(DocumentContext);

  // Função para renderizar campos dinamicamente
  const renderFields = (data) => {
    if (!data) return null;

    return Object.keys(data).map((key) => {
      if (labels[key]) {
        return <DataField key={key} label={labels[key]} value={data[key]} />;
      }
      return null;
    });
  };

  // Função para renderizar campos de triagem organizados por seção
  const renderTriageFieldsOrganized = (data) => {
    if (!data) return null;

    // Função para formatar valores booleanos
    const formatValue = (key, value) => {
      // Campos que são checkboxes (booleanos)
      const booleanFields = [
        "difficulty_breathing",
        "nausea",
        "vomiting",
        "bleeding",
        "edema",
      ];

      if (booleanFields.includes(key)) {
        return value === true ||
          value === "true" ||
          value === 1 ||
          value === "1"
          ? "Sim"
          : value === false || value === "false" || value === 0 || value === "0"
          ? "Não"
          : value !== "Não informado"
          ? value
          : "Ainda não preenchido";
      }

      return value !== "Não informado" ? value : "Ainda não preenchido";
    };

    const triageSections = {
      "Sinais Vitais": [
        "blood_pressure",
        "heart_rate",
        "temperature",
        "oxygen_saturation",
        "respiratory_rate",
      ],
      "Avaliação Inicial": [
        "chief_complaint",
        "patient_condition",
        "pain_type",
        "pain_scale",
      ],
      "Histórico Clínico": ["surgery_history", "allergy", "blood_type"],
      "Dados Emergenciais": ["emergency_phone", "responsible_name"],
      "Outros Sintomas": [
        "difficulty_breathing",
        "nausea",
        "vomiting",
        "bleeding",
        "edema",
      ],
    };

    return Object.entries(triageSections).map(([sectionTitle, fields]) => (
      <div key={sectionTitle} style={{ marginBottom: "20px" }}>
        <h4
          style={{
            color: "#374151",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "10px",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "5px",
          }}
        >
          {sectionTitle}
        </h4>
        <div style={{ marginLeft: "10px" }}>
          {fields.map((key) => {
            if (labels[key]) {
              const formattedValue = formatValue(key, data[key]);
              const style =
                formattedValue === "Ainda não preenchido"
                  ? { fontStyle: "italic", color: "#999" }
                  : {};
              return (
                <DataField
                  key={key}
                  label={labels[key]}
                  value={formattedValue}
                  style={style}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    ));
  };

  // Função para renderizar cards condicionalmente
  const renderDocumentCards = () => {
    const cards = [];

    // Sempre mostrar dados do paciente
    cards.push(
      <DocumentCard key="patient" title="DADOS BÁSICOS DO PACIENTE">
        {renderFields(patientDisplayData)}
      </DocumentCard>
    );

    // Para consultation form, sempre mostrar triagem
    if (formType === "consultation") {
      cards.push(
        <DocumentCard key="triage" title="DADOS DE TRIAGEM">
          {renderTriageFieldsOrganized(triageData)}
        </DocumentCard>
      );
    } else if (formType === "medical-triage-view") {
      // Para visualização médica, sempre mostrar triagem
      cards.push(
        <DocumentCard key="triage" title="DADOS DE TRIAGEM">
          {hasTriageData ? (
            renderTriageFieldsOrganized(triageData)
          ) : (
            <div
              style={{ fontStyle: "italic", color: "#666", padding: "10px" }}
            >
              Dados de triagem ainda não foram preenchidos para este paciente.
            </div>
          )}
        </DocumentCard>
      );
    } else if (hasTriageData) {
      // Para triage form, mostrar apenas se houver dados válidos
      cards.push(
        <DocumentCard key="triage" title="DADOS TRIAGEM">
          {renderFields(triageData)}
        </DocumentCard>
      );
    }

    // Mostrar dados de consulta se existirem
    if (hasConsultationData) {
      cards.push(
        <DocumentCard key="consultation" title="DADOS CONSULTA">
          {renderFields(consultationData)}
        </DocumentCard>
      );
    }

    return cards;
  };

  // Verifica se os dados necessários estão disponíveis
  if (!patientDisplayData) {
    return <SpinnerScreen message="Carregando dados do paciente" />;
  }

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
        <div
          className="document-header"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <span style={{ color: "#666", fontSize: "14px" }}>
            {formType === "medical-triage-view"
              ? "Revise os dados do paciente antes de iniciar a consulta"
              : "Revise os dados antes de confirmar"}
          </span>
        </div>

        <CardsContainer>{renderDocumentCards()}</CardsContainer>
      </DocumentWrapper>

      <ButtonsContainer>
        <DocumentButtons
          onEdit={handleEdit}
          onConfirm={handleConfirm}
          confirmText={
            formType === "medical-triage-view"
              ? "Iniciar Consulta"
              : "Confirmar e Enviar"
          }
          editText={
            formType === "medical-triage-view" ? "Voltar à Lista" : "Editar"
          }
        />
      </ButtonsContainer>
    </DocumentContent>
  );
};

export default DocumentScreen;
