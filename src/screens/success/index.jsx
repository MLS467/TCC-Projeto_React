import {
  SuccessWrapper,
  SuccessCard,
  IconWrapper,
  Title,
  Subtitle,
  Description,
  ButtonsContainer,
  PrimaryButton,
  CheckIcon,
  InfoSection,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./style";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiUsers, FiCalendar, FiActivity } from "react-icons/fi";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoToMedicalPatientList = () => {
    navigate("/list-patients");
  };

  const currentTime = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <SuccessWrapper>
      <SuccessCard>
        <IconWrapper>
          <CheckIcon>
            <FiCheckCircle size={70} />
          </CheckIcon>
        </IconWrapper>

        <Title>✨ Consulta Finalizada com Sucesso!</Title>
        <Subtitle>Atendimento médico registrado no sistema AtendeBem</Subtitle>

        <Description>
          O atendimento foi concluído e todos os dados médicos foram salvos com
          segurança. O paciente agora tem acesso às suas informações médicas,
          prescrições e recomendações através do sistema.
        </Description>

        <InfoSection>
          <InfoItem>
            <InfoLabel>
              <FiActivity
                size={16}
                style={{ marginRight: "8px", color: "#219653" }}
              />
              Status do Atendimento:
            </InfoLabel>
            <InfoValue success>✓ Consulta Finalizada</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              <FiCalendar
                size={16}
                style={{ marginRight: "8px", color: "#4A90E2" }}
              />
              Data e Horário:
            </InfoLabel>
            <InfoValue>{currentTime}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>
              <FiUsers
                size={16}
                style={{ marginRight: "8px", color: "#2290F6" }}
              />
              Próximos Passos:
            </InfoLabel>
            <InfoValue>
              Paciente pode acessar prescrições e resultados
            </InfoValue>
          </InfoItem>
        </InfoSection>

        <ButtonsContainer>
          <PrimaryButton onClick={handleGoToMedicalPatientList}>
            <FiUsers size={20} />
            Voltar para Lista de Pacientes
          </PrimaryButton>
        </ButtonsContainer>
      </SuccessCard>
    </SuccessWrapper>
  );
};

export default SuccessPage;
