import CommonUserList from "../common/list";
import { toast } from "sonner";

const MedicoList = () => {
  // Dados mockados para médicos
  const medicos = [
    {
      id: 1,
      name: "Dr. Carlos Oliveira",
      role: "Médico - Cardiologia",
      phone: "(11) 99999-4444",
      email: "carlos.oliveira@clinic.com",
      location: "Consultório 1",
      status: "Ativo",
      avatar: null,
      crm: "CRM/SP 123456",
      especialidade: "Cardiologia",
    },
    {
      id: 2,
      name: "Dra. Patricia Lima",
      role: "Médica - Pediatria",
      phone: "(11) 99999-5555",
      email: "patricia.lima@clinic.com",
      location: "Consultório 2",
      status: "Ocupado",
      avatar: null,
      crm: "CRM/SP 789012",
      especialidade: "Pediatria",
    },
    {
      id: 3,
      name: "Dr. Roberto Ferreira",
      role: "Médico - Clínico Geral",
      phone: "(11) 99999-6666",
      email: "roberto.ferreira@clinic.com",
      location: "Consultório 3",
      status: "Disponível",
      avatar: null,
      crm: "CRM/SP 345678",
      especialidade: "Clínica Geral",
    },
  ];

  const handleAdd = () => {
    toast.info("Adicionar novo médico - Funcionalidade em desenvolvimento");
  };

  const handleEdit = (medico) => {
    toast.info(
      `Editar Dr(a). ${medico.name} - Funcionalidade em desenvolvimento`
    );
  };

  const handleDelete = (medico) => {
    toast.error(
      `Excluir Dr(a). ${medico.name} - Funcionalidade em desenvolvimento`
    );
  };

  const handleCall = (medico) => {
    toast.success(`Ligando para Dr(a). ${medico.name}...`);
    if (navigator.userAgent.includes("Mobile")) {
      window.open(`tel:${medico.phone}`);
    }
  };

  const handleEmail = (medico) => {
    toast.success(`Abrindo email para Dr(a). ${medico.name}...`);
    window.open(`mailto:${medico.email}?subject=Contato via Sistema`);
  };

  return (
    <CommonUserList
      title="Lista de Médicos"
      subtitle="Gerencie os médicos da clínica"
      userType="médico"
      users={medicos}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCall={handleCall}
      onEmail={handleEmail}
    />
  );
};

export default MedicoList;
