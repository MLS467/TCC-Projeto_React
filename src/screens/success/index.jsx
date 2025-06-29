import {
  SuccessWrapper,
  SuccessCard,
  IconWrapper,
  Title,
  Subtitle,
  Description,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  CheckIcon,
  InfoSection,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./style";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiList, FiHome } from "react-icons/fi";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoToPatientList = () => {
    navigate("/list-patients");
  };

  const handleGoToHome = () => {
    navigate("/home");
  };

  return (
    <SuccessWrapper>
      <SuccessCard>
        <IconWrapper>
          <CheckIcon>
            <FiCheckCircle size={80} />
          </CheckIcon>
        </IconWrapper>

        <Title>Consulta Concluída com Sucesso!</Title>
        <Subtitle>A consulta médica foi registrada no sistema</Subtitle>

        <Description>
          Todos os dados da consulta foram salvos com sucesso. O paciente agora
          pode acessar suas informações médicas e prescrições através do
          sistema.
        </Description>

        <InfoSection>
          <InfoItem>
            <InfoLabel>Status:</InfoLabel>
            <InfoValue success>Consulta Finalizada</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Data/Hora:</InfoLabel>
            <InfoValue>{new Date().toLocaleString("pt-BR")}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Próximos passos:</InfoLabel>
            <InfoValue>Paciente pode visualizar prescrições</InfoValue>
          </InfoItem>
        </InfoSection>

        <ButtonsContainer>
          <PrimaryButton onClick={handleGoToPatientList}>
            <FiList size={20} />
            Voltar para Lista de Pacientes
          </PrimaryButton>
          <SecondaryButton onClick={handleGoToHome}>
            <FiHome size={20} />
            Ir para Início
          </SecondaryButton>
        </ButtonsContainer>
      </SuccessCard>
    </SuccessWrapper>
  );
};

export default SuccessPage;
