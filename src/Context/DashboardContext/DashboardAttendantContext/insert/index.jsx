import useCrud from "@/Hook/useCrud";
import { DashboardAttendantContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";

const validationSchema = yup.object({
  active: yup.number().integer("O campo ativo deve ser um número inteiro."),
  apartment: yup
    .string()
    .nullable()
    .max(10, "O campo apartamento deve ter no máximo 10 caracteres."),
  birth: yup
    .string()
    .required("O campo nascimento é obrigatório.")
    .test(
      "is-date",
      "O campo nascimento deve ser uma data válida.",
      function (value) {
        if (!value) return false;
        const date = new Date(value);
        return !isNaN(date.getTime());
      }
    )
    .test(
      "is-before-today",
      "A data de nascimento deve ser anterior a hoje.",
      function (value) {
        if (!value) return false;
        const date = new Date(value);
        const today = new Date();
        return date < today;
      }
    ),
  block: yup
    .string()
    .nullable()
    .max(10, "O campo bloco deve ter no máximo 10 caracteres."),
  city: yup
    .string()
    .required("O campo cidade é obrigatório.")
    .max(255, "O campo cidade deve ter no máximo 255 caracteres."),
  cpf: yup
    .string()
    .required("O campo cpf é obrigatório.")
    .matches(/^\d{11}$/, "O campo cpf deve conter exatamente 11 dígitos."),
  email: yup
    .string()
    .required("O campo email é obrigatório.")
    .email("O campo email deve ser um email válido."),
  name: yup
    .string()
    .required("O campo nome é obrigatório.")
    .max(255, "O campo nome deve ter no máximo 255 caracteres."),
  neighborhood: yup
    .string()
    .nullable()
    .max(255, "O campo bairro deve ter no máximo 255 caracteres."),
  phone: yup
    .string()
    .required("O campo telefone é obrigatório.")
    .matches(
      /^\d{10,15}$/,
      "O campo telefone deve conter entre 10 e 15 dígitos."
    ),
  place_of_birth: yup
    .string()
    .required("O campo local de nascimento é obrigatório.")
    .max(255, "O campo local de nascimento deve ter no máximo 255 caracteres."),
  sex: yup
    .string()
    .required("O campo sexo é obrigatório.")
    .oneOf(
      ["masculino", "feminino"],
      "O campo sexo deve ser 'masculino' ou 'feminino'."
    ),
  street: yup
    .string()
    .nullable()
    .max(255, "O campo rua deve ter no máximo 255 caracteres."),
});

const DashboardAttendantInsertProvider = ({ children }) => {
  const { Insert } = useCrud();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    sex: "",
    birth: "",
    place_of_birth: "",
    city: "",
    neighborhood: "",
    street: "",
    block: "",
    apartment: "",
    photo: "",
    active: 1, // Número em vez de string
  });
  const [errors, setErrors] = useState({});
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

    let processedValue = value;

    if (name === "active") {
      processedValue = value === "" ? "" : parseInt(value, 10);
    }

    if (name === "birth" && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData((prev) => ({ ...prev, age }));
      processedValue = value;
    }

    let newForm = { ...formData, [name]: processedValue };

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    setFormData(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    try {
      await validationSchema.validate(formData, { abortEarly: false });
    } catch (validationError) {
      const formattedErrors = {};
      const errorMessages = [];

      validationError.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
        errorMessages.push(`• ${error.message}`);
      });

      setErrors(formattedErrors);

      if (errorMessages.length > 0) {
        const firstError = validationError.inner[0].message;
        toast.error(firstError);
      }

      return;
    }

    setLoading(true);
    try {
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
      formDataToSend.append("active", formData.active === "1" ? 1 : 0);
      formDataToSend.append("role", "attendant");

      // Adicionar o arquivo de foto se existir
      if (photoFile) {
        formDataToSend.append("photo", photoFile);
      }

      const response = await Insert({
        endpoint: "/attendant",
        data: formDataToSend,
      });

      if (response.success) {
        toast.success("Atendente cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          sex: "",
          birth: "",
          place_of_birth: "",
          city: "",
          neighborhood: "",
          street: "",
          block: "",
          apartment: "",
          photo: "",
          active: 1,
        });
        setPhotoFile(null);
        setErrors({});
      } else {
        throw Error("Não foi possível inserir atendente");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setPhotoFile(null);
    navigate("/dashboard/atendente");
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
    setErrors({});
  };

  return (
    <DashboardAttendantContext.Provider
      value={{
        isModalVisible,
        formData,
        errors,
        loading,
        photoFile,
        handleInputChange,
        handleSubmit,
        handleCancel,
        handleOpenModal,
      }}
    >
      {children}
    </DashboardAttendantContext.Provider>
  );
};

export default DashboardAttendantInsertProvider;
