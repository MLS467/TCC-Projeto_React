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
    const userData = data?.user || data || {};
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
      block: userData.apartment || formData.apartment || "Número não informado",
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
    bleeding: data?.bleeding || formData.bleeding || 0,
    difficulty_breathing:
      data?.difficulty_breathing || formData.difficulty_breathing || 0,
    edema: data?.edema || formData.edema || 0,
    nausea: data?.nausea || formData.nausea || 0,
    vomiting: data?.vomiting || formData.vomiting || 0,
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
      const { data: patientDbData } = patientData || {};

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
      navigate("/nurse-patient-list");
    } else {
      throw new Error();
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

  // Dados do paciente - usar dados vindos do contexto ou fallback
  const patientDisplayData =
    patientData && data
      ? {
          name: data?.user?.name || data?.name || "Nome não informado",
          birth: data?.user?.birth || data?.birth || "Data não informada",
          cpf: data?.user?.cpf || data?.cpf || "CPF não informado",
          phone: data?.user?.phone || data?.phone || "Telefone não informado",
          email: data?.user?.email || data?.email || "Email não informado",
          place_of_birth:
            data?.user?.place_of_birth ||
            data?.place_of_birth ||
            "Cidade natal não informada",
          sex: data?.user?.sex || data?.sex || "Sexo não informado",
          zip_code:
            data?.user?.zip_code || data?.zip_code || "CEP não informado",
          city: data?.user?.city || data?.city || "Cidade não informada",
          neighborhood:
            data?.user?.neighborhood ||
            data?.neighborhood ||
            "Bairro não informado",
          street: data?.user?.street || data?.street || "Rua não informada",
          apartment:
            data?.user?.apartment ||
            data?.apartment ||
            "Apartamento não informado",
          age: data?.user?.age || data?.age || "Idade não informada",
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
      formData.difficulty_breathing ||
      data?.difficulty_breathing ||
      "Não informado",
    nausea: formData.nausea || data?.nausea || "Não informado",
    vomiting: formData.vomiting || data?.vomiting || "Não informado",
    bleeding: formData.bleeding || data?.bleeding || "Não informado",
    edema: formData.edema || data?.edema || "Não informado",
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
