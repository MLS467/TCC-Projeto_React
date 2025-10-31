import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import {
  ConsultationWrapper,
  ConsultationHeader,
  HeaderContent,
  HeaderInfo,
  HeaderTitle,
  HeaderSubtitle,
  ConsultationGrid,
  ConsultationCard,
  ConsultationCardHeader,
  ConsultationId,
  ConsultationDate,
  PatientInfo,
  PatientId,
  ConsultationField,
  FieldLabel,
  FieldValue,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  EmptyState,
  EmptyIcon,
  EmptyText,
  ErrorContainer,
  ErrorIcon,
  ErrorText,
  RetryButton,
} from "./style";
import {
  FiCalendar,
  FiUser,
  FiFileText,
  FiActivity,
  FiHeart,
  FiPackage,
  FiClipboard,
  FiEye,
  FiTool,
  FiSearch,
  FiEdit3,
  FiAlertCircle,
  FiRefreshCw,
} from "react-icons/fi";

const ConsultationPage = () => {
  const { ReadAll } = useCrud();
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConsultations = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await ReadAll({ endpoint: "/consultation" });

      if (response.success && response.data.status) {
        setConsultations(response.data.data);
      } else {
        throw new Error("Erro ao carregar consultas");
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
      setError(error.message || "Erro ao carregar consultas");
      toast.error("Erro ao carregar consultas");
      setConsultations([]);
    } finally {
      setLoading(false);
    }
  }, [ReadAll]);

  useEffect(() => {
    fetchConsultations();
  }, [fetchConsultations]);

  const formatDate = (dateString) => {
    if (!dateString) return "Data não informada";

    try {
      const date = new Date(dateString);
      return date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Data inválida";
    }
  };

  const getFieldIcon = (fieldType) => {
    const icons = {
      reason: <FiFileText size={16} />,
      symptoms: <FiActivity size={16} />,
      medication: <FiPackage size={16} />,
      recommendations: <FiHeart size={16} />,
      observations: <FiEye size={16} />,
      procedures: <FiTool size={16} />,
      diagnosis: <FiSearch size={16} />,
      notes: <FiEdit3 size={16} />,
    };
    return icons[fieldType] || <FiClipboard size={16} />;
  };

  const renderFieldValue = (value) => {
    if (!value || value === null || value === undefined || value === "") {
      return <FieldValue className="empty">Não informado</FieldValue>;
    }

    return <FieldValue>{value}</FieldValue>;
  };

  if (loading) {
    return (
      <ConsultationWrapper>
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Carregando consultas...</LoadingText>
        </LoadingContainer>
      </ConsultationWrapper>
    );
  }

  if (error) {
    return (
      <ConsultationWrapper>
        <ErrorContainer>
          <ErrorIcon>
            <FiAlertCircle />
          </ErrorIcon>
          <ErrorText>Ops! Ocorreu um erro ao carregar as consultas.</ErrorText>
          <RetryButton onClick={fetchConsultations}>
            <FiRefreshCw size={16} style={{ marginRight: "8px" }} />
            Tentar novamente
          </RetryButton>
        </ErrorContainer>
      </ConsultationWrapper>
    );
  }

  if (!consultations || consultations.length === 0) {
    return (
      <ConsultationWrapper>
        <ConsultationHeader>
          <HeaderContent>
            <HeaderInfo>
              <HeaderTitle>Consultas Médicas</HeaderTitle>
              <HeaderSubtitle>
                Visualize e gerencie as consultas realizadas
              </HeaderSubtitle>
            </HeaderInfo>
          </HeaderContent>
        </ConsultationHeader>

        <EmptyState>
          <EmptyIcon>
            <FiFileText />
          </EmptyIcon>
          <EmptyText>
            Nenhuma consulta encontrada no momento.
            <br />
            As consultas aparecerão aqui quando forem realizadas.
          </EmptyText>
        </EmptyState>
      </ConsultationWrapper>
    );
  }

  return (
    <ConsultationWrapper>
      <ConsultationHeader>
        <HeaderContent>
          <HeaderInfo>
            <HeaderTitle>Consultas Médicas</HeaderTitle>
            <HeaderSubtitle>
              {consultations.length} consulta
              {consultations.length !== 1 ? "s" : ""} encontrada
              {consultations.length !== 1 ? "s" : ""}
            </HeaderSubtitle>
          </HeaderInfo>
        </HeaderContent>
      </ConsultationHeader>

      <ConsultationGrid>
        {consultations.map((consultation) => (
          <ConsultationCard key={consultation.id}>
            <ConsultationCardHeader>
              <ConsultationId>Consulta #{consultation.id}</ConsultationId>
              <ConsultationDate>
                <FiCalendar size={16} style={{ marginRight: "6px" }} />
                {formatDate(consultation.date_time)}
              </ConsultationDate>
            </ConsultationCardHeader>

            <PatientInfo>
              <PatientId>
                <FiUser size={16} style={{ marginRight: "8px" }} />
                Paciente ID: {consultation.patient_id}
              </PatientId>
            </PatientInfo>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("reason")}
                Motivo da Consulta
              </FieldLabel>
              {renderFieldValue(consultation.reason_for_consultation)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("symptoms")}
                Sintomas
              </FieldLabel>
              {renderFieldValue(consultation.symptoms)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("medication")}
                Medicação Prescrita
              </FieldLabel>
              {renderFieldValue(consultation.prescribed_medication)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("recommendations")}
                Recomendações Médicas
              </FieldLabel>
              {renderFieldValue(consultation.medical_recommendations)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("observations")}
                Observações do Médico
              </FieldLabel>
              {renderFieldValue(consultation.doctor_observations)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("procedures")}
                Procedimentos Realizados
              </FieldLabel>
              {renderFieldValue(consultation.performed_procedures)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("diagnosis")}
                Diagnóstico
              </FieldLabel>
              {renderFieldValue(consultation.diagnosis)}
            </ConsultationField>

            <ConsultationField>
              <FieldLabel>
                {getFieldIcon("notes")}
                Observações Adicionais
              </FieldLabel>
              {renderFieldValue(consultation.additional_notes)}
            </ConsultationField>
          </ConsultationCard>
        ))}
      </ConsultationGrid>
    </ConsultationWrapper>
  );
};

export default ConsultationPage;
