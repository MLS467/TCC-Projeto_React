import {
  ActionButton,
  StatusBadge,
  StatusDot,
  Table,
  TableTitle,
  TableWrapper,
  Td,
  ThWithIcon,
} from "./style";
import { ensureValidPatientCondition } from "@/utils/patientCondition";
import {
  FiEdit2,
  FiTrash2,
  FiUsers,
  FiUser,
  FiCalendar,
  FiActivity,
  FiClock,
  FiFileText,
  FiSettings,
  FiUserCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CommonList = ({ data, onDelete }) => {
  const statusColors = {
    critical: { bg: "#fdeaea", color: "#b71c1c" },
    serious: { bg: "#fff4e3", color: "#f57c00" },
    moderate: { bg: "#fffbe6", color: "#b59f00" },
    mild: { bg: "#e6f9ee", color: "#219653" },
  };

  const status = {
    critical: "Crítico",
    serious: "Alto",
    moderate: "Moderado",
    mild: "Baixo",
  };

  /**
   * Função para deletar paciente usando o contexto ListContext
   * @param {string|number} patientId - ID do paciente a ser deletado
   */
  const handleDeletePatient = async (patientId) => {
    if (onDelete) {
      const result = await onDelete(patientId);
      if (!result?.success) {
        console.error("Erro ao deletar paciente:", result?.error);
      }
    } else {
      // Fallback para quando onDelete não está disponível
      toast.success("Paciente excluído com sucesso!");
    }
  };

  const editPatient = () => {
    return toast.info("Paciente editado com sucesso!");
  };

  return (
    <TableWrapper>
      <TableTitle>
        <FiUsers size={20} />
        Pacientes Registrados ({data.length})
      </TableTitle>
      <Table>
        <thead>
          <tr>
            <ThWithIcon>
              <div>
                <FiUser size={16} />
                Nome
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
                Status
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiClock size={16} />
                Hora
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiFileText size={16} />
                Diagnóstico
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
          {data.map((p, idx) => {
            const condition = ensureValidPatientCondition(p.patient_condition);
            const conditionColors =
              statusColors[condition] || statusColors.mild;
            const conditionStatus = status[condition] || status.mild;

            return (
              <tr key={idx}>
                <Td>{p.user?.name || "N/A"}</Td>
                <Td>{p.user?.age ? `${p.user.age} anos` : "N/A"}</Td>
                <Td>
                  <StatusBadge
                    bg={conditionColors.bg}
                    color={conditionColors.color}
                  >
                    <StatusDot color={conditionColors.color} />
                    {conditionStatus}
                  </StatusBadge>
                </Td>
                <Td>
                  {new Date(p.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Td>
                <Td>
                  {p.chief_complaint && p.chief_complaint.length >= 30
                    ? `${p.chief_complaint.substring(0, 30)}...`
                    : p.chief_complaint || "N/A"}
                </Td>
                <Td>
                  <Link to={`/medical-triage-document/${btoa(p.id)}`}>
                    <ActionButton
                      onClick={() => {}}
                      data-action="consult"
                      title="Visualizar dados e iniciar consulta"
                    >
                      <FiUserCheck color="#059669" />
                    </ActionButton>
                  </Link>
                  <ActionButton
                    onClick={editPatient}
                    data-action="edit"
                    title="Editar"
                  >
                    <FiEdit2 color="#374151" />
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleDeletePatient(p.id)}
                    data-action="delete"
                    title="Excluir"
                  >
                    <FiTrash2 color="#b71c1c" />
                  </ActionButton>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default CommonList;
