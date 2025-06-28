import { patientData } from "./patients";
import {
  ActionButton,
  StatusBadge,
  StatusDot,
  Table,
  TableTitle,
  TableWrapper,
  Td,
  Th,
  ThWithIcon,
} from "./style";
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
import { toast } from "sonner";

const CommonList = () => {
  const statusColors = {
    critical: { bg: "#fdeaea", color: "#b71c1c" },
    serious: { bg: "#fff4e3", color: "#f57c00" },
    moderate: { bg: "#fffbe6", color: "#b59f00" },
    mild: { bg: "#e6f9ee", color: "#219653" },
  };

  const deletePatient = () => {
    return toast.success("Paciente excluído com sucesso!");
  };
  const editPatient = () => {
    return toast.info("Paciente editado com sucesso!");
  };

  return (
    <TableWrapper>
      <TableTitle>
        <FiUsers size={20} />
        Pacientes Registrados ({patientData.length})
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
          {patientData.map((p, idx) => (
            <tr key={idx}>
              <Td>{p.name}</Td>
              <Td>{p.age} anos</Td>
              <Td>
                <StatusBadge
                  bg={statusColors[p.statusKey].bg}
                  color={statusColors[p.statusKey].color}
                >
                  <StatusDot color={statusColors[p.statusKey].color} />
                  {p.status}
                </StatusBadge>
              </Td>
              <Td>{p.time}</Td>
              <Td>{p.diagnosis}</Td>
              <Td>
                <ActionButton
                  onClick={deletePatient}
                  data-action="consult"
                  title="Passar para consulta"
                >
                  <FiUserCheck color="#059669" />
                </ActionButton>
                <ActionButton
                  onClick={editPatient}
                  data-action="edit"
                  title="Editar"
                >
                  <FiEdit2 color="#374151" />
                </ActionButton>
                <ActionButton
                  onClick={deletePatient}
                  data-action="delete"
                  title="Excluir"
                >
                  <FiTrash2 color="#b71c1c" />
                </ActionButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default CommonList;
