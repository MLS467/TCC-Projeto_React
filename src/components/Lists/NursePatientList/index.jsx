import {
  ActionButton,
  Table,
  TableWrapper,
  Td,
  ThWithIcon,
  TitleWithIcon,
} from "./style";
import {
  FiUserCheck,
  FiClipboard,
  FiUser,
  FiCalendar,
  FiActivity,
  FiPhone,
  FiSettings,
  FiDelete,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const NursePatientList = ({ nursePatientData }) => {
  const triagePatient = () => {
    return toast.success("Iniciando triagem do paciente!");
  };

  const deletePatient = () => {
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
                sexo
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
              <Td>{p.sex}</Td>
              <Td>{p.phone}</Td>
              <Td>
                <Link to={`/triage-form/${btoa(p.id)}`}>
                  <ActionButton
                    onClick={triagePatient}
                    data-action="triage"
                    title="Iniciar Triagem"
                  >
                    <FiUserCheck color="#059669" />
                  </ActionButton>
                </Link>
                <Link to={`/nurse/delete/${btoa(p.id)}`}>
                  <ActionButton
                    onClick={deletePatient}
                    data-action="Deletar"
                    title="Deletar"
                  >
                    <FiDelete color="#374151" />
                  </ActionButton>
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default NursePatientList;
