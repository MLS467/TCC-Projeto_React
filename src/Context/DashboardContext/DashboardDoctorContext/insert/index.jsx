import useCrud from "@/Hook/useCrud";
import { DashboardDoctorContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import * as yup from "yup";

// Schema de validação Yup para médico
const doctorSchema = yup.object().shape({
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
  crm: yup
    .string()
    .required("CRM é obrigatório")
    .min(4, "CRM deve ter pelo menos 4 caracteres"),
  specialty: yup
    .string()
    .required("Especialidade é obrigatória")
    .min(2, "Especialidade deve ter pelo menos 2 caracteres"),
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
  state: yup
    .string()
    .required("Estado é obrigatório")
    .length(2, "Estado deve ter 2 caracteres"),
  status: yup
    .string()
    .required("Status é obrigatório")
    .oneOf(["active", "inactive"], "Status deve ser ativo ou inativo"),
});

const DashboardDoctorInsertProvider = ({ children }) => {
  const { Insert } = useCrud();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birth: "",
    sex: "",
    crm: "",
    specialty: "",
    work_shift: "",
    postal_code: "",
    street: "",
    number: "",
    place_of_birth: "",
    neighborhood: "",
    city: "",
    state: "",
    status: "active",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setPhotoFile(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setValidationErrors({});

    try {
      // Validação com Yup
      await doctorSchema.validate(formData, { abortEarly: false });

      let adminId = "";
      if (user && user.id) {
        try {
          adminId = atob(user.id);
        } catch {
          adminId = user.id;
        }
      }

      // Criar FormData se houver foto
      let dataToSend;
      if (photoFile) {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });
        formDataToSend.append("photo", photoFile);
        formDataToSend.append("password", "password");
        formDataToSend.append("id_administrator_fk", adminId);
        formDataToSend.append("active", formData.status === "active" ? 1 : 0);
        formDataToSend.append("role", "doctor");
        dataToSend = formDataToSend;
      } else {
        dataToSend = {
          ...formData,
          password: "password",
          id_administrator_fk: adminId,
          active: formData.status === "active" ? 1 : 0,
          role: "doctor",
        };
      }

      const response = await Insert({
        endpoint: "/doctor",
        data: dataToSend,
      });

      console.log(response);
      if (response.success) {
        toast.success("Médico cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          birth_date: "",
          birth: "",
          sex: "",
          place_of_birth: "",
          crm: "",
          specialty: "",
          work_shift: "",
          postal_code: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          state: "",
          status: "active",
        });
        setPhotoFile(null);
      } else {
        toast.error("Erro ao cadastrar médico!");
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
        toast.error("Erro ao cadastrar médico!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPhotoFile(null);
    setIsModalVisible(false);
    navigate("/dashboard/medico");
  };

  return (
    <DashboardDoctorContext.Provider
      value={{
        isModalVisible,
        formData,
        loading,
        validationErrors,
        handleInputChange,
        handleSubmit,
        handleCancel,
        photoFile,
      }}
    >
      {children}
    </DashboardDoctorContext.Provider>
  );
};

export default DashboardDoctorInsertProvider;
