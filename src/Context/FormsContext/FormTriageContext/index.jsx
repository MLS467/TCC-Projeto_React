import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import { toast } from "sonner";
import * as Yup from "yup";
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
    symptoms: "",

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

    // Schema de validação com Yup para campos obrigatórios
    const validationSchema = Yup.object().shape({
      blood_pressure: Yup.string()
        .required("A pressão arterial é obrigatória")
        .matches(
          /^\d{2,3}\/\d{2,3}$/,
          "Formato inválido. Use o formato 120/80"
        ),
      heart_rate: Yup.string()
        .required("A frequência cardíaca é obrigatória")
        .matches(
          /^\d+(\s*bpm)?$/i,
          "Formato inválido. Use números seguidos de bpm (ex: 72)"
        ),
      temperature: Yup.string()
        .required("A temperatura é obrigatória")
        .matches(
          /^\d{2}(\.\d)?°?C?$/i,
          "Formato inválido. Use o formato 36.5°C"
        ),
      oxygen_saturation: Yup.string()
        .required("A saturação de oxigênio é obrigatória")
        .matches(
          /^\d{1,3}%?$/,
          "Formato inválido. Use números seguidos de % (ex: 98)"
        ),
      respiratory_rate: Yup.string()
        .required("A frequência respiratória é obrigatória")
        .matches(
          /^\d+(\s*rpm)?$/i,
          "Formato inválido. Use números seguidos de rpm (ex: 16)"
        ),
      chief_complaint: Yup.string()
        .required("A queixa principal é obrigatória")
        .min(10, "A queixa principal deve ter pelo menos 10 caracteres"),
      emergency_phone: Yup.string()
        .required("O telefone de emergência é obrigatório")
        .matches(/^\(?[1-9]{2}\)?\s?9?\d{8}$/, "Formato de telefone inválido"),
      responsible_name: Yup.string()
        .required("O nome do responsável é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres"),
      patient_condition: Yup.string()
        .required("O estado/condição do paciente é obrigatório")
        .oneOf(
          ["mild", "moderate", "serious", "critical"],
          "Selecione uma condição válida"
        ),
    });

    // Validar os dados do formulário
    validationSchema
      .validate(formTriage, { abortEarly: false })
      .then((validatedData) => {
        const form_data = {
          ...validatedData,
          blood_pressure: validatedData.blood_pressure.replace("/", "."),
        };

        navigate("/document-data", {
          state: {
            formData: form_data,
            patientData: patientData,
            formType: "triage",
            endpoint: import.meta.env.VITE_API_PATIENT_ENDPOINT,
          },
        });
      })
      .catch((err) => {
        if (err.inner) {
          // Mostrar todos os erros de validação
          err.inner.forEach((error) => {
            toast.error(error.message);
          });
        } else {
          console.error("Erro inesperado:", err);
          toast.error("Erro inesperado durante a validação.");
        }
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
