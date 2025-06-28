import { nursePatientData } from "./patients";
import {
  ActionButton,
  Table,
  TableWrapper,
  Td,
  Th,
  ThWithIcon,
  TitleWithIcon,
} from "./style";
import {
  FiEdit2,
  FiUserCheck,
  FiClipboard,
  FiUser,
  FiCalendar,
  FiActivity,
  FiPhone,
  FiSettings,
} from "react-icons/fi";
import { toast } from "sonner";

const NursePatientList = () => {
  const triagePatient = () => {
    return toast.success("Iniciando triagem do paciente!");
  };

  const editPatient = () => {
    return toast.info("Editando dados do paciente!");
  };

  return (
    <TableWrapper>
      <TitleWithIcon>
        <FiClipboard size={20} />
        Pacientes Aguardando Triagem ({nursePatientData.length})
      </TitleWithIcon>
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
                Tipo
              </div>
            </ThWithIcon>
            <ThWithIcon>
              <div>
                <FiPhone size={16} />
                Contato de emergência
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
          {nursePatientData.map((p, idx) => (
            <tr key={idx}>
              <Td>{p.name}</Td>
              <Td>{p.age} anos</Td>
              <Td>{p.type}</Td>
              <Td>{p.emergencyContact}</Td>
              <Td>
                <ActionButton
                  onClick={triagePatient}
                  data-action="triage"
                  title="Iniciar Triagem"
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
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default NursePatientList;
