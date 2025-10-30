import useCrud from "@/Hook/useCrud";
import { DashboardNurseContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";

// Schema de validação Yup para enfermeiro(a)
const nurseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .min(10, "Telefone deve ter pelo menos 10 dígitos"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .length(11, "CPF deve ter 11 dígitos"),
  birth_date: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .test("valid-date", "Data de nascimento inválida", function (value) {
      if (!value) return false;
      const date = new Date(value);
      return !isNaN(date.getTime());
    })
    .test(
      "not-future",
      "Data de nascimento não pode ser futura",
      function (value) {
        if (!value) return true;
        const date = new Date(value);
        return date <= new Date();
      }
    ),
  birth: yup
    .string()
    .required("Data de nascimento é obrigatória")
    .test("valid-date", "Data de nascimento inválida", function (value) {
      if (!value) return false;
      const date = new Date(value);
      return !isNaN(date.getTime());
    })
    .test(
      "not-future",
      "Data de nascimento não pode ser futura",
      function (value) {
        if (!value) return true;
        const date = new Date(value);
        return date <= new Date();
      }
    ),
  sex: yup
    .string()
    .required("Sexo é obrigatório")
    .oneOf(["masculino", "feminino"], "Sexo deve ser Masculino ou Feminino"),
  place_of_birth: yup
    .string()
    .required("Local de nascimento é obrigatório")
    .min(2, "Local de nascimento deve ter pelo menos 2 caracteres"),
  coren: yup
    .string()
    .required("COREN é obrigatório")
    .min(4, "COREN deve ter pelo menos 4 caracteres"),
  specialization: yup
    .string()
    .required("Especialização é obrigatória")
    .min(2, "Especialização deve ter pelo menos 2 caracteres"),
  work_shift: yup
    .string()
    .required("Turno de trabalho é obrigatório")
    .oneOf(["Manhã", "Tarde", "Noite", "Integral"], "Turno inválido"),
  level: yup
    .string()
    .required("Nível é obrigatório")
    .oneOf(["Técnico", "Superior", "Especialista"], "Nível inválido"),
  postal_code: yup
    .string()
    .required("CEP é obrigatório")
    .length(8, "CEP deve ter 8 dígitos"),
  street: yup
    .string()
    .required("Rua é obrigatória")
    .min(5, "Rua deve ter pelo menos 5 caracteres"),
  number: yup.string().required("Número é obrigatório"),
  neighborhood: yup
    .string()
    .required("Bairro é obrigatório")
    .min(2, "Bairro deve ter pelo menos 2 caracteres"),
  city: yup
    .string()
    .required("Cidade é obrigatória")
    .min(2, "Cidade deve ter pelo menos 2 caracteres"),
  state: yup
    .string()
    .required("Estado é obrigatório")
    .length(2, "Estado deve ter 2 caracteres"),
  status: yup
    .string()
    .required("Status é obrigatório")
    .oneOf(["active", "inactive"], "Status deve ser ativo ou inativo"),
});

const DashboardNurseInsertProvider = ({ children }) => {
  const { Insert } = useCrud();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birth_date: "",
    birth: "",
    sex: "",
    place_of_birth: "",
    coren: "",
    specialization: "",
    work_shift: "",
    level: "",
    postal_code: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setValidationErrors({});

    try {
      // Validação com Yup
      await nurseSchema.validate(formData, { abortEarly: false });

      let adminId = "";
      if (user && user.id) {
        try {
          adminId = atob(user.id);
        } catch {
          adminId = user.id;
        }
      }

      const payload = {
        ...formData,
        password: "password",
        id_administrator_fk: adminId,
        active: formData.status === "active" ? 1 : 0,
        role: "nurse",
      };

      const response = await Insert({
        endpoint: "/nurse",
        data: payload,
      });

      console.log(response);
      if (response.success) {
        toast.success("Enfermeiro(a) cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          birth_date: "",
          birth: "",
          sex: "",
          place_of_birth: "",
          coren: "",
          specialization: "",
          work_shift: "",
          level: "",
          postal_code: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          state: "",
          status: "active",
        });
      } else {
        toast.error("Erro ao cadastrar enfermeiro(a)!");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        // Erros de validação do Yup
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
        // Mostra apenas o primeiro erro com toast
        if (error.inner.length > 0) {
          toast.error(error.inner[0].message);
        }
      } else {
        console.log(error.message);
        toast.error("Erro ao cadastrar enfermeiro(a)!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/dashboard/enfermeira");
  };

  return (
    <DashboardNurseContext.Provider
      value={{
        isModalVisible,
        formData,
        loading,
        validationErrors,
        handleInputChange,
        handleSubmit,
        handleCancel,
      }}
    >
      {children}
    </DashboardNurseContext.Provider>
  );
};

export default DashboardNurseInsertProvider;
