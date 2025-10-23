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
import { useState, useMemo } from "react";
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
    console.log("🔍 Dados recebidos:", medicalPatientData);
    return medicalPatientData.map((patient, index) => {
      console.log("👤 Paciente individual:", patient);
      return {
        ...patient,
        waitTime: `${15 + index * 15}min`,
      };
    });
  }, [medicalPatientData]);

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
            return (
              <tr key={p.id || idx}>
                <Td>{patientInfo.name}</Td>
                <Td>{patientInfo.age}</Td>
                <Td>{patientInfo.sex}</Td>
                <Td>{patientInfo.phone}</Td>
                <Td>{p.bed ? p.bed.number_bed : "N/A"}</Td>
                <Td>{p.waitTime}</Td>
                <Td>
                  <PriorityBadge className={p.patient_condition || "mild"}>
                    {getPriorityLabel(p.patient_condition)}
                  </PriorityBadge>
                </Td>
                <Td>
                  <ActionsContainer>
                    <Link to={`/consultation-form/${btoa(p.id)}`}>
                      <ActionButton
                        onClick={() => {}}
                        data-action="consult"
                        title="Iniciar Consulta"
                      >
                        <FiUserCheck color="#059669" />
                      </ActionButton>
                    </Link>
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
