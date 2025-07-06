import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { testData } from "./trash";
import { ChildRequestContext } from "@/Context/Service/ChildRequestContext";
import { useNavigate } from "react-router-dom";

export const FormInitialContext = createContext({});

export const FormInitialProvider = ({ children }) => {
  const { api } = useContext(ChildRequestContext);

  const patientData = {
    place_of_birth: "",
    birth: null,
    city: "",
    cpf: "",
    current_city: "",
    email: "",
    first_name: "",
    last_name: "",
    name: " ",
    neighborhood: "",
    phone: "",
    apartment: "",
    block: "",
    sex: "",
    street: "",
    zip_code: "",
    role: "patient",
    symptoms: "",
  };

  const [formData, setFormData] = useState(patientData);
  const navigate = useNavigate();
  const ClearForm = () => {
    setFormData(patientData);
  };

  const handlePatient = async (data) => {
    try {
      const endpointPatient = import.meta.env.VITE_API_USER_ENDPOINT;
      await api.post(endpointPatient, data);
      setFormData(formData);
      toast.success("Paciente cadastrado com sucesso!");
      ClearForm();
      navigate("/optional-initial-form");
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);
      toast.error("Erro ao cadastrar paciente, tente novamente!");
    }
  };

  useEffect(() => {
    setFormData((prevForm) => ({
      ...prevForm,
      name: `${prevForm.first_name} ${prevForm.last_name}`,
    }));
  }, [formData.first_name, formData.last_name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      name: Yup.string()
        .required("O nome é obrigatório")
        .max(255, "O nome deve ter no máximo 255 caracteres")
        .min(3, "O nome deve ter no mínimo 3 caracteres"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("O e-mail é obrigatório")
        .max(255, "O e-mail deve ter no máximo 255 caracteres"),
      phone: Yup.string()
        .required("O telefone é obrigatório")
        .matches(/^\d{10,15}$/, "O telefone deve ter entre 10 e 15 dígitos"),
      cpf: Yup.string()
        .required("O CPF é obrigatório")
        .matches(/^\d{11}$/, "O CPF deve ter 11 dígitos"),
      sex: Yup.string()
        .required("O sexo é obrigatório")
        .oneOf(["masculino", "feminino", "outro"], "Sexo inválido"),
      place_of_birth: Yup.string()
        .nullable()
        .max(255, "O local de nascimento deve ter no máximo 255 caracteres"),
      city: Yup.string()
        .required("A cidade é obrigatória")
        .max(255, "A cidade deve ter no máximo 255 caracteres"),
      neighborhood: Yup.string()
        .nullable()
        .max(255, "O bairro deve ter no máximo 255 caracteres"),
      street: Yup.string()
        .nullable()
        .max(255, "A rua deve ter no máximo 255 caracteres"),
      block: Yup.string()
        .nullable()
        .max(50, "O bloco deve ter no máximo 50 caracteres"),
      apartment: Yup.string()
        .nullable()
        .max(50, "O apartamento deve ter no máximo 50 caracteres"),
    });

    schema
      .validate(formData, { abortEarly: false })
      .then((res) => {
        handlePatient(res);
      })
      .catch((err) => {
        if (err.inner) {
          err.inner.forEach((error) => {
            toast.error(error.message);
          });
        } else {
          console.error("Erro inesperado:", err);
          toast.error("Erro inesperado durante a validação.");
        }
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData", formData);
  };

  const handleCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    console.log("CEP digitado:", cep);

    if (cep && cep.length === 8) {
      try {
        console.log("Buscando endereço para CEP:", cep);
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);

        if (response?.data && !response.data.erro) {
          setFormData((prevData) => ({
            ...prevData,
            city: response.data.localidade || "",
            neighborhood: response.data.bairro || "",
            street: response.data.logradouro || "",
          }));
          toast.success("Endereço encontrado!");
        } else {
          toast.error("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        toast.error("Erro ao buscar CEP. Tente novamente!");
      }
    }
  };

  // Função temporária para testes - remover em produção
  const fillTestData = () => {
    const randomData = testData[Math.floor(Math.random() * testData.length)];
    setFormData((prevData) => ({
      ...prevData,
      ...randomData,
      name: `${randomData.first_name} ${randomData.last_name}`,
      role: "patient",
    }));
    toast.success("Dados de teste preenchidos!");
  };

  return (
    <FormInitialContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        handlePatient,
        ClearForm,
        handleCep,
        fillTestData, // Função temporária
      }}
    >
      {children}
    </FormInitialContext.Provider>
  );
};
