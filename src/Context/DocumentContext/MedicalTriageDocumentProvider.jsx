import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import { DocumentContext } from "../DocumentContext/context";

export const MedicalTriageDocumentProvider = ({ children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ReadOneRegister } = useCrud();
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Buscar dados do paciente quando o componente carrega
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        setIsLoading(true);

        // Verificar se o ID é válido antes de fazer a requisição
        if (!id) {
          console.error("ID do paciente não fornecido");
          toast.error("ID do paciente não fornecido");
          navigate("/list-patients");
          return;
        }

        const decodedId = atob(id);

        const endpoint = `${import.meta.env.VITE_API_BASE_URL}${
          import.meta.env.VITE_API_PATIENT_ENDPOINT
        }`;

        const result = await ReadOneRegister({
          endpoint,
          params: decodedId,
        });

        if (result.success) {
          setPatientData(result.data);
        } else {
          console.error("Erro ao buscar dados do paciente:", result.error);
          toast.error("Erro ao carregar dados do paciente");
          navigate("/list-patients");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do paciente:", error);
        toast.error("Erro ao carregar dados do paciente");
        navigate("/list-patients");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, [id, ReadOneRegister, navigate]);

  // Função para navegar para o formulário de consulta
  const handleStartConsultation = () => {
    navigate(`/consultation-form/${id}`);
  };

  // Função para voltar para a lista médica
  const handleBackToList = () => {
    navigate("/list-patients");
  };

  if (isLoading) {
    return null; // Ou um spinner
  }

  if (!patientData) {
    return null;
  }

  const { data } = patientData;

  // Dados do paciente - buscar tanto do objeto user quanto diretamente do data
  const patientDisplayData = {
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
    zip_code: data?.user?.zip_code || data?.zip_code || "CEP não informado",
    city: data?.user?.city || data?.city || "Cidade não informada",
    neighborhood:
      data?.user?.neighborhood || data?.neighborhood || "Bairro não informado",
    street: data?.user?.street || data?.street || "Rua não informada",
    apartment:
      data?.user?.apartment || data?.apartment || "Apartamento não informado",
  };

  // Dados de triagem - buscar diretamente do data
  const triageData = {
    blood_pressure: data?.blood_pressure || "Não informado",
    heart_rate: data?.heart_rate || "Não informado",
    temperature: data?.temperature || "Não informado",
    oxygen_saturation: data?.oxygen_saturation || "Não informado",
    respiratory_rate: data?.respiratory_rate || "Não informado",
    chief_complaint: data?.chief_complaint || "Não informado",
    patient_condition: data?.patient_condition || "mild",
    pain_type: data?.pain_type || "Não informado",
    pain_scale: data?.pain_scale || "Não informado",
    surgery_history: data?.surgery_history || "Não informado",
    allergy: data?.allergy || "Não informado",
    blood_type: data?.blood_type || "Não informado",
    emergency_phone: data?.emergency_phone || "Não informado",
    responsible_name: data?.responsible_name || "Não informado",
  };

  // Verificar se há dados de triagem válidos
  const hasTriageData = Object.values(triageData).some(
    (value) => value !== "Não informado"
  );

  const contextValue = {
    formData: {}, // Não há dados de formulário neste contexto
    patientData: patientData,
    patientDisplayData,
    triageData,
    consultationData: null, // Não há dados de consulta neste contexto
    hasTriageData,
    hasConsultationData: false,
    formType: "medical-triage-view", // Tipo especial para visualização médica
    handleConfirm: handleStartConsultation, // Botão "Confirmar" leva para consulta
    handleEdit: handleBackToList, // Botão "Editar" volta para lista
  };

  return (
    <DocumentContext.Provider value={contextValue}>
      {children}
    </DocumentContext.Provider>
  );
};
