import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import { MedicalRecordDocumentContext } from "./context";

export const MedicalRecordDocumentProvider = ({ children }) => {
  const { id } = useParams();
  const { ReadOneRegister } = useCrud();

  const [isLoading, setIsLoading] = useState(true);
  const [medicalRecordData, setMedicalRecordData] = useState(null);
  const [error, setError] = useState(null);

  // Função para mapear dados do paciente
  const mapPatientData = (data) => {
    return {
      full_name: data?.full_name || "Nome não informado",
      cpf: data?.cpf || "CPF não informado",
      email: data?.email || "Email não informado",
      gender: data?.gender || "Sexo não informado",
      birth_date: data?.birth_date || "Data não informada",
      phone: data?.phone || "Telefone não informado",
      city: data?.city || "Cidade não informada",
      neighborhood: data?.neighborhood || "Bairro não informado",
      street: data?.street || "Rua não informada",
      block: data?.block || "Número não informado",
      apartment: data?.apartment || "Apartamento não informado",
    };
  };

  // Função para mapear dados de triagem
  const mapTriageData = (data) => {
    return {
      blood_type: data?.blood_type || "Não informado",
      blood_pressure: data?.blood_pressure || "Não informado",
      heart_rate: data?.heart_rate || "Não informado",
      respiratory_rate: data?.respiratory_rate || "Não informado",
      oxygen_saturation: data?.oxygen_saturation || "Não informado",
      temperature: data?.temperature || "Não informado",
      chief_complaint: data?.chief_complaint || "Não informado",
      patient_condition: data?.patient_condition || "Não informado",
      surgery_history: data?.surgery_history || "Não informado",
      allergy: data?.allergy || "Não informado",
      difficulty_breathing: data?.difficulty_breathing || false,
      nausea: data?.nausea || false,
      vomiting: data?.vomiting || false,
      bleeding: data?.bleeding || false,
      edema: data?.edema || false,
    };
  };

  // Função para mapear dados de consulta
  const mapConsultationData = (data) => {
    return {
      reason_for_consultation: data?.reason_for_consultation || "Não informado",
      symptoms: data?.symptoms || "Não informado",
      consultation_datetime: data?.consultation_datetime || "Não informado",
      prescribed_medication: data?.prescribed_medication || "Não informado",
      medical_recommendations: data?.medical_recommendations || "Não informado",
      doctor_observations: data?.doctor_observations || "Não informado",
      performed_procedures: data?.performed_procedures || "Não informado",
      diagnosis: data?.diagnosis || "Não informado",
      additional_notes: data?.additional_notes || "Não informado",
    };
  };

  // Função para buscar dados do prontuário
  useEffect(() => {
    const fetchMedicalRecordData = async () => {
      if (!id) {
        setError("ID do prontuário não fornecido");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const result = await ReadOneRegister({
          endpoint: `medical-record/show`,
          params: id,
        });

        if (!result || !result.data) {
          throw new Error("Nenhum dado encontrado para este prontuário.");
        }

        // Os dados estão em result.data.data baseado na estrutura fornecida
        const recordData = result.data.data || result.data;
        setMedicalRecordData(recordData);
      } catch (error) {
        console.error("Erro ao buscar dados do prontuário:", error);
        setError(error.message || "Erro ao carregar prontuário");
        toast.error("Erro ao carregar prontuário médico!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicalRecordData();
  }, [id, ReadOneRegister]);

  // Processar dados quando estiverem disponíveis
  const patientDisplayData = medicalRecordData
    ? mapPatientData(medicalRecordData)
    : null;
  const triageData = medicalRecordData
    ? mapTriageData(medicalRecordData)
    : null;
  const consultationData = medicalRecordData
    ? mapConsultationData(medicalRecordData)
    : null;

  // Verificar se existem dados de triagem e consulta
  const hasTriageData =
    triageData &&
    Object.values(triageData).some(
      (value) =>
        value !== "Não informado" &&
        value !== false &&
        value !== null &&
        value !== undefined
    );

  const hasConsultationData =
    consultationData &&
    Object.values(consultationData).some(
      (value) =>
        value !== "Não informado" && value !== null && value !== undefined
    );

  const contextValue = {
    isLoading,
    error,
    medicalRecordData,
    patientDisplayData,
    triageData,
    consultationData,
    hasTriageData,
    hasConsultationData,
    formType: "medical-record-view", // Identificador para este tipo de documento
  };

  return (
    <MedicalRecordDocumentContext.Provider value={contextValue}>
      {children}
    </MedicalRecordDocumentContext.Provider>
  );
};
