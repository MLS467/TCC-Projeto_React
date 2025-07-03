import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCrud from "../../../Hook/useCrud";
import { toast } from "sonner";
import { triageTestData } from "../../../screens/Forms/triageForm/trash";
import { FormTriageContext } from "./context";

export const FormTriageProvider = ({ children }) => {
  const { id } = useParams();
  const { Insert, ReadOneRegister } = useCrud();
  const navigate = useNavigate();

  // Estado para dados do paciente
  const [patientData, setPatientData] = useState(null);

  const [formTriage, setFormTriage] = useState({
    // Sinais Vitais
    user_id: atob(id),
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
    patient_condition: "", // Estado/condição do paciente

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

  // Buscar dados do paciente quando o componente carrega
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const result = await ReadOneRegister({
          endpoint: `${import.meta.env.VITE_API_BASE_URL}/patient`,
          id: atob(id),
        });

        if (result.success) {
          setPatientData(result.data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do paciente:", error);
      }
    };

    fetchPatientData();
  }, [id, ReadOneRegister]);

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

  // Função temporária para testes - remover em produção
  const fillTestData = () => {
    const randomData =
      triageTestData[Math.floor(Math.random() * triageTestData.length)];
    setFormTriage((prevData) => ({
      ...prevData,
      ...randomData,
      user_id: atob(id), // Manter o user_id original
    }));
    toast.success("Dados de teste preenchidos!");
  };

  const clearForm = () => {
    setFormTriage({
      // Sinais Vitais
      user_id: atob(id),
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
      patient_condition: "",

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
  };

  return (
    <FormTriageContext.Provider value={contextValue}>
      {children}
    </FormTriageContext.Provider>
  );
};
