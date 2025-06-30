import CommonUserList from "../common/list";
import { toast } from "sonner";

const AtendentList = () => {
  // Dados mockados para atendentes
  const atendentes = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Atendente - Recepção",
      phone: "(11) 99999-1111",
      email: "maria.silva@clinic.com",
      location: "Recepção Principal",
      status: "Ativo",
      avatar: null,
    },
    {
      id: 2,
      name: "João Santos",
      role: "Atendente - Triagem",
      phone: "(11) 99999-2222",
      email: "joao.santos@clinic.com",
      location: "Sala de Triagem",
      status: "Ocupado",
      avatar: null,
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Atendente - Administrativo",
      phone: "(11) 99999-3333",
      email: "ana.costa@clinic.com",
      location: "Setor Administrativo",
      status: "Disponível",
      avatar: null,
    },
  ];

  const handleAdd = () => {
    toast.info("Adicionar novo atendente - Funcionalidade em desenvolvimento");
  };

  const handleEdit = (atendente) => {
    toast.info(`Editar ${atendente.name} - Funcionalidade em desenvolvimento`);
  };

  const handleDelete = (atendente) => {
    toast.error(
      `Excluir ${atendente.name} - Funcionalidade em desenvolvimento`
    );
  };

  const handleCall = (atendente) => {
    toast.success(`Ligando para ${atendente.name}...`);
    // Simular abertura do telefone
    if (navigator.userAgent.includes("Mobile")) {
      window.open(`tel:${atendente.phone}`);
    }
  };

  const handleEmail = (atendente) => {
    toast.success(`Abrindo email para ${atendente.name}...`);
    window.open(`mailto:${atendente.email}?subject=Contato via Sistema`);
  };

  return (
    <CommonUserList
      title="Lista de Atendentes"
      subtitle="Gerencie os atendentes da clínica"
      userType="atendente"
      users={atendentes}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCall={handleCall}
      onEmail={handleEmail}
    />
  );
};

export default AtendentList;
