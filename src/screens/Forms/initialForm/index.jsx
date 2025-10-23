import CommonHeaderForm from "@/components/common/CommonHeaderForm";
import { InitialFormWrapper, HeaderContainer } from "./style";
import FormCompleted from "@/components/common/CommonForm/FormCompletd";
import SectionTitleBox from "@/components/common/CommonForm/SectionForm";
import InputForm from "@/components/common/CommonForm/inputForm";
import CommonSelectInput from "@/components/common/CommonSelectInput";
import FormButtons from "@/components/common/CommonForm/FormButton";
import { useContext } from "react";
import { FormInitialContext } from "@/Context/FormsContext/FormInitialContext";
import { palette } from "@/constant/colors";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

const InitialForm = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
  };

  const { formData, handleChange, handleSubmit, handleCep, ClearForm } =
    useContext(FormInitialContext);

  return (
    <InitialFormWrapper>
      <HeaderContainer>
        <CommonHeaderForm
          title="Formulário de Primeiro Atendimento"
          description="Preencha os dados para iniciar o atendimento"
          icon={FaHeartbeat}
          iconColor={palette[600]}
          showRequiredNotice={true}
        />
      </HeaderContainer>

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
            handleInput={handleChange}
          />
          <InputForm
            placeholder={"Digite seu sobrenome"}
            title={"Sobrenome"}
            type={"text"}
            name={"last_name"}
            id={"last_name"}
            required={true}
            value={formData.last_name}
            handleInput={handleChange}
          />
          <InputForm
            placeholder={"Digite seu nome completo"}
            title={"Nome completo"}
            type={"text"}
            name={"name"}
            id={"name"}
            required={true}
            value={formData.name}
            handleInput={handleChange}
          />
          <InputForm
            placeholder={""}
            title={"Data de nascimento"}
            type={"date"}
            name={"birth"}
            id={"birth"}
            required={true}
            value={formData.birth}
            handleInput={handleChange}
          />
          <InputForm
            placeholder={"Digite a cidade Natal"}
            title={"Cidade Natal"}
            type={"text"}
            name={"place_of_birth"}
            id={"place_of_birth"}
            required={true}
            value={formData.place_of_birth}
            handleInput={handleChange}
          />
          <CommonSelectInput
            title={"Sexo"}
            name={"sex"}
            id={"sex"}
            required={true}
            value={formData.sex}
            handleInput={handleChange}
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
            handleInput={handleChange}
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
            handleInput={handleChange}
          />
          <InputForm
            placeholder={"Digite seu e-mail"}
            title={"E-mail (opcional)"}
            type={"email"}
            name={"email"}
            id={"email"}
            required={false}
            value={formData.email}
            handleInput={handleChange}
          />
        </SectionTitleBox>

        {/* 3. Endereço */}
        <SectionTitleBox title="Endereço" iconColor="green">
          <InputForm
            placeholder="Digite seu CEP"
            title="CEP"
            type="text"
            eventType="CEP"
            name="zip_code"
            id="zip_code"
            required
            value={formData.zip_code}
            handleInput={handleChange}
            handleCep={handleCep}
          />

          <InputForm
            placeholder="Digite a cidade"
            title="Cidade"
            type="text"
            name="city"
            id="city"
            required
            value={formData.city}
            handleInput={handleChange}
          />

          <InputForm
            placeholder="Digite o bairro"
            title="Bairro"
            type="text"
            name="neighborhood"
            id="neighborhood"
            required
            value={formData.neighborhood}
            handleInput={handleChange}
          />

          <InputForm
            placeholder="Digite o nome da rua ou logradouro"
            title="Rua / Logradouro"
            type="text"
            name="street"
            id="street"
            required
            value={formData.street}
            handleInput={handleChange}
          />

          <InputForm
            placeholder="Digite o número do bloco"
            title="bloco"
            type="text"
            name="block"
            id="block"
            value={formData.block}
            handleInput={handleChange}
          />

          <InputForm
            placeholder="Digite o número do imóvel"
            title="Residencia/Apartamento"
            type="text"
            name="apartment"
            id="apartment"
            required
            value={formData.apartment}
            handleInput={handleChange}
          />

          <InputForm
            placeholder="Digite a cidade atual (se diferente)"
            title="Cidade atual"
            type="text"
            name="current_city"
            id="current_city"
            required={false}
            value={formData.current_city}
            handleInput={handleChange}
          />
        </SectionTitleBox>

        <FormButtons
          onCancel={() => {
            ClearForm();
            backPage();
          }}
        />
      </FormCompleted>
    </InitialFormWrapper>
  );
};

export default InitialForm;
