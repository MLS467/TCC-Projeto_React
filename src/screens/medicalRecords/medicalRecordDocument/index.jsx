import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DocumentCard from "@/components/document/documentCard";
import DataField from "@/components/document/documentCard/dataField";
import DocumentContent from "@/components/document/documentContent";
import DocumentButtons from "@/components/document/documentButton";
import SpinnerScreen from "@/components/common/spinnerScreen";
import HeaderNav from "@/components/common/HeaderNav";
import useCrud from "@/Hook/useCrud";
import { medicalRecordLabels } from "./data";
import {
  MedicalRecordDocumentWrapper,
  CardsContainer,
  ButtonsContainer,
  LoadingWrapper,
  ErrorWrapper,
  BackButtonStyled,
} from "./style";
import { ButtonIcon } from "@/components/document/documentButton/style";
import { FiX } from "react-icons/fi";

const MedicalRecordDocument = () => {
  const { id } = useParams();
  const { ReadOneRegister } = useCrud();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const loadPatientData = async () => {
      if (!id) {
        setError("ID do prontuário não informado");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await ReadOneRegister({
          endpoint: "medical-record/show",
          params: id,
        });

        if (response.success) {
          setPatientData(response.data.data || response.data);
        } else {
          setError(response.error || "Erro ao carregar prontuário");
        }
      } catch (err) {
        console.error("Error loading medical record:", err);
        setError("Erro ao carregar prontuário");
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, [id, ReadOneRegister]);

  // Função para formatar valores
  const formatValue = (key, value) => {
    if (value === null || value === undefined) return "Não informado";

    switch (key) {
      case "birth_date":
        return new Date(value).toLocaleDateString("pt-BR");
      case "consultation_datetime":
        return new Date(value).toLocaleString("pt-BR");
      case "created_at":
      case "updated_at":
        return new Date(value).toLocaleString("pt-BR");
      case "temperature":
        return `${value}°C`;
      case "blood_pressure":
        return `${value} mmHg`;
      case "heart_rate":
        return `${value} bpm`;
      case "respiratory_rate":
        return `${value} rpm`;
      case "oxygen_saturation":
        return `${value}%`;
      case "gender":
        return value === "masculino" ? "Masculino" : "Feminino";
      case "bleeding":
      case "difficulty_breathing":
      case "edema":
      case "nausea":
      case "vomiting":
        return value === 1 ? "Sim" : "Não";
      case "patient_condition":
        switch (value) {
          case "critical":
            return "Crítico";
          case "serious":
            return "Grave";
          case "moderate":
            return "Moderado";
          case "mild":
            return "Leve";
          default:
            return value;
        }
      default:
        return value;
    }
  };

  // Função para renderizar campos
  const renderFields = (fields) => {
    if (!patientData) return null;

    return fields.map((key) => (
      <DataField
        key={key}
        label={medicalRecordLabels[key]}
        value={formatValue(key, patientData[key])}
      />
    ));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log("Download PDF");
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <LoadingWrapper>
        <SpinnerScreen />
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper>
        <h2>Erro</h2>
        <p>{error}</p>
      </ErrorWrapper>
    );
  }

  const personalFields = [
    "full_name",
    "cpf",
    "email",
    "gender",
    "birth_date",
    "phone",
  ];
  const addressFields = [
    "city",
    "neighborhood",
    "street",
    "block",
    "apartment",
  ];
  const vitalFields = [
    "blood_type",
    "blood_pressure",
    "heart_rate",
    "respiratory_rate",
    "oxygen_saturation",
    "temperature",
  ];
  const symptomFields = [
    "chief_complaint",
    "patient_condition",
    "bleeding",
    "difficulty_breathing",
    "edema",
    "nausea",
    "vomiting",
  ];
  const historyFields = ["allergy", "surgery_history"];
  const consultationFields = [
    "reason_for_consultation",
    "symptoms",
    "consultation_datetime",
    "prescribed_medication",
    "medical_recommendations",
    "doctor_observations",
    "performed_procedures",
    "diagnosis",
    "additional_notes",
  ];

  return (
    <>
      <MedicalRecordDocumentWrapper>
        <HeaderNav />
        <DocumentContent id="conteudo-pdf" generateDocId={true}>
          <CardsContainer>
            <DocumentCard title="Dados Pessoais">
              {renderFields(personalFields)}
            </DocumentCard>

            <DocumentCard title="Endereço">
              {renderFields(addressFields)}
            </DocumentCard>

            <DocumentCard title="Sinais Vitais">
              {renderFields(vitalFields)}
            </DocumentCard>

            <DocumentCard title="Sintomas e Condição">
              {renderFields(symptomFields)}
            </DocumentCard>

            <DocumentCard title="Histórico Médico">
              {renderFields(historyFields)}
            </DocumentCard>

            <DocumentCard title="Consulta">
              {renderFields(consultationFields)}
            </DocumentCard>
          </CardsContainer>
        </DocumentContent>

        <ButtonsContainer>
          <DocumentButtons
            records={true}
            onPrint={handlePrint}
            onDownload={handleDownload}
          />
          <BackButtonStyled onClick={handleBack}>
            <ButtonIcon>
              <FiX />
            </ButtonIcon>
            Fechar
          </BackButtonStyled>
        </ButtonsContainer>
      </MedicalRecordDocumentWrapper>
    </>
  );
};

export default MedicalRecordDocument;
