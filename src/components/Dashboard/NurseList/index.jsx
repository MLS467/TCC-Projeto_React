import CommonUserList from "../common/list";
import { toast } from "sonner";

const EnfermeiroList = () => {
  // Dados mockados para enfermeiros
  const enfermeiros = [
    {
      id: 1,
      name: "Enfª. Mariana Souza",
      role: "Enfermeira - UTI",
      phone: "(11) 99999-7777",
      email: "mariana.souza@clinic.com",
      location: "UTI - Ala A",
      status: "Ativo",
      avatar: null,
      coren: "COREN/SP 123456",
      setor: "UTI",
    },
    {
      id: 2,
      name: "Enfº. Pedro Almeida",
      role: "Enfermeiro - Emergência",
      phone: "(11) 99999-8888",
      email: "pedro.almeida@clinic.com",
      location: "Pronto Socorro",
      status: "Ocupado",
      avatar: null,
      coren: "COREN/SP 789012",
      setor: "Emergência",
    },
    {
      id: 3,
      name: "Enfª. Sofia Castro",
      role: "Enfermeira - Pediatria",
      phone: "(11) 99999-9999",
      email: "sofia.castro@clinic.com",
      location: "Ala Pediátrica",
      status: "Disponível",
      avatar: null,
      coren: "COREN/SP 345678",
      setor: "Pediatria",
    },
    {
      id: 4,
      name: "Enfº. Lucas Rodrigues",
      role: "Enfermeiro - Cirúrgico",
      phone: "(11) 99999-0000",
      email: "lucas.rodrigues@clinic.com",
      location: "Centro Cirúrgico",
      status: "Ativo",
      avatar: null,
      coren: "COREN/SP 456789",
      setor: "Centro Cirúrgico",
    },
  ];

  const handleAdd = () => {
    toast.info("Adicionar novo enfermeiro - Funcionalidade em desenvolvimento");
  };

  const handleEdit = (enfermeiro) => {
    toast.info(`Editar ${enfermeiro.name} - Funcionalidade em desenvolvimento`);
  };

  const handleDelete = (enfermeiro) => {
    toast.error(
      `Excluir ${enfermeiro.name} - Funcionalidade em desenvolvimento`
    );
  };

  const handleCall = (enfermeiro) => {
    toast.success(`Ligando para ${enfermeiro.name}...`);
    if (navigator.userAgent.includes("Mobile")) {
      window.open(`tel:${enfermeiro.phone}`);
    }
  };

  const handleEmail = (enfermeiro) => {
    toast.success(`Abrindo email para ${enfermeiro.name}...`);
    window.open(`mailto:${enfermeiro.email}?subject=Contato via Sistema`);
  };

  return (
    <CommonUserList
      title="Lista de Enfermeiros"
      subtitle="Gerencie os enfermeiros da clínica"
      userType="enfermeiro"
      users={enfermeiros}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onCall={handleCall}
      onEmail={handleEmail}
    />
  );
};

export default EnfermeiroList;
