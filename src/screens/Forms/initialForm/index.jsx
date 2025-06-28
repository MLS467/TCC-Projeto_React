import Navbar from "../../../components/common/NavBar";
import Logo from "../../../components/common/Logo";
import { AuthButtonWrapper, InitialFormWrapper, LogoWrapper } from "./style";
import AuthButton from "../../../components/common/AuthButton";
import FormCompleted from "../../../components/common/CommonForm/FormCompletd";
import SectionTitleBox from "../../../components/common/CommonForm/SectionForm";
import InputForm from "../../../components/common/CommonForm/InputForm";
import FormButtons from "../../../components/common/CommonForm/FormButton";
import { useEffect, useState } from "react";

const InitialForm = () => {
  const [formInitial, setFormInitial] = useState({
    birth_city: "",
    birth: null,
    city: "",
    cpf: "",
    current_city: "",
    email: "",
    first_name: "",
    last_name: "",
    name: "",
    neighborhood: "",
    phone: "",
    sex: "",
    street: "",
    zip_code: "",
    role: "patient",
  });

  useEffect(() => {
    console.log(formInitial);
  }, [formInitial]);

  const handleInputChange = (e) => {
    setFormInitial({ ...formInitial, [e.target.name]: e.target.value });
  };

  return (
    <InitialFormWrapper>
      <header>
        <Navbar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div />
          <AuthButtonWrapper>
            <AuthButton title={"Logout"} type={"logout"} />
          </AuthButtonWrapper>
        </Navbar>
      </header>
      <div className="content-wrapper">
        <div>
          <h1>Formulário de primeiro atendimento</h1>
          <span>Preencha os dados para iniciar o atendimento</span>
        </div>
      </div>

      <FormCompleted>
        <span
          style={{
            padding: 32,
            color: "#f00",
            fontSize: "0.8rem",
            fontWeight: "600",
            textAlign: "right",
          }}
        >
          Os campos que possuem ( * ) são obrigatórios!
        </span>
        <SectionTitleBox title={"Dados Pessoais"} iconColor="blue">
          <InputForm
            placeholder={"Digite seu primeiro nome"}
            title={"Primeiro nome"}
            type={"text"}
            name={"first_name"}
            id={"first_name"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Digite seu sobrenome"}
            title={"Sobrenome"}
            type={"text"}
            name={"last_name"}
            id={"last_name"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Digite seu nome completo"}
            title={"Nome completo"}
            type={"text"}
            name={"name"}
            id={"name"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={""}
            title={"Data de nascimento"}
            type={"date"}
            name={"birth"}
            id={"birth"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Digite a cidade de nascimento"}
            title={"Cidade de nascimento"}
            type={"text"}
            name={"birth_city"}
            id={"birth_city"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Selecione o gênero"}
            title={"Gênero"}
            type={"text"}
            name={"sex"}
            id={"sex"}
            required={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Digite seu CPF"}
            title={"CPF"}
            type={"text"}
            name={"cpf"}
            id={"cpf"}
            required={true}
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
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder={"Digite seu e-mail"}
            title={"E-mail (opcional)"}
            type={"email"}
            name={"email"}
            id={"email"}
            required={false}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        {/* 3. Endereço */}
        <SectionTitleBox title="Endereço" iconColor="green">
          <InputForm
            placeholder="Digite seu CEP"
            title="CEP"
            type="text"
            name="zip_code"
            id="zip_code"
            required
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Digite o nome da rua ou logradouro"
            title="Rua / Logradouro"
            type="text"
            name="street"
            id="street"
            required
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Digite o bairro"
            title="Bairro"
            type="text"
            name="neighborhood"
            id="neighborhood"
            required
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Digite a cidade"
            title="Cidade"
            type="text"
            name="city"
            id="city"
            required
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Digite a cidade atual (se diferente)"
            title="Cidade atual"
            type="text"
            name="current_city"
            id="current_city"
            required={false}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        {/* 4. Informações Adicionais */}
        <SectionTitleBox title="Informações do Atendimento" iconColor="#6366f1">
          <InputForm
            placeholder="Valor definido automaticamente"
            title="Tipo de usuário"
            type="text"
            name="role"
            id="role"
            value="patient"
            readOnly={true}
            handleInput={handleInputChange}
          />
          <InputForm
            placeholder="Descreva os sintomas, queixas ou motivo da consulta..."
            title="Sintomas / Queixa principal"
            type="text"
            name="symptoms"
            id="symptoms"
            required={true}
            handleInput={handleInputChange}
          />
        </SectionTitleBox>

        <FormButtons
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
      </FormCompleted>
    </InitialFormWrapper>
  );
};

export default InitialForm;
