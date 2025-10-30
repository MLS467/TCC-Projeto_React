import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import useAuth from "@/Hook/useAuth";
import { toast } from "sonner";
import * as yup from "yup";
import LoadingDashboard from "@/components/Dashboard/LoadingDashboard";
import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { UpdateWrapper, FormContainer, FormGrid } from "./style";

const roleFields = {
  attendant: ["name", "email", "phone", "cpf"],
  nurse: ["name", "email", "phone", "coren"],
  doctor: ["name", "email", "phone", "crm", "especialidade"],
};

// Schemas de validação baseados no tipo de funcionário
const createValidationSchema = (role, formData = {}) => {
  // Campos comuns para todos os tipos
  const baseSchema = {
    name: yup
      .string()
      .required("Nome é obrigatório")
      .min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    phone: yup
      .string()
      .required("Telefone é obrigatório")
      .min(10, "Telefone deve ter pelo menos 10 dígitos"),
  };

  // Campos opcionais baseados na presença no formData
  if (formData.sex !== undefined) {
    baseSchema.sex = yup
      .string()
      .required("Sexo é obrigatório")
      .oneOf(["masculino", "feminino"], "Sexo deve ser Masculino ou Feminino");
  }

  if (formData.birth !== undefined) {
    baseSchema.birth = yup
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
      );
  }

  if (formData.place_of_birth !== undefined) {
    baseSchema.place_of_birth = yup
      .string()
      .required("Local de nascimento é obrigatório")
      .min(2, "Local de nascimento deve ter pelo menos 2 caracteres");
  }

  // Campos específicos por tipo de funcionário
  switch (role?.toLowerCase()) {
    case "doctor":
      // Campos obrigatórios para médico
      baseSchema.crm = yup
        .string()
        .required("CRM é obrigatório")
        .min(4, "CRM deve ter pelo menos 4 caracteres");

      baseSchema.especialidade = yup
        .string()
        .required("Especialidade é obrigatória")
        .min(2, "Especialidade deve ter pelo menos 2 caracteres");
      break;

    case "nurse":
      // Campos obrigatórios para enfermeiro
      baseSchema.coren = yup
        .string()
        .required("COREN é obrigatório")
        .min(4, "COREN deve ter pelo menos 4 caracteres");

      // Campos opcionais para enfermeiro
      if (formData.specialization !== undefined) {
        baseSchema.specialization = yup
          .string()
          .required("Especialização é obrigatória")
          .min(2, "Especialização deve ter pelo menos 2 caracteres");
      }

      if (formData.level !== undefined) {
        baseSchema.level = yup
          .string()
          .required("Nível é obrigatório")
          .oneOf(["Técnico", "Superior", "Especialista"], "Nível inválido");
      }
      break;

    case "attendant":
      // Campos obrigatórios para atendente
      baseSchema.cpf = yup
        .string()
        .required("CPF é obrigatório")
        .length(11, "CPF deve ter 11 dígitos");
      break;
  }

  return yup.object().shape(baseSchema);
};

const fieldLabels = {
  name: "Nome",
  email: "E-mail",
  phone: "Telefone",
  cpf: "CPF",
  coren: "COREN",
  crm: "CRM",
  especialidade: "Especialidade",
  specialization: "Especialização",
  level: "Nível",
  photo: "Foto",
  id: "ID",
  id_user: "ID Usuário",
  id_attendant: "ID Atendente",
  sex: "Sexo",
  birth: "Data de nascimento",
  place_of_birth: "Local de nascimento",
  city: "Cidade",
  neighborhood: "Bairro",
  street: "Rua",
  block: "Bloco",
  apartment: "Apartamento",
  role: "Função",
  flag: "Flag",
  id_administrator_fk: "ID Administrador",
  active: "Ativo",
  age: "Idade",
  user: "Usuário",
  work_shift: "Turno de trabalho",
  postal_code: "CEP",
  number: "Número",
  state: "Estado",
  status: "Status",
};

