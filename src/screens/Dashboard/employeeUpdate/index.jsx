import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useCrud from "@/Hook/useCrud";
import useAuth from "@/Hook/useAuth";
import { UpdateWrapper, Title, Form, Label, Input, Button } from "./style";
import { toast } from "sonner";
import LoadingDashboard from "@/components/Dashboard/LoadingDashboard";

const roleFields = {
  attendant: ["name", "email", "phone", "cpf"],
  nurse: ["name", "email", "phone", "coren"],
  doctor: ["name", "email", "phone", "crm", "especialidade"],
};

const fieldLabels = {
  name: "Nome",
  email: "E-mail",
  phone: "Telefone",
  cpf: "CPF",
  coren: "COREN",
  crm: "CRM",
  especialidade: "Especialidade",
  photo: "Foto",
  id: "ID",
  id_user: "ID Usuário",
  id_attendant: "ID Atendente",
  email_verified_at: "E-mail verificado em",
  sex: "Sexo",
  birth: "Data de nascimento",
  place_of_birth: "Naturalidade",
  city: "Cidade",
  neighborhood: "Bairro",
  street: "Rua",
  block: "Bloco",
  apartment: "Apartamento",
  role: "Função",
  flag: "Flag",
  created_at: "Criado em",
  updated_at: "Atualizado em",
  id_administrator_fk: "ID Administrador",
  active: "Ativo",
  age: "Idade",
  user: "Usuário",
};

const EmployerUpdate = () => {
  const location = useLocation();
  const { id, role } = location.state || {};
  const { ReadOneRegister, Update } = useCrud();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({});

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
    try {
      setLoading(true);
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
    } catch {
      toast.error("Erro ao atualizar!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <UpdateWrapper>
        <LoadingDashboard message="Carregando médicos..." />
      </UpdateWrapper>
    );
  }

  // Para attendant, mostrar todos os campos do form como input, exceto os ids que serão hidden
  let fields = roleFields[roleLower] || [];
  let hiddenFields = [];
  // Campos que não devem aparecer na tela
  const excludedFields = ["flag", "id_administrator_fk", "user_id", "user"];
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

  return (
    <UpdateWrapper>
      <Title>
        Editar{" "}
        {roleLower === "attendant"
          ? "Atendente"
          : roleLower === "nurse"
          ? "Enfermeiro"
          : "Médico"}
      </Title>

      <Form onSubmit={handleSubmit}>
        {/* Campos ocultos se for atendente */}
        {roleLower === "attendant" &&
          hiddenFields.map((field) => (
            <Input
              key={field}
              type="hidden"
              id={field}
              name={field}
              value={form[field] || ""}
              readOnly
            />
          ))}

        {/* Campos visíveis com nomes legíveis */}
        {fields.map((field) =>
          field === "photo" ? (
            <Label key={field} htmlFor={field}>
              {fieldLabels[field] || field}
              <Input
                as="input"
                type="file"
                id={field}
                name={field}
                accept="image/*"
              />
            </Label>
          ) : (
            <Label key={field} htmlFor={field}>
              {fieldLabels[field] || field}
              <Input
                id={field}
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Label>
          )
        )}

        <Button type="submit">Salvar</Button>
      </Form>
    </UpdateWrapper>
  );
};

export default EmployerUpdate;
