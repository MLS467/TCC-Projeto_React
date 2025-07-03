import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useCrud from "../../Hook/useCrud";
import { toast } from "sonner";
import { DocumentContext } from "./context";

export const DocumentProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Insert } = useCrud();

  // Pegar dados do state do router
  const { formData, patientData, endpoint } = location.state || {};

  // Se não tem dados, redireciona para dashboard
  useEffect(() => {
    if (!formData) {
      toast.error("Nenhum dado de formulário encontrado!");
      navigate("/dashboard");
    }
  }, [formData, navigate]);

  // Função para confirmar e enviar os dados
  const handleConfirm = async () => {
    const result = await Insert({
      endpoint,
      data: formData,
    });

    if (result.success) {
      toast.success("Formulário de triagem enviado com sucesso!");
      navigate("/success");
    } else {
      toast.error(result.error || "Erro ao enviar formulário de triagem!");
    }
  };

  // Função para voltar e editar
  const handleEdit = () => {
    navigate(-1); // Volta para o form anterior
  };

  // Se não tem dados, não renderiza os children
  if (!formData) {
    return null;
  }

  const { data } = patientData || {};

  // Dados do paciente - usar dados vindos do contexto ou fallback
  const patientDisplayData =
    patientData && data
      ? {
          name: data.user?.name || "Nome não informado",
          birth: data.user?.birth || "Data não informada",
          cpf: data.user?.cpf || "CPF não informado",
          phone: data.user?.phone || "Telefone não informado",
          email: data.user?.email || "Email não informado",
          place_of_birth:
            data.user?.place_of_birth || "Cidade natal não informada",
          sex: data.user?.sex || "Sexo não informado",
          zip_code: data.user?.zip_code || "CEP não informado",
          city: data.user?.city || "Cidade não informada",
          neighborhood: data.user?.neighborhood || "Bairro não informado",
          street: data.user?.street || "Rua não informada",
          apartment: data.user?.apartment || "Apartamento não informado",
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
        };

  // Dados de triagem
  const triageData = {
    blood_pressure: formData.blood_pressure || "Não informado",
    heart_rate: formData.heart_rate || "Não informado",
    temperature: formData.temperature || "Não informado",
    oxygen_saturation: formData.oxygen_saturation || "Não informado",
    respiratory_rate: formData.respiratory_rate || "Não informado",
    chief_complaint: formData.chief_complaint || "Não informado",
    patient_condition: formData.patient_condition || "Não informado",
  };

  const contextValue = {
    formData,
    patientData,
    patientDisplayData,
    triageData,
    handleConfirm,
    handleEdit,
  };

  return (
    <DocumentContext.Provider value={contextValue}>
      {children}
    </DocumentContext.Provider>
  );
};