const EmployeeUpdate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, role } = location.state || {};
  const { ReadOneRegister, Update } = useCrud();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const roleLower = role?.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      if (!id || !roleLower) {
        toast.error("Dados insuficientes para editar!");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await ReadOneRegister({
          endpoint: `/${roleLower}`.toLowerCase(),
          params: id,
        });
        if (response.success) {
          let newForm = { ...response.data.data.user, ...response.data.data };
          // Pega o id do usuário logado, decodifica com atob
          let adminId = "";
          if (user && user.id) {
            try {
              adminId = atob(user.id);
            } catch {
              adminId = user.id;
            }
          }
          newForm.id_administrator_fk = adminId;
          // Calcular idade a partir da data de nascimento
          if (newForm.birth) {
            const birthDate = new Date(newForm.birth);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
            }
            newForm.age = age;
          }
          // Exibir 'Sim' ou 'Não' para ativo
          if (typeof newForm.active !== "undefined") {
            newForm.active = String(newForm.active) === "1" ? "Sim" : "Não";
          }
          setForm(newForm);
        } else {
          toast.error("Erro ao carregar dados!");
        }
      } catch {
        toast.error("Erro ao buscar dados!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, roleLower, ReadOneRegister, user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValidationErrors({});

    try {
      // Debug: Log dos dados antes da validação
      console.log("Role:", roleLower);
      console.log("Form data:", form);
      console.log("Especialidade value:", form.especialidade);
      console.log("Specialty value:", form.specialty);
      console.log("Keys in form:", Object.keys(form));

      // Teste básico de validação
      if (!form.name || form.name.trim() === "") {
        throw new Error("Nome é obrigatório");
      }
      if (!form.email || form.email.trim() === "") {
        throw new Error("Email é obrigatório");
      }

      // Validação específica por tipo
      if (roleLower === "doctor") {
        if (!form.crm || form.crm.trim() === "") {
          throw new Error("CRM é obrigatório");
        }
        // Verifica especialidade (pode ser 'especialidade' ou 'specialty')
        const especialidade = form.especialidade || form.specialty;
        console.log("Validando especialidade:", {
          especialidade: form.especialidade,
          specialty: form.specialty,
          combined: especialidade,
          length: especialidade?.length,
          trimmed: especialidade?.trim(),
          trimmedLength: especialidade?.trim()?.length,
        });

        if (!especialidade || especialidade.trim() === "") {
          throw new Error("Especialidade é obrigatória");
        }
      } else if (roleLower === "nurse") {
        if (!form.coren || form.coren.trim() === "") {
          throw new Error("COREN é obrigatório");
        }
      } else if (roleLower === "attendant") {
        if (!form.cpf || form.cpf.trim() === "") {
          throw new Error("CPF é obrigatório");
        }
      }

      console.log("Validação passou!");

      const payload = { ...form };
      const response = await Update({
        endpoint: `/${roleLower}`,
        id: id,
        data: payload,
      });

      if (response.success) {
        toast.success("Dados atualizados com sucesso!");
      } else {
        toast.error("Erro ao atualizar!");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        // Erros de validação do Yup
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);

        // Mostra apenas o primeiro erro encontrado com toast
        const firstError = error.inner[0];
        if (firstError) {
          toast.error(
            `${fieldLabels[firstError.path] || firstError.path}: ${
              firstError.message
            }`
          );
        }
      } else if (
        error.message &&
        (error.message.includes("obrigatório") ||
          error.message.includes("obrigatória") ||
          error.message.includes("inválido") ||
          error.message.includes("inválida"))
      ) {
        // Erro de validação simples
        console.log("Erro de validação:", error.message);
        toast.error(error.message);
      } else {
        console.log("Erro não é de validação:", error);
        console.log(error.message);
        toast.error("Erro ao atualizar!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <UpdateWrapper>
        <LoadingDashboard message="Carregando dados..." />
      </UpdateWrapper>
    );
  }

  // Para attendant, mostrar todos os campos do form como input, exceto os ids que serão hidden
  let fields = roleFields[roleLower] || [];
  let hiddenFields = [];
  // Campos que não devem aparecer na tela
  const excludedFields = [
    "id",
    "flag",
    "id_administrator_fk",
    "user_id",
    "user",
    "email_verified_at",
    "created_at",
    "updated_at",
    "reset_token",
    "reset_token_expires",
  ];
  if (roleLower === "attendant" && form) {
    fields = Object.keys(form).filter(
      (key) =>
        !["id", "id_user", "id_attendant", ...excludedFields].includes(key)
    );
    // Garante que 'age' apareça se existir no form
    if (form.age && !fields.includes("age")) {
      fields.push("age");
    }
    hiddenFields = Object.keys(form).filter((key) =>
      ["id", "id_user", "id_attendant"].includes(key)
    );
  } else if (form) {
    fields = Object.keys(form).filter((key) => !excludedFields.includes(key));
    // Garante que 'age' apareça se existir no form
    if (form.age && !fields.includes("age")) {
      fields.push("age");
    }
  }

  const roleTitle =
    roleLower === "attendant"
      ? "Atendente"
      : roleLower === "nurse"
      ? "Enfermeiro"
      : "Médico";

  return (
    <UpdateWrapper>
      <CommonHeaderForm
        title={`Editar ${roleTitle}`}
        description={`Atualize as informações do ${roleTitle.toLowerCase()}`}
        showRequiredNotice={true}
      />

      <FormContainer>
        <SectionTitleBox title="Informações Pessoais">
          <form onSubmit={handleSubmit}>
            {/* Campos ocultos se for atendente */}
            {roleLower === "attendant" &&
              hiddenFields.map((field) => (
                <input
                  key={field}
                  type="hidden"
                  name={field}
                  value={form[field] || ""}
                  readOnly
                />
              ))}

            <FormGrid>
              {/* Campos visíveis com nomes legíveis */}
              {fields.map((field) =>
                field === "photo" ? (
                  <InputForm
                    key={field}
                    title={fieldLabels[field] || field}
                    type="file"
                    name={field}
                    accept="image/*"
                  />
                ) : field === "sex" ? (
                  <div key={field}>
                    <label>{fieldLabels[field] || field}</label>
                    <select
                      name={field}
                      value={form[field] || ""}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: validationErrors[field]
                          ? "2px solid red"
                          : "1px solid #ccc",
                      }}
                    >
                      <option value="">Selecione o sexo</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                    </select>
                    {validationErrors[field] && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {validationErrors[field]}
                      </span>
                    )}
                  </div>
                ) : field === "level" ? (
                  <div key={field}>
                    <label>{fieldLabels[field] || field}</label>
                    <select
                      name={field}
                      value={form[field] || ""}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: validationErrors[field]
                          ? "2px solid red"
                          : "1px solid #ccc",
                      }}
                    >
                      <option value="">Selecione o nível</option>
                      <option value="Técnico">Técnico</option>
                      <option value="Superior">Superior</option>
                      <option value="Especialista">Especialista</option>
                    </select>
                    {validationErrors[field] && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {validationErrors[field]}
                      </span>
                    )}
                  </div>
                ) : (
                  <InputForm
                    key={field}
                    title={fieldLabels[field] || field}
                    type={
                      field === "email"
                        ? "email"
                        : field === "birth"
                        ? "date"
                        : "text"
                    }
                    name={field}
                    value={form[field] || ""}
                    handleInput={handleChange}
                    placeholder={`Digite o ${(
                      fieldLabels[field] || field
                    ).toLowerCase()}`}
                    required={roleFields[roleLower]?.includes(field)}
                    error={validationErrors[field]}
                  />
                )
              )}
            </FormGrid>

            <FormButtons
              onCancel={handleCancel}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </form>
        </SectionTitleBox>
      </FormContainer>
    </UpdateWrapper>
  );
};

export default EmployeeUpdate;
