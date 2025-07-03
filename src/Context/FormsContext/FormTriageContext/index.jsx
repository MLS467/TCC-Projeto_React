import { useState } from "react";
import { useParams } from "react-router-dom";
import useCrud from "../../../Hook/useCrud";
import { toast } from "sonner";
import { triageTestData } from "../../../screens/Forms/triageForm/trash";
import { FormTriageContext } from "./context";

export const FormTriageProvider = ({ children }) => {
  const { id } = useParams();
  const { Insert } = useCrud();

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

  const handleForm = async () => {
    const form_data = {
      ...formTriage,
      blood_pressure: formTriage.blood_pressure.replace("/", "."),
    };

    const endpoint = import.meta.env.VITE_API_PATIENT_ENDPOINT;

    const result = await Insert({
      endpoint,
      data: form_data,
    });

    if (result.success) {
      toast.success("Formulário de triagem enviado com sucesso!");
      // Aqui você pode adicionar navegação se necessário
      // navigate("/success");
    } else {
      toast.error(result.error || "Erro ao enviar formulário de triagem!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm();
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
  };

  return (
    <FormTriageContext.Provider value={contextValue}>
      {children}
    </FormTriageContext.Provider>
  );
};
