import  { useContext } from "react";
import { DashboardContext } from "../../../Context/DashboardContext/DashboardContext";
import FormGlobal from "../../../components/FormGlobal/FormGlobal";
import FormSectionGlobal from "../../../components/FormGlobal/FormSectionGlobal";
import FormRowGlobal from "../../../components/FormGlobal/FormRowGlobal";
import InputLogin from "../../../components/InputLogin/InputLogin";
import {
  ContainerBtnStyle,
  StyledOption,
  StyledSelect,
} from "./EmployeesForm.style";
import CheckBoxGlobal from "../../../components/CheckBox/CheckBoxGlobal";
import BtnGlobal from "../../../components/ButtonGlobal/BtnGlobal";
import { DashboardFormContext } from "../../../Context/DashboardContext/DashboardFormContext";

const EmployeesForm = () => {
  const { form, requestAdd, handleChange } = useContext(DashboardFormContext);

  return (
    <>
      <FormGlobal>
        <h1>Formulário de adição de funcionários</h1>
        <form onSubmit={requestAdd}>
          {/* Tipo de Funcionário */}
          <FormSectionGlobal legends="Tipo de funcionário">
            <StyledSelect defaultValue="" name="role" onChange={handleChange}>
              <StyledOption disabled={true} value="">
                Selecione o funcionário
              </StyledOption>
              <StyledOption value="attendant">Atendente</StyledOption>
              <StyledOption value="nurse">Enfermeira</StyledOption>
              <StyledOption value="doctor">Doutor</StyledOption>
            </StyledSelect>
          </FormSectionGlobal>

          {/* Informações Pessoais */}
          <FormSectionGlobal legends="Informações pessoais">
            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="Nome completo"
                name="name"
                type="text"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Idade"
                name="age"
                type="number"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="senha temporária"
                name="password"
                type="password"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="confirmar senha"
                name="confirm_password"
                type="password"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="E-mail"
                name="email"
                type="email"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Telefone"
                name="phone"
                type="text"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="CPF"
                name="cpf"
                type="text"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Sexo"
                name="sex"
                type="text"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="Data de nascimento"
                name="birth"
                type="date"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Local de nascimento"
                name="place_of_birth"
                type="text"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="Cidade Atual"
                name="city"
                type="text"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Bairro"
                name="neighborhood"
                type="text"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="Rua"
                name="street"
                type="text"
              />
              <InputLogin
                handleChange={handleChange}
                placeholder="Bloco"
                name="block"
                type="text"
              />
            </FormRowGlobal>

            <FormRowGlobal>
              <InputLogin
                handleChange={handleChange}
                placeholder="Apartamento"
                name="apartment"
                type="text"
              />
            </FormRowGlobal>
          </FormSectionGlobal>

          {/* Campos Específicos de Cada Funcionário */}
          {form.role === "doctor" && (
            <FormSectionGlobal legends="Informações de Doutor">
              <FormRowGlobal>
                <InputLogin
                  handleChange={handleChange}
                  placeholder="CRM"
                  name="crm"
                  type="text"
                />
                <InputLogin
                  handleChange={handleChange}
                  placeholder="Especialidade"
                  name="specialty"
                  type="text"
                />
              </FormRowGlobal>
            </FormSectionGlobal>
          )}

          {form.role === "nurse" && (
            <FormSectionGlobal legends="Informações de Enfermeira">
              <FormRowGlobal>
                <InputLogin
                  handleChange={handleChange}
                  placeholder="COREN"
                  name="coren"
                  type="text"
                />
                <InputLogin
                  handleChange={handleChange}
                  placeholder="Especialidade"
                  name="speciality"
                  type="text"
                />
                <CheckBoxGlobal
                  name="active"
                  text="Ativo"
                  handleChange={handleChange}
                  placeholder="Ativo"
                  type="checkbox"
                />
              </FormRowGlobal>
            </FormSectionGlobal>
          )}

          {form.role === "attendant" && (
            <FormSectionGlobal legends="Informações de Atendente">
              <FormRowGlobal>
                <CheckBoxGlobal
                  name="active"
                  text="Ativo"
                  handleChange={handleChange}
                  placeholder="Ativo"
                  type="checkbox"
                />
              </FormRowGlobal>
            </FormSectionGlobal>
          )}
          <ContainerBtnStyle>
            <BtnGlobal text="Adicionar" size="l" type="submit">
              Adicionar
            </BtnGlobal>
          </ContainerBtnStyle>
        </form>
      </FormGlobal>
    </>
  );
};

export default EmployeesForm;
