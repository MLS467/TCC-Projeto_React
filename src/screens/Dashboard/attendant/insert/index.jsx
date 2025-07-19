import { useState } from "react";
import useCrud from "@/Hook/useCrud";
import useAuth from "@/Hook/useAuth";
import {
  UpdateWrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
} from "../../employeeUpdate/style";
import { toast } from "sonner";

const fieldLabels = {
  name: "Nome",
  email: "E-mail",
  phone: "Telefone",
  cpf: "CPF",
  coren: "COREN",
  crm: "CRM",
  especialidade: "Especialidade",
  photo: "Foto",
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
  active: "Ativo",
  age: "Idade",
};

const excludedFields = [
  "flag",
  "id_administrator_fk",
  "user_id",
  "user",
  "id",
  "id_user",
  "id_attendant",
];

const AttendantForm = () => {
  const { Create } = useCrud();
  const { user } = useAuth();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  // Calcula idade se houver data de nascimento
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...form, [name]: value };
    if (name === "birth" && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      newForm.age = age;
    }
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const payload = {
        ...form,
        id_administrator_fk: adminId,
        active: form.active === "1" ? 1 : 0,
        role: "attendant",
      };
      const response = await Create({
        endpoint: "/attendant",
        data: payload,
      });
      if (response.success) {
        toast.success("Atendente cadastrado com sucesso!");
        setForm({});
      } else {
        toast.error("Erro ao cadastrar atendente!");
      }
    } catch {
      toast.error("Erro ao cadastrar atendente!");
    } finally {
      setLoading(false);
    }
  };

  // Campos do formulário
  const fields = [
    "name",
    "email",
    "phone",
    "cpf",
    "sex",
    "birth",
    "place_of_birth",
    "city",
    "neighborhood",
    "street",
    "block",
    "apartment",
    "photo",
    "active",
  ];

  return (
    <UpdateWrapper>
      <Title>Cadastrar Atendente</Title>
      <Form onSubmit={handleSubmit}>
        {fields
          .filter((field) => !excludedFields.includes(field))
          .map((field) =>
            field === "photo" ? (
              <Label key={field} htmlFor={field}>
                {fieldLabels[field] || field}
                <Input
                  as="input"
                  type="file"
                  id={field}
                  name={field}
                  accept="image/*"
                  onChange={handleChange}
                />
              </Label>
            ) : field === "active" ? (
              <Label key={field} htmlFor={field}>
                {fieldLabels[field] || field}
                <select
                  id={field}
                  name={field}
                  value={form[field] || ""}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
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
        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </Form>
    </UpdateWrapper>
  );
};

export default AttendantForm;
