import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import { DocumentContext } from "./context";
import { v4 } from "uuid";

export const DocumentProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Insert } = useCrud();
  const [documentId, setDocumentId] = useState(null);

  // Pegar dados do state do router
  const { formData, patientData, endpoint, formType, showTriageOnly } =
    location.state || {};

  // Função para mapear dados do paciente
  const mapPatientData = (data, formData) => {
    // Lidar com diferentes estruturas de dados
    // FormTriageContext: data.original.data
    // FormConsultationContext: data.user ou data
    const userData = data?.original?.data || data?.user || data || {};

    return {
      full_name: userData.name || formData.name || "Nome não informado",
      cpf: userData.cpf || formData.cpf || "CPF não informado",
      email: userData.email || formData.email || "Email não informado",
      gender: userData.sex || formData.sex || "Sexo não informado",
      birth_date: userData.birth || formData.birth || "Data não informada",
      phone: userData.phone || formData.phone || "Telefone não informado",
      city: userData.city || formData.city || "Cidade não informada",
      neighborhood:
        userData.neighborhood ||
        formData.neighborhood ||
        "Bairro não informado",
      street: userData.street || formData.street || "Rua não informada",
      block:
        userData.block ||
        userData.apartment ||
        formData.apartment ||
        "Número não informado",
      apartment:
        userData.apartment || formData.apartment || "Apartamento não informado",
    };
  };

  // Função para mapear dados de triagem
  const mapTriageData = (data, formData) => ({
    blood_type: data?.blood_type || formData.blood_type || "Não informado",
    blood_pressure:
      data?.blood_pressure || formData.blood_pressure || "Não informado",
    heart_rate: data?.heart_rate || formData.heart_rate || "Não informado",
    respiratory_rate:
      data?.respiratory_rate || formData.respiratory_rate || "Não informado",
    oxygen_saturation:
      data?.oxygen_saturation || formData.oxygen_saturation || "Não informado",
    temperature: data?.temperature || formData.temperature || "Não informado",
    chief_complaint:
      data?.chief_complaint || formData.chief_complaint || "Não informado",
    patient_condition:
      data?.patient_condition || formData.patient_condition || "mild",
    bleeding:
      data?.bleeding === true ||
      data?.bleeding === 1 ||
      formData.bleeding === true ||
      formData.bleeding === 1
        ? 1
        : 0,
    difficulty_breathing:
      data?.difficulty_breathing === true ||
      data?.difficulty_breathing === 1 ||
      formData.difficulty_breathing === true ||
      formData.difficulty_breathing === 1
        ? 1
        : 0,
    edema:
      data?.edema === true ||
      data?.edema === 1 ||
      formData.edema === true ||
      formData.edema === 1
        ? 1
        : 0,
    nausea:
      data?.nausea === true ||
      data?.nausea === 1 ||
      formData.nausea === true ||
      formData.nausea === 1
        ? 1
        : 0,
    vomiting:
      data?.vomiting === true ||
      data?.vomiting === 1 ||
      formData.vomiting === true ||
      formData.vomiting === 1
        ? 1
        : 0,
    allergy: data?.allergy || formData.allergy || "Não informado",
    surgery_history:
      data?.surgery_history || formData.surgery_history || "Não informado",
  });

  // Função para mapear dados de consulta
  const mapConsultationData = (formData) => ({
    reason_for_consultation:
      formData.reason_for_consultation || "Não informado",
    symptoms: formData.symptoms || "Não informado",
    consultation_datetime: formData.date_time || new Date().toISOString(),
    prescribed_medication: formData.prescribed_medication || "Não informado",
    medical_recommendations:
      formData.medical_recommendations || "Não informado",
    doctor_observations: formData.doctor_observations || "Não informado",
    performed_procedures: formData.performed_procedures || "Não informado",
    diagnosis: formData.diagnosis || "Não informado",
    additional_notes: formData.additional_notes || "Não informado",
  });

  // Se não tem dados, redireciona para dashboard
  useEffect(() => {
    if (!formData && formType !== "view-only") {
      toast.error("Nenhum dado de formulário encontrado!");
      navigate("/dashboard");
    }
  }, [formData, formType, navigate]);

  const formConsultation = async () => {
    try {
      // Gerar ID único para o documento/histórico médico
      const medicalRecordId = v4();
      setDocumentId(medicalRecordId);

      // 1. Primeira requisição - Dados da consulta
      const consultationResult = await Insert({
        endpoint,
        data: formData,
      });

      if (!consultationResult.success) {
        throw new Error(
          consultationResult.error || "Erro ao enviar consulta médica!"
        );
      }

      // 2. Preparar dados combinados para o histórico médico
      const patientDbData = patientData?.data || patientData || {};

      const combinedData = {
        id: medicalRecordId,
        ...mapPatientData(patientDbData, formData),
        ...mapTriageData(patientDbData, formData),
        ...mapConsultationData(formData),
      };

      // 3. Segunda requisição - Histórico médico
      const medicalRecordResult = await Insert({
        endpoint: `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_API_MEDICAL_RECORD_ENDPOINT
        }`,
        data: combinedData,
      });

      if (!medicalRecordResult.success) {
        console.warn(
          "⚠️ Erro ao criar histórico médico:",
          medicalRecordResult.error
        );
        toast.warning(
          "Consulta salva, mas houve erro ao criar histórico médico"
        );
      } else {
        toast.success("Consulta e histórico médico salvos com sucesso!");
      }

      navigate("/success");
    } catch (error) {
      console.error("❌ Erro no processo de confirmação:", error);
      toast.error(error.message || "Erro ao processar consulta médica!");
    }
  };

  const formTriage = async () => {
    const result = await Insert({
      endpoint,
      data: formData,
    });

    if (result.success) {
      // Mensagem de sucesso específica quando os dados vêm de triage-form
      toast.success("Formulário de triagem enviado com sucesso!");
      navigate("/nurse-patient-list");
    } else {
      toast.error(result.error || "Erro ao enviar formulário de triagem!");
      throw new Error(result.error || "Erro ao enviar formulário de triagem!");
    }
  };
  // alert(formType);
  // Função para confirmar e enviar os dados
  const handleConfirm = async () => {
    if (formType === "consultation") {
      // confirmar consulta
      await formConsultation();
    } else {
      // outros formulários
      await formTriage();
    }
  };

  // Função para voltar e editarb
  const handleEdit = () => {
    if (formType === "view-only") {
      navigate(-1);
    } else if (formType === "consultation") {
      // Pega o id do paciente (user_id) e codifica em base64
      const patientId = patientData?.data?.id;
      const encodedId = patientId ? btoa(patientId) : "";
      navigate(`/consultation-form/${encodedId}`, {
        state: {
          formData: formData,
        },
      });
    } else {
      navigate(
        `/triage-form/${
          btoa(formData.user_id) || btoa(patientData?.data?.user?.id)
        }`,
        {
          state: {
            formData: formData, // ou formData: formTriage, dependendo de onde está
          },
        }
      );
    }
  };

  // Se não tem dados e não é view-only, não renderiza os children
  if (!formData && formType !== "view-only") {
    return null;
  }

  const { data } = patientData || {};

  // Dados do paciente - lidar com diferentes estruturas de dados
  // FormTriageContext: patientData.data.original.data (endpoint /user)
  // FormConsultationContext: patientData.data.user ou patientData.data (endpoint /patient)

  const userData =
    patientData?.data?.original?.data || // Estrutura do /user (FormTriageContext)
    patientData?.data?.user || // Estrutura do /patient (FormConsultationContext)
    patientData?.data || // Fallback
    patientData || // Último fallback
    {};

  const patientDisplayData =
    patientData && (userData.name || userData.id)
      ? {
          name: userData?.name || "Nome não informado",
          birth: userData?.birth || "Data não informada",
          cpf: userData?.cpf || "CPF não informado",
          phone: userData?.phone || "Telefone não informado",
          email: userData?.email || "Email não informado",
          place_of_birth:
            userData?.place_of_birth || "Cidade natal não informada",
          sex: userData?.sex || "Sexo não informado",
          zip_code: userData?.zip_code || "CEP não informado",
          city: userData?.city || "Cidade não informada",
          neighborhood: userData?.neighborhood || "Bairro não informado",
          street: userData?.street || "Rua não informada",
          apartment:
            userData?.apartment ||
            userData?.block ||
            "Apartamento não informado",
          age: userData?.age || "Idade não informada",
        }
      : {
          name:
            formData.first_name && formData.last_name
              ? `${formData.first_name} ${formData.last_name}`
              : formData.name || "Nome não informado",
          birth: formData.birth || "Data não informada",
          cpf: formData.cpf || "CPF não informado",
          phone: formData.phone || "Telefone não informado",
          email: formData.email || "Email não informado",
          place_of_birth:
            formData.place_of_birth || "Cidade natal não informada",
          sex: formData.sex || "Sexo não informado",
          zip_code: formData.zip_code || "CEP não informado",
          city: formData.city || "Cidade não informada",
          neighborhood: formData.neighborhood || "Bairro não informado",
          street: formData.street || "Rua não informada",
          apartment: formData.apartment || "Apartamento não informado",
          age: formData.age || "Idade não informada",
        };

  // Dados de triagem - buscar da API ou dos dados do formulário
  // Para consultation form: busca dados de triagem já salvos do banco
  // Para triage form: usa dados do formulário atual
  const triageData = {
    blood_pressure:
      formData.blood_pressure || data?.blood_pressure || "Não informado",
    heart_rate: formData.heart_rate || data?.heart_rate || "Não informado",
    temperature: formData.temperature || data?.temperature || "Não informado",
    oxygen_saturation:
      formData.oxygen_saturation || data?.oxygen_saturation || "Não informado",
    respiratory_rate:
      formData.respiratory_rate || data?.respiratory_rate || "Não informado",
    chief_complaint:
      formData.chief_complaint || data?.chief_complaint || "Não informado",
    patient_condition:
      formData.patient_condition || data?.patient_condition || "mild",
    pain_type: formData.pain_type || data?.pain_type || "Não informado",
    pain_scale: formData.pain_scale || data?.pain_scale || "Não informado",
    surgery_history:
      formData.surgery_history || data?.surgery_history || "Não informado",
    allergy: formData.allergy || data?.allergy || "Não informado",
    blood_type: formData.blood_type || data?.blood_type || "Não informado",
    emergency_phone:
      formData.emergency_phone || data?.emergency_phone || "Não informado",
    responsible_name:
      formData.responsible_name || data?.responsible_name || "Não informado",
    difficulty_breathing:
      formData.difficulty_breathing === true ||
      formData.difficulty_breathing === 1 ||
      data?.difficulty_breathing === true ||
      data?.difficulty_breathing === 1
        ? "Sim"
        : "Não",
    nausea:
      formData.nausea === true ||
      formData.nausea === 1 ||
      data?.nausea === true ||
      data?.nausea === 1
        ? "Sim"
        : "Não",
    vomiting:
      formData.vomiting === true ||
      formData.vomiting === 1 ||
      data?.vomiting === true ||
      data?.vomiting === 1
        ? "Sim"
        : "Não",
    bleeding:
      formData.bleeding === true ||
      formData.bleeding === 1 ||
      data?.bleeding === true ||
      data?.bleeding === 1
        ? "Sim"
        : "Não",
    edema:
      formData.edema === true ||
      formData.edema === 1 ||
      data?.edema === true ||
      data?.edema === 1
        ? "Sim"
        : "Não",
  };

  // Dados de consulta
  const consultationData = formData.reason_for_consultation
    ? {
        reason_for_consultation:
          formData.reason_for_consultation || "Não informado",
        symptoms: formData.symptoms || "Não informado",
        date_time: formData.date_time || "Não informado",
        prescribed_medication:
          formData.prescribed_medication || "Não informado",
        medical_recommendations:
          formData.medical_recommendations || "Não informado",
        doctor_observations: formData.doctor_observations || "Não informado",
      }
    : null;

  // Verificar se há dados de triagem válidos
  const hasTriageData =
    Object.values(triageData).some((value) => value !== "Não informado") ||
    (formType === "consultation" && patientData?.data); // Para consultation, sempre mostrar triagem se houver dados do paciente

  // Verificar se há dados de consulta válidos
  const hasConsultationData =
    consultationData &&
    Object.values(consultationData).some((value) => value !== "Não informado");

  const contextValue = {
    formData,
    patientData,
    patientDisplayData,
    triageData,
    consultationData,
    hasTriageData,
    hasConsultationData,
    formType,
    showTriageOnly,
    documentId,
    handleConfirm,
    handleEdit,
  };

  return (
    <DocumentContext.Provider value={contextValue}>
      {children}
    </DocumentContext.Provider>
  );
};
