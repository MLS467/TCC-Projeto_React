import {
  ActionButton,
  ActionsContainer,
  Table,
  TableWrapper,
  Td,
  ThWithIcon,
  TitleWithIcon,
  FilterSection,
  SearchInput,
  FilterButton,
  PriorityBadge,
} from "./style";
import {
  FiUserCheck,
  FiUser,
  FiCalendar,
  FiActivity,
  FiPhone,
  FiSettings,
  FiTrash2,
  FiClock,
  FiAlertTriangle,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import Confirmation from "../../common/Confirmation";

const MedicalPatientList = ({ medicalPatientData, onDelete }) => {
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    patientId: null,
    patientName: "",
    isLoading: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("todos");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualizar tempo atual a cada minuto para recalcular tempos de espera
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Atualizar a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  // Função para extrair dados do paciente independente da estrutura
  const getPatientInfo = (patient) => {
    return {
      name:
        patient.name ||
        patient.user?.name ||
        (patient.first_name && patient.last_name
          ? `${patient.first_name} ${patient.last_name}`
          : "") ||
        "Nome não informado",
      age: patient.age || patient.user?.age || "Idade não informada",
      sex: patient.sex || patient.user?.sex || "Sexo não informado",
      phone: patient.phone || patient.user?.phone || "Contato não informado",
    };
  };

  // Função para mapear patient_condition para labels em português
  const getPriorityLabel = (condition) => {
    const priorityMap = {
      mild: "Leve",
      moderate: "Moderado",
      serious: "Grave",
      critical: "Crítico",
    };
    return priorityMap[condition] || "Não informado";
  };

  // Adicionar dados de tempo de espera (simulado)
  const enhancedPatientData = useMemo(() => {
    return medicalPatientData.map((patient, index) => {

      // Função para calcular tempo de espera
      const calculateWaitTime = (createdAt) => {
        if (!createdAt) {
          return `${15 + index * 15}min`; // Fallback para o cálculo anterior
        }

        const now = currentTime;
        const createdDate = new Date(createdAt);

        // Verificar se a data é válida
        if (isNaN(createdDate.getTime())) {
          return `${15 + index * 15}min`; // Fallback se data inválida
        }

        const diffInMs = now - createdDate;
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

        // Se for menos de 1 minuto, mostrar "Agora"
        if (diffInMinutes < 1) {
          return "Agora";
        }

        // Se for menos de 60 minutos, mostrar em minutos
        if (diffInMinutes < 60) {
          return `${diffInMinutes}min`;
        }

        // Se for mais de 60 minutos, mostrar em horas e minutos
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;

        if (minutes === 0) {
          return `${hours}h`;
        } else {
          return `${hours}h ${minutes}min`;
        }
      };

      return {
        ...patient,
        waitTime: calculateWaitTime(
          patient.created_at || patient.createdAt || patient.timestamp
        ),
      };
    });
  }, [medicalPatientData, currentTime]);

  // Filtrar dados baseado na busca e filtro de prioridade
  const filteredData = useMemo(() => {
    let filtered = enhancedPatientData;

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter((patient) => {
        const patientInfo = getPatientInfo(patient);
        return (
          patientInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patientInfo.phone.includes(searchTerm)
        );
      });
    }

    // Filtro por prioridade
    if (priorityFilter !== "todos") {
      filtered = filtered.filter(
        (patient) => patient.patient_condition === priorityFilter
      );
    }

    return filtered;
  }, [enhancedPatientData, searchTerm, priorityFilter]);

  const handleDeleteClick = (patient) => {
    const patientInfo = getPatientInfo(patient);
    setConfirmationModal({
      isOpen: true,
      patientId: patient.id,
      patientName: patientInfo.name,
      isLoading: false,
    });
  };

  const handleConfirmDelete = async () => {
    setConfirmationModal((prev) => ({ ...prev, isLoading: true }));

    try {
      await onDelete(confirmationModal.patientId);
      setConfirmationModal({
        isOpen: false,
        patientId: null,
        patientName: "",
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleCancelDelete = () => {
    setConfirmationModal({
      isOpen: false,
      patientId: null,
      patientName: "",
      isLoading: false,
    });
  };
  return (
    <TableWrapper>
      <TitleWithIcon>Pacientes Aguardando Consulta Médica</TitleWithIcon>

      {filteredData.length > 0 && (
        <div
          style={{
            backgroundColor: "#f0f9ff",
            border: "2px solid #0ea5e9",
            borderRadius: "12px",
            padding: "12px 16px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FiClock color="#0ea5e9" size={20} />
          <span
            style={{
              color: "#0c4a6e",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Sistema de Fila: Apenas o primeiro paciente pode ser atendido por
            vez
          </span>
        </div>
      )}

      <FilterSection>
        <SearchInput
          type="text"
          placeholder="Buscar paciente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterButton
          active={priorityFilter === "todos"}
          onClick={() => setPriorityFilter("todos")}
        >
          Todos
        </FilterButton>
        <FilterButton
          active={priorityFilter === "mild"}
          onClick={() => setPriorityFilter("mild")}
          className="priority-mild"
        >
          Leve
        </FilterButton>
        <FilterButton
          active={priorityFilter === "moderate"}
          onClick={() => setPriorityFilter("moderate")}
          className="priority-moderate"
        >
          Moderado
        </FilterButton>
        <FilterButton
          active={priorityFilter === "serious"}
          onClick={() => setPriorityFilter("serious")}
          className="priority-serious"
        >
          Grave
        </FilterButton>
        <FilterButton
          active={priorityFilter === "critical"}
          onClick={() => setPriorityFilter("critical")}
          className="priority-critical"
        >
          Crítico
        </FilterButton>
      </FilterSection>

      <Table>
        <thead>
          <tr>
            <ThWithIcon>
              <div>
                <FiUser size={16} />
                PACIENTE
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiCalendar size={16} />
                IDADE
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiActivity size={16} />
                SEXO
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiPhone size={16} />
                CONTATO DE EMERGÊNCIA
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiHome size={16} />
                LEITO
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiClock size={16} />
                TEMPO DE ESPERA
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiAlertTriangle size={16} />
                PRIORIDADE
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiSettings size={16} />
                AÇÕES
              </div>
            </ThWithIcon>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((p, idx) => {
            const patientInfo = getPatientInfo(p);
            const isFirstPatient = idx === 0;

            return (
              <tr key={p.id || idx}>
                <Td>{patientInfo.name}</Td>
                <Td>{patientInfo.age}</Td>
                <Td>{patientInfo.sex}</Td>
                <Td>{patientInfo.phone}</Td>
                <Td>{p.bed ? p.bed.number_bed : "N/A"}</Td>
                <Td
                  title={`Cadastrado em: ${new Date(
                    p.created_at || p.createdAt || p.timestamp
                  ).toLocaleString("pt-BR")}`}
                >
                  {p.waitTime}
                </Td>
                <Td>
                  <PriorityBadge className={p.patient_condition || "mild"}>
                    {getPriorityLabel(p.patient_condition)}
                  </PriorityBadge>
                </Td>
                <Td>
                  <ActionsContainer>
                    {isFirstPatient ? (
                      <Link to={`/consultation-form/${btoa(p.id)}`}>
                        <ActionButton
                          onClick={() => {}}
                          data-action="consult"
                          title="Iniciar Consulta - Próximo da Fila"
                          style={{
                            backgroundColor: "#059669",
                            color: "white",
                            border: "2px solid #059669",
                            borderRadius: "8px",
                            padding: "8px",
                            animation: "pulse 2s infinite",
                          }}
                        >
                          <FiUserCheck color="white" />
                        </ActionButton>
                      </Link>
                    ) : (
                      <ActionButton
                        onClick={() => {}}
                        data-action="consult"
                        title="Aguardando vez na fila"
                        disabled
                        style={{
                          backgroundColor: "#e5e7eb",
                          color: "#9ca3af",
                          cursor: "not-allowed",
                          opacity: 0.6,
                          border: "2px solid #e5e7eb",
                          borderRadius: "8px",
                          padding: "8px",
                        }}
                      >
                        <FiClock color="#9ca3af" />
                      </ActionButton>
                    )}
                    <ActionButton
                      onClick={() => handleDeleteClick(p)}
                      data-action="Deletar"
                      title="Deletar"
                    >
                      <FiTrash2 color="#ef4444" />
                    </ActionButton>
                  </ActionsContainer>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Confirmation
        isOpen={confirmationModal.isOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirmar exclusão"
        message={`Tem certeza que deseja excluir o paciente "${confirmationModal.patientName}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        isLoading={confirmationModal.isLoading}
      />
    </TableWrapper>
  );
};

export default MedicalPatientList;
