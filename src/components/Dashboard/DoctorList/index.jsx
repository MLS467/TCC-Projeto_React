import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";

const DoctorList = () => {
  const { ReadAll } = useCrud();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/doctor" });
        // Junta dados do médico e user em um só objeto
        const doctorsData = response.data.data.map((doc) => ({
          ...doc,
          ...doc.user,
        }));
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Erro ao carregar médicos:", error);
        toast.error("Erro ao carregar médicos");
        setDoctors([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [ReadAll]);

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
    <>
      {loading ? (
        <LoadingDashboard message="Carregando médicos..." />
      ) : (
        <CommonUserList
          title="Lista de Médicos"
          subtitle="Gerencie os médicos da clínica"
          userType="médico"
          users={doctors}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCall={handleCall}
          onEmail={handleEmail}
        />
      )}
    </>
  );
};

export default DoctorList;
