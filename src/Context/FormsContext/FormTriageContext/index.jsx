import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
// import { triageTestData } from "@/screens/Forms/triageForm/trash"; // Removido para produção
import { FormTriageContext } from "./context";

export const FormTriageProvider = ({ children }) => {
  const { id } = useParams();
  const location = useLocation();
  const { Insert, ReadOneRegister } = useCrud();
  const navigate = useNavigate();

  // Estado para dados do paciente
  const [patientData, setPatientData] = useState(null);

  const [formTriage, setFormTriage] = useState({
    // Sinais Vitais
    user_id: id ? atob(id) : null,
    blood_pressure: "",
    heart_rate: "",
    temperature: "",
    oxygen_saturation: "",
    respiratory_rate: "",

    // Informações sobre a Dor
    chief_complaint: "",
    pain_type: "",
    pain_scale: "",

    // Histórico Clínico
    surgery_history: "",
    allergy: "",
    blood_type: "",
    patient_condition: "mild", // Estado/condição do paciente - valor padrão "mild"

    // Dados Emergenciais
    emergency_phone: "",
    responsible_name: "",
    responsible_specialist: "", // Especialidade Médica Indicada

    // Outros Sintomas (Checkboxes)
    difficulty_breathing: false,
    nausea: false,
    vomiting: false,
    bleeding: false,
    edema: false,
  });

  useEffect(() => {
    if (location.state?.formData) {
      setFormTriage((prev) => ({
        ...prev,
        ...location.state.formData,
      }));
    }
  }, [location.state, setFormTriage]);

  // Buscar dados do paciente quando o componente carrega
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        // Verificar se o ID é válido antes de fazer a requisição
        if (!id) {
          console.error("ID do paciente não fornecido");
          toast.error("ID do paciente não fornecido");
          return;
        }

        const decodedId = atob(id);

        // Lógica simples: se é FormTriageContext (nurse), usar /user
        const isTriageForm = true; // Este contexto é sempre para triagem (nurse)
        const endpoint = isTriageForm
          ? `${import.meta.env.VITE_API_BASE_URL}${
              import.meta.env.VITE_API_USER_ENDPOINT
            }`
          : `${import.meta.env.VITE_API_BASE_URL}${
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
        }
      } catch (error) {
        console.error("Erro ao buscar dados do paciente:", error);
        toast.error("Erro ao carregar dados do paciente");
      }
    };

    fetchPatientData();
  }, [id, ReadOneRegister, location.key]);

  const submitFormData = async (formData, endpoint) => {
    const result = await Insert({
      endpoint,
      data: formData,
    });

    if (result.success) {
      toast.success("Formulário de triagem enviado com sucesso!");
      navigate("/nurse-patient-list");
    } else {
      toast.error(result.error || "Erro ao enviar formulário de triagem!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Preparar dados do form para envio
    const form_data = {
      ...formTriage,
      blood_pressure: formTriage.blood_pressure.replace("/", "."),
    };

    // Navegar para document-data com os dados do form E do paciente
    navigate("/document-data", {
      state: {
        formData: form_data,
        patientData: patientData, // Dados completos do paciente
        formType: "triage",
        endpoint: import.meta.env.VITE_API_PATIENT_ENDPOINT,
      },
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormTriage({
      ...formTriage,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const cancelForm = () => {
    navigate("/nurse-patient-list");
  };

  // Função temporária para testes - removida em produção
  const fillTestData = () => {
    // const randomData =
    //   triageTestData[Math.floor(Math.random() * triageTestData.length)];
    // setFormTriage((prevData) => ({
    //   ...prevData,
    //   ...randomData,
    //   user_id: id ? atob(id) : null, // Manter o user_id original
    // }));
    toast.info("Função de teste desabilitada em produção!");
  };

  const clearForm = () => {
    setFormTriage({
      // Sinais Vitais
      user_id: id ? atob(id) : null,
      blood_pressure: "",
      heart_rate: "",
      temperature: "",
      oxygen_saturation: "",
      respiratory_rate: "",

      // Informações sobre a Dor
      chief_complaint: "",
      pain_type: "",
      pain_scale: "",

      // Histórico Clínico
      surgery_history: "",
      allergy: "",
      blood_type: "",
      patient_condition: "mild", // Valor padrão para evitar null/undefined

      // Dados Emergenciais
      emergency_phone: "",
      responsible_name: "",

      // Outros Sintomas (Checkboxes)
      difficulty_breathing: false,
      nausea: false,
      vomiting: false,
      bleeding: false,
      edema: false,
    });
  };

  const contextValue = {
    formTriage,
    setFormTriage,
    handleSubmit,
    handleInputChange,
    fillTestData,
    clearForm,
    submitFormData,
    cancelForm,
  };

  return (
    <FormTriageContext.Provider value={contextValue}>
      {children}
    </FormTriageContext.Provider>
  );
};
