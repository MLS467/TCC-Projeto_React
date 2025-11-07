import {
  ActionButton,
  Table,
  TableWrapper,
  Td,
  ThWithIcon,
  TitleWithIcon,
  FilterSection,
  SearchInput,
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
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import Confirmation from "../../common/Confirmation";

const NursePatientList = ({ nursePatientData, onDelete }) => {
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    patientId: null,
    patientName: "",
    isLoading: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Atualizar tempo atual a cada minuto para recalcular tempos de espera
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Atualizar a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  // Calcular tempo de espera real baseado no timestamp do banco
  const enhancedPatientData = useMemo(() => {
    return nursePatientData.map((patient, index) => {
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
  }, [nursePatientData, currentTime]);

  // Filtrar dados baseado na busca
  const filteredData = useMemo(() => {
    let filtered = enhancedPatientData;

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(
        (patient) =>
          patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.phone.includes(searchTerm)
      );
    }

    return filtered;
  }, [enhancedPatientData, searchTerm]);

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
      <TitleWithIcon>Pacientes Aguardando Triagem</TitleWithIcon>

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
                <FiClock size={16} />
                TEMPO DE ESPERA
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
            const isFirstPatient = idx === 0;

            return (
              <tr key={p.id || idx}>
                <Td>{p.name}</Td>
                <Td>{p.age} anos</Td>
                <Td>{p.sex}</Td>
                <Td>{p.phone}</Td>
                <Td
                  title={`Cadastrado em: ${new Date(
                    p.created_at || p.createdAt || p.timestamp
                  ).toLocaleString("pt-BR")}`}
                >
                  {p.waitTime}
                </Td>
                <Td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexWrap: "nowrap",
                    }}
                  >
                    {isFirstPatient ? (
                      <Link to={`/triage-form/${btoa(p.id)}`}>
                        <ActionButton
                          onClick={() => {}}
                          data-action="triage"
                          title="Iniciar Triagem - Próximo da Fila"
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
                        data-action="triage"
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
                  </div>
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

export default NursePatientList;
