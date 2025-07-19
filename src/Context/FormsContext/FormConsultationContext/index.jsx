import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import { FormConsultationContext } from "./context";
import { useLocation } from "react-router-dom";

export const FormConsultationProvider = ({ children }) => {
  const { id } = useParams();
  const { Insert, ReadOneRegister } = useCrud();
  const navigate = useNavigate();

  // Estado para dados do paciente
  const [patientData, setPatientData] = useState(null);
  const [isLoadingPatientData, setIsLoadingPatientData] = useState(true);

  const now = new Date();
  const formatted = now.toISOString().slice(0, 16);

  const [formConsultation, setFormConsultation] = useState({
    patient_id: id ? atob(id) : null,
    reason_for_consultation: "",
    symptoms: "",
    date_time: formatted,
    prescribed_medication: "",
    medical_recommendations: "",
    doctor_observations: "",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state?.formData) {
      setFormConsultation(location.state.formData);
    }
  }, [location.key, location.state]);

  // Buscar dados do paciente quando o componente carrega
  useEffect(() => {
    const fetchPatientData = async () => {
      setIsLoadingPatientData(true);
      try {
        // Verificar se o ID é válido antes de fazer a requisição
        if (!id) {
          console.error("ID do paciente não fornecido");
          toast.error("ID do paciente não fornecido");
          return;
        }

        console.log("ID recebido:", id);
        const decodedId = atob(id);
        console.log("ID decodificado:", decodedId);

        // Para consultation form, buscar dados do patient que contém dados de triagem e user
        const endpoint = `${import.meta.env.VITE_API_BASE_URL}/patient`;

        const result = await ReadOneRegister({
          endpoint,
          params: decodedId,
        });

        if (result.success) {
          setPatientData(result.data);
          console.log(
            "Dados do paciente carregados para consulta:",
            result.data
          );
        } else {
          console.error("Erro ao buscar dados do paciente:", result.error);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do paciente:", error);
        toast.error("Erro ao carregar dados do paciente");
      } finally {
        setIsLoadingPatientData(false);
      }
    };

    fetchPatientData();
  }, [id, ReadOneRegister]);

  const SendFormForConsultation = async () => {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/consultation`;

    const result = await Insert({
      endpoint,
      data: formConsultation,
    });

    if (result.success) {
      toast.success("Formulário enviado com sucesso!");
      navigate("/success");
    } else {
      toast.error(
        result.error || "Erro ao enviar formulário, tente novamente!"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navegar para document-data para revisão dos dados
    navigate("/document-data", {
      state: {
        formData: formConsultation,
        patientData: patientData, // Dados completos do paciente incluindo triagem
        formType: "consultation",
        endpoint: `${import.meta.env.VITE_API_BASE_URL}/consultation`,
      },
    });
  };

  // Função para visualizar apenas os dados de usuário e triagem
  const handleViewData = () => {
    navigate("/document-data", {
      state: {
        formData: {}, // Formulário vazio para visualização apenas dos dados existentes
        patientData: patientData,
        formType: "view-only", // Tipo especial apenas para visualização
        showTriageOnly: true, // Flag para mostrar apenas dados de triagem/usuário
      },
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormConsultation({
      ...formConsultation,
      [name]: value,
    });
  };

  const cancelForm = () => {
    // Navegar de volta para a página anterior
    navigate("/list-patients");
  };

  const clearForm = () => {
    const now = new Date();
    const formatted = now.toISOString().slice(0, 16);

    setFormConsultation({
      patient_id: id ? atob(id) : null,
      reason_for_consultation: "",
      symptoms: "",
      date_time: formatted,
      prescribed_medication: "",
      medical_recommendations: "",
      doctor_observations: "",
    });
  };

  const contextValue = {
    formConsultation,
    setFormConsultation,
    cancelForm,
    handleSubmit,
    handleInputChange,
    handleViewData,
    clearForm,
    SendFormForConsultation, // Mantém função original para compatibilidade
    patientData, // Adiciona os dados do paciente ao contexto
    isLoadingPatientData, // Adiciona o estado de carregamento
  };

  return (
    <FormConsultationContext.Provider value={contextValue}>
      {children}
    </FormConsultationContext.Provider>
  );
};
