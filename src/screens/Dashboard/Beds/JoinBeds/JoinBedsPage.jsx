import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useRequest from "@/Hook/useRequest";
import { toast } from "sonner";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.1rem;
`;

const BedInfo = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const BedInfoTitle = styled.h2`
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.3rem;
`;

const BedDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.span`
  color: #333;
  font-size: 1rem;
`;

const SearchSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }
`;

const PatientsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.2rem;
`;

const PatientsGrid = styled.div`
  display: grid;
  gap: 1rem;
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 2rem;
`;

const PatientCard = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fafafa;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.15);
    background: #f8f9ff;
  }

  ${(props) =>
    props.selected &&
    `
    border-color: #007bff;
    background-color: #f0f7ff;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  `}
`;

const PatientInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const PatientName = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 0.5rem;
`;

const PatientNameText = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`;

const PriorityBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  ${(props) => {
    if (props.priority === "Alta") {
      return "background-color: #ffebee; color: #c62828; border: 1px solid #ffcdd2;";
    } else if (props.priority === "Média") {
      return "background-color: #fff3e0; color: #ef6c00; border: 1px solid #ffcc02;";
    } else {
      return "background-color: #e8f5e8; color: #2e7d32; border: 1px solid #c8e6c9;";
    }
  }}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: #007bff;
    color: white;
    border-color: #007bff;
    
    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
    }
    
    &:disabled {
      background-color: #6c757d;
      border-color: #6c757d;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  `
      : `
    background-color: transparent;
    color: #6c757d;
    border-color: #6c757d;
    
    &:hover {
      background-color: #6c757d;
      color: white;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
    }
  `}
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`;

const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const JoinBedsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { api } = useRequest();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  const [bedData, setBedData] = useState({
    id: id,
    number: id,
    wing: "Ala A",
    floor: "2º Andar",
    type: "UTI",
    status: "Disponível",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Buscar informações do leito e pacientes em paralelo
        const [bedResponse, patientsResponse] = await Promise.all([
          api.get(`${import.meta.env.VITE_API_BEG}/${id}`),
          api.get("/patient-for-bed")
        ]);

        // Atualizar dados do leito
        if (bedResponse && bedResponse.data) {
          const bed = bedResponse.data.data || bedResponse.data;
          setBedData({
            id: bed.id,
            number: bed.number_bed,
            wing: "Ala A", // Pode ser obtido da API se disponível
            floor: "2º Andar", // Pode ser obtido da API se disponível
            type: "UTI", // Pode ser obtido da API se disponível
            status: bed.status_bed ? "Ocupado" : "Disponível",
          });
        }

        // Atualizar lista de pacientes
        if (patientsResponse && patientsResponse.data) {
          const patientsData = patientsResponse.data.data || patientsResponse.data;

          const mappedPatients = patientsData.map((patient) => ({
            id: patient.user.id,
            patientRecordId: patient.id,
            name: patient.user.name,
            cpf: patient.user.cpf,
            age: patient.user.age,
            phone: patient.user.phone,
            email: patient.user.email,
            condition: patient.patient_condition,
            priority:
              patient.patient_condition === "critical"
                ? "Alta"
                : patient.patient_condition === "serious"
                ? "Média"
                : "Baixa",
            admissionDate: patient.created_at,
            bloodType: patient.blood_type,
            allergy: patient.allergy,
            chiefComplaint: patient.chief_complaint,
            responsibleSpecialist: patient.responsible_specialist,
            vitalSigns: {
              bloodPressure: patient.blood_pressure,
              heartRate: patient.heart_rate,
              respiratoryRate: patient.respiratory_rate,
              oxygenSaturation: patient.oxygen_saturation,
              temperature: patient.temperature,
            },
          }));

          setPatients(mappedPatients);
        } else {
          setPatients([]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setPatients([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, id]);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cpf?.includes(searchTerm) ||
      patient.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAssignPatient = async () => {
    if (!selectedPatient) return;

    setLoading(true);
    try {
      const payload = {
        user_id: selectedPatient.id,
        bed_id: Number(id),
      };

      const response = await api.post("/join-bed-manual-patient", payload);

      if (response && (response.status === 200 || response.status === 201)) {
        toast.success(
          `Paciente ${selectedPatient.name} foi vinculado ao leito ${bedData.number} com sucesso!`
        );
        navigate("/dashboard/bed-management");
      } else {
        toast.error("Erro ao vincular paciente. Tente novamente.");
      }
    } catch (error) {
      if (error.response) {
        const message =
          error.response.data?.message ||
          error.response.data?.error ||
          "Erro desconhecido";

        toast.error(`${message}`);
      } else if (error.request) {
        toast.error("Erro de conexão. Verifique sua internet.");
      } else {
        toast.error("Erro inesperado. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/bed-management");
  };

  return (
    <Container>
      <Header>
        <Title>Vincular Paciente ao Leito</Title>
        <Subtitle>
          Selecione um paciente para vincular ao leito especificado
        </Subtitle>
      </Header>

      <BedInfo>
        <BedInfoTitle>Informações do Leito</BedInfoTitle>
        <BedDetails>
          <InfoItem>
            <InfoLabel>Número do Leito:</InfoLabel>
            <InfoValue>#{bedData.number}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Ala:</InfoLabel>
            <InfoValue>{bedData.wing}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Andar:</InfoLabel>
            <InfoValue>{bedData.floor}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Tipo:</InfoLabel>
            <InfoValue>{bedData.type}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Status:</InfoLabel>
            <InfoValue>{bedData.status}</InfoValue>
          </InfoItem>
        </BedDetails>
      </BedInfo>

      <SearchSection>
        <SearchInput
          type="text"
          placeholder="🔍 Buscar paciente por nome, CPF ou email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchSection>

      <PatientsSection>
        <SectionTitle>👥 Pacientes Disponíveis</SectionTitle>

        <PatientsGrid>
          {loading ? (
            <EmptyState>
              <LoadingSpinner />
              Carregando pacientes...
            </EmptyState>
          ) : filteredPatients.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>🏥</EmptyStateIcon>
              {searchTerm
                ? "Nenhum paciente encontrado para a busca"
                : "Nenhum paciente disponível"}
            </EmptyState>
          ) : (
            filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                selected={selectedPatient?.id === patient.id}
                onClick={() => setSelectedPatient(patient)}
              >
                <PatientName>
                  <PatientNameText>{patient.name}</PatientNameText>
                </PatientName>
                <PatientInfo>
                  <InfoItem>
                    <InfoLabel>CPF:</InfoLabel>
                    <InfoValue>{patient.cpf}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Email:</InfoLabel>
                    <InfoValue>{patient.email}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Idade:</InfoLabel>
                    <InfoValue>{patient.age} anos</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Telefone:</InfoLabel>
                    <InfoValue>{patient.phone}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Condição:</InfoLabel>
                    <InfoValue>{patient.condition}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Prioridade:</InfoLabel>
                    <PriorityBadge priority={patient.priority}>
                      {patient.priority}
                    </PriorityBadge>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Tipo Sanguíneo:</InfoLabel>
                    <InfoValue>{patient.bloodType}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Especialista:</InfoLabel>
                    <InfoValue>{patient.responsibleSpecialist}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>Data de Admissão:</InfoLabel>
                    <InfoValue>
                      {new Date(patient.admissionDate).toLocaleDateString(
                        "pt-BR"
                      )}
                    </InfoValue>
                  </InfoItem>
                  {patient.allergy && (
                    <InfoItem>
                      <InfoLabel>Alergia:</InfoLabel>
                      <InfoValue>{patient.allergy}</InfoValue>
                    </InfoItem>
                  )}
                </PatientInfo>
              </PatientCard>
            ))
          )}
        </PatientsGrid>

        <ButtonContainer>
          <Button variant="secondary" onClick={handleCancel}>
            ← Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={handleAssignPatient}
            disabled={!selectedPatient || loading}
          >
            {loading && <LoadingSpinner />}
            {loading ? "Vinculando..." : "✓ Vincular Paciente"}
          </Button>
        </ButtonContainer>
      </PatientsSection>
    </Container>
  );
};

export default JoinBedsPage;
