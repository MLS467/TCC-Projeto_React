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
    .oneOf(["morning", "afternoon", "night", "full_time"], "Turno inválido"),
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
    birth: "",
    sex: "",
    place_of_birth: "",
    coren: "",
    specialization: "",
    work_shift: "",
    postal_code: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    photo: "",
    active: 1,
  });
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    // Se for um input de arquivo
    if (type === "file") {
      const file = files[0];
      if (file) {
        setPhotoFile(file);
        setFormData((prev) => ({ ...prev, [name]: file.name }));
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

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

      // Criar FormData para enviar arquivo
      const formDataToSend = new FormData();

      // Adicionar todos os campos do formulário
      Object.keys(formData).forEach((key) => {
        if (key !== "photo") {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Adicionar campos adicionais
      formDataToSend.append("password", "password");
      formDataToSend.append("id_administrator_fk", adminId);
      formDataToSend.append("active", formData.active);
      formDataToSend.append("role", "nurse");

      // Adicionar o arquivo de foto se existir
      if (photoFile) {
        formDataToSend.append("photo", photoFile);
      }

      const response = await Insert({
        endpoint: "/nurse",
        data: formDataToSend,
      });

      if (response.success) {
        toast.success("Enfermeiro(a) cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          birth: "",
          sex: "",
          place_of_birth: "",
          coren: "",
          specialization: "",
          work_shift: "",
          postal_code: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          photo: "",
          active: 1,
        });
        setPhotoFile(null);
      } else {
        toast.error("Erro ao cadastrar enfermeiro(a)!");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
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
    setPhotoFile(null);
    navigate("/dashboard/enfermeira");
  };

  return (
    <DashboardNurseContext.Provider
      value={{
        isModalVisible,
        formData,
        loading,
        photoFile,
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
