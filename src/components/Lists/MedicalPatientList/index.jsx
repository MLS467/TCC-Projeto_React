import {
  ActionButton,
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
  FiClipboard,
  FiUser,
  FiCalendar,
  FiActivity,
  FiPhone,
  FiSettings,
  FiTrash2,
  FiClock,
  FiAlertTriangle,
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

  // Simular dados de prioridade e tempo de espera (já que não vem do backend)
  const enhancedPatientData = useMemo(() => {
    console.log("🔍 Dados recebidos:", medicalPatientData);
    return medicalPatientData.map((patient, index) => {
      console.log("👤 Paciente individual:", patient);
      return {
        ...patient,
        priority: ["alta", "media", "baixa"][index % 3],
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
        (patient) => patient.priority === priorityFilter
      );
    }

    return filtered;
  }, [enhancedPatientData, searchTerm, priorityFilter]);

  const handleDeleteClick = (patient) => {
    setConfirmationModal({
      isOpen: true,
      patientId: patient.id,
      patientName: patient.name,
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
      <TitleWithIcon>
        <FiClipboard size={20} />
        Lista de Pacientes
      </TitleWithIcon>

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
          active={priorityFilter === "alta"}
          onClick={() => setPriorityFilter("alta")}
          className="priority-alta"
        >
          Alta
        </FilterButton>
        <FilterButton
          active={priorityFilter === "media"}
          onClick={() => setPriorityFilter("media")}
          className="priority-media"
        >
          Média
        </FilterButton>
        <FilterButton
          active={priorityFilter === "baixa"}
          onClick={() => setPriorityFilter("baixa")}
          className="priority-baixa"
        >
          Baixa
        </FilterButton>
      </FilterSection>

      <Table>
        <thead>
          <tr>
            <ThWithIcon>
              <div>
                <FiUser size={16} />
                Paciente
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiCalendar size={16} />
                Idade
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiActivity size={16} />
                Sexo
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiPhone size={16} />
                Contato de Emergência
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiClock size={16} />
                Tempo de Espera
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiAlertTriangle size={16} />
                Prioridade
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiSettings size={16} />
                Ações
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
                <Td>{p.waitTime}</Td>
                <Td>
                  <PriorityBadge className={p.priority}>
                    {p.priority === "alta"
                      ? "Alta"
                      : p.priority === "media"
                      ? "Média"
                      : "Baixa"}
                  </PriorityBadge>
                </Td>
                <Td>
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
