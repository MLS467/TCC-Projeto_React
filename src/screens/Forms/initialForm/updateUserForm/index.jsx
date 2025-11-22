import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import HeaderNav from "@/components/common/HeaderNav";
import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import CommonSelectInput from "@/components/common/CommonSelectInput";
import FormButtons from "@/components/common/CommonForm/FormButton";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { palette } from "@/constant/colors";
import { UpdateFormWrapper } from "./style";

const UpdateUserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Update } = useCrud();

  const { userData } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    name: "",
    birth: "",
    place_of_birth: "",
    sex: "",
    cpf: "",
    phone: "",
    email: "",
    zip_code: "",
    city: "",
    neighborhood: "",
    street: "",
    block: "",
    apartment: "",
    current_city: "",
    symptoms: "",
    age: "",
  });

  // Carregar dados do usuário nos inputs automaticamente
  useEffect(() => {
    if (userData && userData.data && userData.data.data.length > 0) {
      const user = userData.data.data[0]; // Pegar o primeiro usuário do array

      // Se não tem first_name e last_name, mas tem name, separar o nome
      let firstName = user.first_name || "";
      let lastName = user.last_name || "";

      if ((!firstName || !lastName) && user.name) {
        const nameParts = user.name.trim().split(" ");
        if (nameParts.length >= 2) {
          firstName = firstName || nameParts[0];
          lastName = lastName || nameParts.slice(1).join(" ");
        } else if (nameParts.length === 1) {
          firstName = firstName || nameParts[0];
        }
      }

      const mappedData = {
        first_name: firstName,
        last_name: lastName,
        name: user.name || "",
        birth: user.birth || "",
        place_of_birth: user.place_of_birth || "",
        sex: user.sex || "",
        cpf: user.cpf || "",
        phone: user.phone || "",
        email: user.email || "",
        zip_code: user.zip_code || "",
        city: user.city || "",
        neighborhood: user.neighborhood || "",
        street: user.street || "",
        block: user.block || "",
        apartment: user.apartment || "",
        current_city: user.current_city || "",
        symptoms: user.symptoms || "",
        age: user.age || "",
      };

      setFormData(mappedData);
      setInitialLoading(false);
    } else {
      setInitialLoading(false);
    }
  }, [userData]);

  // Se não tem dados do usuário, redireciona
  useEffect(() => {
    if (!initialLoading && !userData) {
      toast.error("Dados do usuário não encontrados!");
      navigate("/cpf-verification");
    }
  }, [userData, navigate, initialLoading]);

  // Atualizar nome completo quando primeiro nome ou sobrenome mudarem
  useEffect(() => {
    if (formData.first_name || formData.last_name) {
      const fullName = `${formData.first_name} ${formData.last_name}`.trim();
      if (fullName && fullName !== formData.name) {
        setFormData((prev) => ({
          ...prev,
          name: fullName,
        }));
      }
    }
  }, [formData.first_name, formData.last_name, formData.name]);

  const handleBackClick = () => {
    navigate("/cpf-verification");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData?.data?.data[0]?.id) {
      toast.error("ID do usuário não encontrado!");
      return;
    }

    setLoading(true);

    try {
      // Atualizar dados do usuário
      const updateResult = await Update({
        endpoint: "user",
        id: userData.data.data[0].id,
        data: {
          ...formData,
          flag: 0,
        },
      });

      if (updateResult.success) {
        toast.success("Dados atualizados com sucesso!");

        navigate("/optional-initial-form", {
          state: {
            message: "Dados atualizados com sucesso!",
            userData: {
              ...userData.data[0],
              ...formData,
              flag: 0,
            },
          },
        });
      } else {
        throw new Error(updateResult.error || "Erro ao atualizar dados");
      }
    } catch (error) {
      toast.error(error.message || "Erro ao atualizar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <SpinnerScreen message="Carregando dados do usuário..." />;
  }

  if (!userData) {
    return <SpinnerScreen message="Redirecionando..." />;
  }

  return (
    <UpdateFormWrapper>
      <HeaderNav authButtonTitle="logout" />

      <div className="content-wrapper">
        <CommonHeaderForm
          title="Atualizar Dados do Usuário"
          description={`CPF: ${
            userData?.data?.data[0]?.cpf || "N/A"
          } - Atualize suas informações pessoais`}
          icon="person_pin"
          iconColor={palette[600]}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            fontSize: "12px",
            color: "#666",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <span style={{ fontSize: "10px" }}>•</span>
          <span>Campos com * são obrigatórios</span>
        </div>

        <FormCompleted handleSubmit={handleSubmit}>
          <SectionTitleBox title={"Dados Pessoais"} iconColor="blue">
            <InputForm
              placeholder={"Digite seu primeiro nome"}
              title={"Primeiro nome"}
              type={"text"}
              name={"first_name"}
              id={"first_name"}
              required={true}
              value={formData.first_name}
              handleInput={handleInputChange}
            />
            <InputForm
              placeholder={"Digite seu sobrenome"}
              title={"Sobrenome"}
              type={"text"}
              name={"last_name"}
              id={"last_name"}
              required={true}
              value={formData.last_name}
              handleInput={handleInputChange}
            />
            <InputForm
              placeholder={"Digite seu nome completo"}
              title={"Nome completo"}
              type={"text"}
              name={"name"}
              id={"name"}
              required={true}
              value={formData.name}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder={""}
              title={"Data de nascimento"}
              type={"date"}
              name={"birth"}
              id={"birth"}
              required={true}
              value={formData.birth}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder={"Digite a cidade Natal"}
              title={"Cidade Natal"}
              type={"text"}
              name={"place_of_birth"}
              id={"place_of_birth"}
              required={true}
              value={formData.place_of_birth}
              handleInput={handleInputChange}
            />
            <CommonSelectInput
              title={"Sexo"}
              name={"sex"}
              id={"sex"}
              required={true}
              value={formData.sex}
              handleInput={handleInputChange}
              placeholder={"Selecione o sexo"}
              options={[
                { value: "masculino", label: "Masculino" },
                { value: "feminino", label: "Feminino" },
                { value: "nao-binario", label: "Não-binário" },
                { value: "outro", label: "Outro" },
                {
                  value: "prefiro-nao-informar",
                  label: "Prefiro não informar",
                },
              ]}
            />
            <InputForm
              placeholder={"Digite seu CPF"}
              title={"CPF"}
              type={"text"}
              name={"cpf"}
              id={"cpf"}
              required={true}
              value={formData.cpf}
              handleInput={handleInputChange}
            />
          </SectionTitleBox>

          <SectionTitleBox title={"Contato"} iconColor="red">
            <InputForm
              placeholder={"Digite seu telefone ou celular"}
              title={"Telefone / Celular"}
              type={"text"}
              name={"phone"}
              id={"phone"}
              required={true}
              value={formData.phone}
              handleInput={handleInputChange}
            />
            <InputForm
              placeholder={"Digite seu e-mail"}
              title={"E-mail (opcional)"}
              type={"email"}
              name={"email"}
              id={"email"}
              required={false}
              value={formData.email}
              handleInput={handleInputChange}
            />
          </SectionTitleBox>

          <SectionTitleBox title="Endereço" iconColor="green">
            <InputForm
              placeholder="Digite seu CEP"
              title="CEP"
              type="text"
              name="zip_code"
              id="zip_code"
              required={true}
              value={formData.zip_code}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite a cidade"
              title="Cidade"
              type="text"
              name="city"
              id="city"
              required={true}
              value={formData.city}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite o bairro"
              title="Bairro"
              type="text"
              name="neighborhood"
              id="neighborhood"
              required={true}
              value={formData.neighborhood}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite o nome da rua ou logradouro"
              title="Rua / Logradouro"
              type="text"
              name="street"
              id="street"
              required={true}
              value={formData.street}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite o número do bloco"
              title="bloco"
              type="text"
              name="block"
              id="block"
              value={formData.block}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite o número do imóvel"
              title="Residencia/Apartamento"
              type="text"
              name="apartment"
              id="apartment"
              required={true}
              value={formData.apartment}
              handleInput={handleInputChange}
            />

            <InputForm
              placeholder="Digite a cidade atual (se diferente)"
              title="Cidade atual"
              type="text"
              name="current_city"
              id="current_city"
              required={false}
              value={formData.current_city}
              handleInput={handleInputChange}
            />
          </SectionTitleBox>

          <FormButtons
            onCancel={handleBackClick}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </FormCompleted>
      </div>
    </UpdateFormWrapper>
  );
};

export default UpdateUserForm;
