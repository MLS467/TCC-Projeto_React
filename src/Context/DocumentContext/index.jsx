import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import { DocumentContext } from "./context";

export const DocumentProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Insert } = useCrud();

  // Pegar dados do state do router
  const { formData, patientData, endpoint, formType, showTriageOnly } =
    location.state || {};

  // Se não tem dados, redireciona para dashboard
  useEffect(() => {
    if (!formData && formType !== "view-only") {
      toast.error("Nenhum dado de formulário encontrado!");
      navigate("/dashboard");
    }
  }, [formData, formType, navigate]);

  // Função para confirmar e enviar os dados
  const handleConfirm = async () => {
    const result = await Insert({
      endpoint,
      data: formData,
    });

    if (result.success) {
      const successMessage =
        formType === "consultation"
          ? "Consulta médica enviada com sucesso!"
          : "Formulário de triagem enviado com sucesso!";

      toast.success(successMessage);

      // Navegar para página apropriada baseada no tipo
      if (formType === "consultation") {
        navigate("/success");
      } else {
        navigate("/nurse-patient-list");
      }
    } else {
      const errorMessage =
        formType === "consultation"
          ? "Erro ao enviar consulta médica!"
          : "Erro ao enviar formulário de triagem!";

      toast.error(result.error || errorMessage);
    }
  };

  // Função para voltar e editar
  const handleEdit = () => {
    if (formType === "view-only") {
      navigate(-1); // Volta para o consultation form
    } else {
      navigate(-1); // Volta para o form anterior
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

  // Debug: Log dos dados para verificação (pode ser removido em produção)
  console.log("🚀 DocumentContext - Dados carregados:", {
    formType,
    patientDisplayData,
    triageData: Object.keys(triageData).length,
    consultationData: consultationData
      ? Object.keys(consultationData).length
      : 0,
    hasTriageData,
    hasConsultationData,
  });

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
    handleConfirm,
    handleEdit,
  };

  return (
    <DocumentContext.Provider value={contextValue}>
      {children}
    </DocumentContext.Provider>
  );
};
