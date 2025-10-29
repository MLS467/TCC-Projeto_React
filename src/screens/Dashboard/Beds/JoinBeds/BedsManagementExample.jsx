import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #333;
`;

const BedsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const BedCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const BedNumber = styled.h3`
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.3rem;
`;

const BedInfo = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #666;
`;

const InfoValue = styled.span`
  color: #333;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => {
    if (props.status === "disponivel") {
      return "background-color: #d4edda; color: #155724;";
    } else if (props.status === "ocupado") {
      return "background-color: #f8d7da; color: #721c24;";
    } else {
      return "background-color: #fff3cd; color: #856404;";
    }
  }}
`;

const AssignButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #0056b3;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

// Dados mockados de leitos
const mockBeds = [
  {
    id: 101,
    number: "101",
    status: "disponivel",
    wing: "Ala A",
    floor: "1º Andar",
    type: "UTI",
    patient: null,
  },
  {
    id: 102,
    number: "102",
    status: "ocupado",
    wing: "Ala A",
    floor: "1º Andar",
    type: "UTI",
    patient: "João Silva",
  },
  {
    id: 103,
    number: "103",
    status: "disponivel",
    wing: "Ala B",
    floor: "2º Andar",
    type: "Enfermaria",
    patient: null,
  },
  {
    id: 104,
    number: "104",
    status: "manutencao",
    wing: "Ala B",
    floor: "2º Andar",
    type: "Enfermaria",
    patient: null,
  },
  {
    id: 105,
    number: "105",
    status: "disponivel",
    wing: "Ala C",
    floor: "3º Andar",
    type: "Quarto Privado",
    patient: null,
  },
  {
    id: 106,
    number: "106",
    status: "disponivel",
    wing: "Ala C",
    floor: "3º Andar",
    type: "Quarto Privado",
    patient: null,
  },
];

const BedsManagementExample = () => {
  const navigate = useNavigate();

  const handleAssignPatient = (bedId) => {
    // Navega para a página de vinculação
    navigate(`/dashboard/beds-details/${bedId}`);
  };

  const getButtonText = (bed) => {
    if (bed.status === "disponivel") return "🔗 Vincular Paciente";
    if (bed.status === "ocupado") return "👤 Leito Ocupado";
    return "🔧 Em Manutenção";
  };

  return (
    <Container>
      <Title>🏥 Gerenciamento de Leitos</Title>
      <Description>
        Clique em "Vincular Paciente" para abrir a página de vinculação de
        pacientes aos leitos disponíveis.
      </Description>

      <BedsGrid>
        {mockBeds.map((bed) => (
          <BedCard key={bed.id}>
            <BedNumber>🛏️ Leito {bed.number}</BedNumber>

            <BedInfo>
              <InfoRow>
                <InfoLabel>Status:</InfoLabel>
                <StatusBadge status={bed.status}>{bed.status}</StatusBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Ala:</InfoLabel>
                <InfoValue>{bed.wing}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Andar:</InfoLabel>
                <InfoValue>{bed.floor}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Tipo:</InfoLabel>
                <InfoValue>{bed.type}</InfoValue>
              </InfoRow>
              {bed.patient && (
                <InfoRow>
                  <InfoLabel>Paciente:</InfoLabel>
                  <InfoValue>{bed.patient}</InfoValue>
                </InfoRow>
              )}
            </BedInfo>

            <AssignButton
              onClick={() => handleAssignPatient(bed.id)}
              disabled={bed.status === "ocupado" || bed.status === "manutencao"}
            >
              {getButtonText(bed)}
            </AssignButton>
          </BedCard>
        ))}
      </BedsGrid>
    </Container>
  );
};

export default BedsManagementExample;
