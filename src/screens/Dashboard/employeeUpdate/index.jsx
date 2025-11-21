import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import useAuth from "@/Hook/useAuth";
import { toast } from "sonner";

import LoadingDashboard from "@/components/Dashboard/LoadingDashboard";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import FormButtons from "@/components/common/CommonForm/FormButton";
import {
  UpdateWrapper,
  FormContainer,
  FormGrid,
  UpdateHeader,
  HeaderContent,
  HeaderInfo,
  HeaderTitle,
  HeaderSubtitle,
} from "./style";

const roleFields = {
  attendant: ["name", "email", "phone", "cpf"],
  nurse: ["name", "email", "phone", "coren"],
  doctor: ["name", "email", "phone", "crm", "especialidade"],
  administrator: [
    "name",
    "email",
    "phone",
    "cpf",
    "sex",
    "birth",
    "place_of_birth",
    "city",
  ],
  admin: [
    "name",
    "email",
    "phone",
    "cpf",
    "sex",
    "birth",
    "place_of_birth",
    "city",
  ], // endpoint é /adm, mas role pode ser admin
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
  adminId: "ID Admin",
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
        // Ajustar endpoint para admin
        const endpoint =
          roleLower === "administrator" || roleLower === "admin"
            ? "/adm"
            : `/${roleLower}`;
        const response = await ReadOneRegister({
          endpoint: endpoint,
          params: id,
        });
        if (response.success) {
          let newForm = { ...response.data.data.user, ...response.data.data };
          // Pega o id do usuário logado, decodifica com atob
          let adminId = "";
          if (user && user.id) {
            try {
              adminId = atob(user.id);
            } catch (error) {
              adminId = user.id;
            }
          } else {
            toast.error("User não encontrado:", user);
          }

          // Só define o id_administrator_fk se tiver um adminId válido
          if (adminId && adminId !== "" && adminId !== "0") {
            newForm.id_administrator_fk = adminId;
            console.log("ID administrador definido:", adminId);
          } else {
            console.log("ID administrador inválido, removendo do form");
            // Remove o campo para não enviar um valor inválido
            delete newForm.id_administrator_fk;
          }
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
          // Manter o valor 1/0 para o select de ativo
          if (typeof newForm.active !== "undefined") {
            newForm.active = String(newForm.active);
          }
          console.log("EmployeeUpdate - Form final:", newForm);
          setForm(newForm);
        } else {
          console.log("EmployeeUpdate - Erro na resposta:", response);
          toast.error("Erro ao carregar dados!");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do funcionário:", error);
        toast.error("Erro ao buscar dados!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, roleLower, ReadOneRegister, user]);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        console.log("Arquivo selecionado:", file.name, file.size);
        setForm({ ...form, [e.target.name]: file });
      } else {
        console.log("Nenhum arquivo selecionado");
        // Remove a propriedade photo se nenhum arquivo foi selecionado
        const newForm = { ...form };
        delete newForm[e.target.name];
        setForm(newForm);
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValidationErrors({});

    try {
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
      } else if (roleLower === "administrator" || roleLower === "admin") {
        if (!form.cpf || form.cpf.trim() === "") {
          throw new Error("CPF é obrigatório");
        }
        if (!form.sex || form.sex.trim() === "") {
          throw new Error("Sexo é obrigatório");
        }
        if (form.sex && !["masculino", "feminino"].includes(form.sex)) {
          throw new Error("Sexo deve ser 'masculino' ou 'feminino'");
        }
        if (!form.birth || form.birth.trim() === "") {
          throw new Error("Data de nascimento é obrigatória");
        }
        if (!form.place_of_birth || form.place_of_birth.trim() === "") {
          throw new Error("Local de nascimento é obrigatório");
        }
        if (!form.city || form.city.trim() === "") {
          throw new Error("Cidade é obrigatória");
        }
      }

      // Preparar payload, excluindo photo se não foi selecionada
      const payload = { ...form };

      // Se photo existe e é um arquivo válido, manter; senão, remover do payload
      if (form.photo && form.photo instanceof File && form.photo.size > 0) {
        // Adicionar o campo _method para Laravel quando há upload de arquivo
        payload._method = "PUT";
      } else {
        console.log(
          "Nenhuma foto selecionada ou foto inválida, removendo do payload"
        );
        delete payload.photo;
      }

      // Verificar se id_administrator_fk é válido
      if (
        !payload.id_administrator_fk ||
        payload.id_administrator_fk === "" ||
        payload.id_administrator_fk === "0" ||
        payload.id_administrator_fk === 0
      ) {
        console.log(
          "ID administrador inválido, removendo do payload:",
          payload.id_administrator_fk
        );
        delete payload.id_administrator_fk;
      } else {
        console.log("ID administrador válido:", payload.id_administrator_fk);
      }

      // Converter 'active' para número se necessário
      if (payload.active === "1") {
        payload.active = 1;
      } else if (payload.active === "0") {
        payload.active = 0;
      }

      console.log("Payload final:", payload);
      console.log(
        "Campos específicos - sex:",
        payload.sex,
        "birth:",
        payload.birth,
        "place_of_birth:",
        payload.place_of_birth,
        "city:",
        payload.city
      );

      // Ajustar endpoint para admin
      const endpoint =
        roleLower === "administrator" || roleLower === "admin"
          ? "/adm"
          : `/${roleLower}`;
      const response = await Update({
        endpoint: endpoint,
        id: id,
        data: payload,
      });

      if (response.success) {
        toast.success("Dados atualizados com sucesso!");
        navigate(-1);
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

  // Para attendant e administrator, mostrar todos os campos do form como input, exceto os ids que serão hidden
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
  if (
    (roleLower === "attendant" ||
      roleLower === "administrator" ||
      roleLower === "admin") &&
    form
  ) {
    fields = Object.keys(form).filter(
      (key) =>
        ![
          "id",
          "id_user",
          "id_attendant",
          "id_administrator",
          "adminId",
          ...excludedFields,
        ].includes(key)
    );
    if (form.age && !fields.includes("age")) {
      fields.push("age");
    }
    hiddenFields = Object.keys(form).filter((key) =>
      ["id", "id_user", "id_attendant", "id_administrator", "adminId"].includes(
        key
      )
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
      : roleLower === "administrator" || roleLower === "admin"
      ? "Administrador"
      : "Médico";

  return (
    <UpdateWrapper>
      <UpdateHeader>
        <HeaderContent>
          <HeaderInfo>
            <HeaderTitle>Editar {roleTitle}</HeaderTitle>
            <HeaderSubtitle>
              Atualize as informações do {roleTitle.toLowerCase()}
            </HeaderSubtitle>
          </HeaderInfo>
        </HeaderContent>
      </UpdateHeader>

      <FormContainer>
        <SectionTitleBox title="Informações Pessoais">
          <form onSubmit={handleSubmit}>
            {/* Campos ocultos se for atendente ou administrador */}
            {(roleLower === "attendant" ||
              roleLower === "administrator" ||
              roleLower === "admin") &&
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
              {fields
                .filter((field) => field !== "photo")
                .map((field) =>
                  field === "sex" ? (
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
                  ) : field === "active" ? (
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
                        <option value="">Selecione</option>
                        <option value="1">Sim</option>
                        <option value="0">Não</option>
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

            {/* Campo de foto separado no final do formulário */}
            <div style={{ marginTop: "20px" }}>
              <InputForm
                title="Foto"
                type="file"
                name="photo"
                accept="image/*"
                handleInput={handleChange}
              />
            </div>

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
