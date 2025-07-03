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
  FiTrash2,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Confirmation from "../../common/Confirmation";

const NursePatientList = ({ nursePatientData, onDelete }) => {
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    patientId: null,
    patientName: "",
    isLoading: false,
  });

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
            <tr key={p.id || idx}>
              <Td>{p.name}</Td>
              <Td>{p.age} anos</Td>
              <Td>{p.sex}</Td>
              <Td>{p.phone}</Td>
              <Td>
                <Link to={`/triage-form/${btoa(p.id)}`}>
                  <ActionButton
                    onClick={() => {}}
                    data-action="triage"
                    title="Iniciar Triagem"
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
          ))}
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
