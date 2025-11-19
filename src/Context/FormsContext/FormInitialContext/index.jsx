import { createContext, useEffect, useState, useContext } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { ChildRequestContext } from "@/Context/Service/ChildRequestContext";
import { useNavigate, useLocation } from "react-router-dom";

export const FormInitialContext = createContext({});

export const FormInitialProvider = ({ children }) => {
  const { api } = useContext(ChildRequestContext);
  const location = useLocation();

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

  // Effect para preencher dados vindos da verificação CNS
  useEffect(() => {
    if (location.state?.userData) {
      const userData = location.state.userData;
      console.log("Dados recebidos:", userData);

      let mappedData = { ...patientData };

      // Verificar se é estrutura FHIR ou dados simples
      if (userData.resourceType === "Patient") {
        // Estrutura FHIR
        const firstName = userData.name?.[0]?.given?.[0] || "";
        const lastName = userData.name?.[0]?.family || "";
        const fullName =
          userData.name?.[0]?.text || `${firstName} ${lastName}`.trim();

        // Extrair CPF dos identifiers
        const cpfIdentifier = userData.identifier?.find(
          (id) => id.system === "http://saude.gov.br/cpf"
        );
        const cpf = cpfIdentifier?.value || "";

        // Extrair telefone
        const phoneContact = userData.telecom?.find(
          (contact) => contact.system === "phone"
        );
        const phone = phoneContact?.value
          ? phoneContact.value.replace(/\D/g, "")
          : "";

        // Extrair endereço
        const address = userData.address?.[0];
        const street = address?.line?.[0] || "";
        const city = address?.city || "";
        const postalCode = address?.postalCode?.replace(/\D/g, "") || "";

        // Gerar email baseado no nome
        const email =
          firstName && lastName
            ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@cns.com`
            : "";

        mappedData = {
          ...patientData,
          first_name: firstName,
          last_name: lastName,
          name: fullName,
          birth: userData.birthDate || "",
          place_of_birth: city,
          sex: userData.gender || "",
          cpf: cpf,
          phone: phone,
          email: email,
          zip_code: postalCode,
          city: city,
          neighborhood: "",
          street: street,
          block: "",
          apartment: "",
          current_city: city,
        };
      } else {
        // Dados simples
        mappedData = {
          ...patientData,
          first_name: userData.first_name || "",
          last_name: userData.last_name || "",
          name: userData.name || userData.full_name || "",
          birth: userData.birth || userData.birth_date || "",
          place_of_birth: userData.place_of_birth || userData.birthplace || "",
          sex: userData.sex || userData.gender || "",
          cpf: userData.cpf || "",
          phone: (userData.phone || userData.telephone || "").replace(
            /\D/g,
            ""
          ),
          email: userData.email || "",
          zip_code: userData.zip_code || userData.cep || "",
          city: userData.city || "",
          neighborhood: userData.neighborhood || userData.district || "",
          street: userData.street || userData.address || "",
          block: userData.block || "",
          apartment: userData.apartment || userData.number || "",
          current_city: userData.current_city || "",
        };
      }

      setFormData(mappedData);
      toast.success("Dados preenchidos automaticamente!");
    }
  }, [location.state]);
  const ClearForm = () => {
    setFormData(patientData);
  };

  const handlePatient = async (data) => {
    try {
      const endpointPatient = import.meta.env.VITE_API_USER_ENDPOINT;
      const response = await api.post(endpointPatient, data);
      setFormData(formData);

      const serverMessage =
        response?.data?.message ||
        response?.data?.messages?.[0] ||
        "Paciente cadastrado com sucesso!";
      toast.success(serverMessage);

      ClearForm();
      navigate("/optional-initial-form");
    } catch (error) {
      console.error("Erro ao cadastrar paciente:", error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.messages?.[0] ||
        error?.response?.data?.error ||
        "Erro ao cadastrar paciente, tente novamente!";
      toast.error(errorMessage);
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
        .test(
          "phone-validation",
          "O telefone deve ter entre 8 e 15 dígitos",
          function (value) {
            if (!value) return false;
            const cleanPhone = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
            return cleanPhone.length >= 8 && cleanPhone.length <= 15;
          }
        ),
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
    let value = e.target.value;

    // Se for o campo de telefone, remove todos os caracteres não numéricos
    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleCep = async (e) => {
    const cep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep && cep.length === 8) {
      try {
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

  return (
    <FormInitialContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        handlePatient,
        ClearForm,
        handleCep,
      }}
    >
      {children}
    </FormInitialContext.Provider>
  );
};
