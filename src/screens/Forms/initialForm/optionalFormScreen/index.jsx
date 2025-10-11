import { useNavigate } from "react-router-dom";
import HeaderNav from "@/components/common/HeaderNav";
import OptionalCard from "../../../../components/optionalInitialForm/optionalCard";
import {
  ScreenContainer,
  HeaderSection,
  Title,
  Subtitle,
  CardsContainer,
} from "./style";

const OptionalFormScreen = () => {
  const navigate = useNavigate();

  const handleCompleteForm = () => {
    navigate("/initial-form");
  };

  const handleQuickForm = () => {
    navigate("/cpf-verification");
  };

  return (
    <ScreenContainer>
      <HeaderNav authButtonTitle="logout" />
      <HeaderSection>
        <Title>Escolha o tipo de cadastro</Title>
        <Subtitle>
          Selecione a forma mais conveniente para realizar o cadastro de
          paciente em nossa plataforma
        </Subtitle>
      </HeaderSection>

      <CardsContainer>
        <OptionalCard
          title="Cadastro Completo"
          description="Preencha um formulário detalhado com todas informações pessoais do paciente para um cadastro completo"
          icon="description"
          buttonText="Cadastrar por Formulário"
          color="blue"
          onClick={handleCompleteForm}
        />

        <OptionalCard
          title="Cadastro Rápido"
          description="Informe apenas seu CPF para verificar se o paciente já possui cadastro em nossa base de dados"
          icon="fingerprint"
          buttonText="Verificar por CPF"
          color="orange"
          onClick={handleQuickForm}
        />
      </CardsContainer>
    </ScreenContainer>
  );
};

export default OptionalFormScreen;
