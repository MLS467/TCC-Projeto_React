import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import LoadingDashboard from "@/components/Dashboard/LoadingDashboard";
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
  EmptyState,
  EmptyIcon,
  EmptyText,
  ErrorContainer,
  ErrorIcon,
  ErrorText,
  RetryButton,
  FilterContainer,
  FilterRow,
  FilterLabel,
  SearchInput,
  ClearButton,
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
  FiX,
} from "react-icons/fi";

const ConsultationPage = () => {
  const { ReadAll } = useCrud();
  const [consultations, setConsultations] = useState([]);
  const [filteredConsultations, setFilteredConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchConsultations = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await ReadAll({ endpoint: "/medical-record" });

      if (response.success && response.data) {
        const consultationData = response.data.data || response.data;
        setConsultations(consultationData);
        setFilteredConsultations(consultationData);
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

  // Reaplica o filtro quando as consultas mudarem
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [consultations]);

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
      patient: <FiUser size={16} />,
      vitals: <FiActivity size={16} />,
      condition: <FiClipboard size={16} />,
    };
    return icons[fieldType] || <FiClipboard size={16} />;
  };

  const renderFieldValue = (value, isBoolean = false) => {
    if (isBoolean) {
      return <FieldValue>{value ? "Sim" : "Não"}</FieldValue>;
    }

    if (
      !value ||
      value === null ||
      value === undefined ||
      value === "" ||
      value === "Não informado"
    ) {
      return <FieldValue className="empty">Não informado</FieldValue>;
    }

    return <FieldValue>{value}</FieldValue>;
  };

  const formatGender = (gender) => {
    const genderMap = {
      male: "Masculino",
      female: "Feminino",
      other: "Outro",
    };
    return genderMap[gender] || gender;
  };

  const formatCondition = (condition) => {
    const conditionMap = {
      serious: "Grave",
      moderate: "Moderado",
      stable: "Estável",
      critical: "Crítico",
    };
    return conditionMap[condition] || condition;
  };

  // Função de filtro
  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredConsultations(consultations);
      return;
    }

    const filtered = consultations.filter((consultation) => {
      const searchLower = term.toLowerCase();
      return (
        consultation.full_name?.toLowerCase().includes(searchLower) ||
        consultation.cpf?.includes(term) ||
        consultation.id?.toLowerCase().includes(searchLower) ||
        consultation.chief_complaint?.toLowerCase().includes(searchLower) ||
        consultation.reason_for_consultation
          ?.toLowerCase()
          .includes(searchLower) ||
        consultation.symptoms?.toLowerCase().includes(searchLower) ||
        consultation.diagnosis?.toLowerCase().includes(searchLower)
      );
    });

    setFilteredConsultations(filtered);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredConsultations(consultations);
  };

  if (loading) {
    return (
      <ConsultationWrapper>
        <LoadingDashboard
          message="Carregando consultas..."
          subtext="Buscando informações médicas do sistema"
        />
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
              {filteredConsultations.length} consulta
              {filteredConsultations.length !== 1 ? "s" : ""} encontrada
              {filteredConsultations.length !== 1 ? "s" : ""}
              {searchTerm && ` (de ${consultations.length} total)`}
            </HeaderSubtitle>
          </HeaderInfo>
        </HeaderContent>
      </ConsultationHeader>

      <FilterContainer>
        <FilterRow>
          <div style={{ flex: 1 }}>
            <FilterLabel>Buscar Consultas</FilterLabel>
            <SearchInput
              type="text"
              placeholder="Busque por nome do paciente, CPF, ID da consulta, queixa, sintomas ou diagnóstico..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {searchTerm && (
            <ClearButton onClick={clearSearch}>
              <FiX size={16} />
              Limpar
            </ClearButton>
          )}
        </FilterRow>
      </FilterContainer>

      {filteredConsultations.length === 0 && searchTerm ? (
        <EmptyState>
          <EmptyIcon>
            <FiSearch />
          </EmptyIcon>
          <EmptyText>
            Nenhuma consulta encontrada para &ldquo;{searchTerm}&rdquo;.
            <br />
            Tente buscar por nome do paciente, CPF ou outros termos.
          </EmptyText>
        </EmptyState>
      ) : (
        <ConsultationGrid>
          {filteredConsultations.map((consultation) => (
            <ConsultationCard key={consultation.id}>
              <ConsultationCardHeader>
                <ConsultationId>Consulta #{consultation.id}</ConsultationId>
              </ConsultationCardHeader>

              <ConsultationDate style={{ marginBottom: "16px" }}>
                <FiCalendar size={16} style={{ marginRight: "6px" }} />
                {formatDate(consultation.consultation_datetime)}
              </ConsultationDate>

              <PatientInfo>
                <PatientId>
                  <FiUser size={16} style={{ marginRight: "8px" }} />
                  {consultation.full_name} - CPF: {consultation.cpf}
                </PatientId>
              </PatientInfo>

              {/* Informações Pessoais */}
              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("patient")}
                  Informações Pessoais
                </FieldLabel>
                {renderFieldValue(
                  `${formatGender(consultation.gender)} - ${
                    consultation.birth_date
                  } - ${consultation.phone}`
                )}
              </ConsultationField>

              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("patient")}
                  Endereço
                </FieldLabel>
                {renderFieldValue(
                  `${consultation.street}, ${consultation.block} - ${consultation.apartment}, ${consultation.neighborhood} - ${consultation.city}`
                )}
              </ConsultationField>

              {/* Sinais Vitais */}
              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("vitals")}
                  Sinais Vitais
                </FieldLabel>
                {renderFieldValue(
                  `PA: ${consultation.blood_pressure} | FC: ${consultation.heart_rate}bpm | Temp: ${consultation.temperature}°C | SPO2: ${consultation.oxygen_saturation}% | FR: ${consultation.respiratory_rate}irpm`
                )}
              </ConsultationField>

              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("condition")}
                  Tipo Sanguíneo e Condição
                </FieldLabel>
                {renderFieldValue(
                  `${consultation.blood_type} - Condição: ${formatCondition(
                    consultation.patient_condition
                  )}`
                )}
              </ConsultationField>

              {/* Queixa e Sintomas */}
              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("reason")}
                  Queixa Principal
                </FieldLabel>
                {renderFieldValue(consultation.chief_complaint)}
              </ConsultationField>

              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("symptoms")}
                  Sintomas Observados
                </FieldLabel>
                {renderFieldValue(
                  `Sangramento: ${
                    consultation.bleeding ? "Sim" : "Não"
                  } | Dificuldade respiratória: ${
                    consultation.difficulty_breathing ? "Sim" : "Não"
                  } | Edema: ${consultation.edema ? "Sim" : "Não"} | Náusea: ${
                    consultation.nausea ? "Sim" : "Não"
                  } | Vômito: ${consultation.vomiting ? "Sim" : "Não"}`
                )}
              </ConsultationField>

              {/* Histórico Médico */}
              <ConsultationField>
                <FieldLabel>
                  {getFieldIcon("notes")}
                  Alergias e Histórico Cirúrgico
                </FieldLabel>
                {renderFieldValue(
                  `Alergias: ${consultation.allergy} | Cirurgias: ${consultation.surgery_history}`
                )}
              </ConsultationField>

              {/* Consulta */}
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
                  Sintomas Relatados
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
      )}
    </ConsultationWrapper>
  );
};

export default ConsultationPage;
