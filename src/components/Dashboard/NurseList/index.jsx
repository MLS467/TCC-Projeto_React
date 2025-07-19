import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";

const NurseList = () => {
  const { ReadAll } = useCrud();
  const [nurses, setNurses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/nurse" });
        // Junta dados do enfermeiro e user em um só objeto
        const nursesData = response.data.data.map((nurse) => ({
          ...nurse,
          ...nurse.user,
        }));
        setNurses(nursesData);
      } catch (error) {
        console.error("Erro ao carregar enfermeiros", error);
        toast.error("Erro ao carregar enfermeiros");
        setNurses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNurses();
  }, [ReadAll]);

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
    <>
      {loading ? (
        <LoadingDashboard />
      ) : (
        <CommonUserList
          title="Lista de Enfermeiros"
          subtitle="Gerencie os enfermeiros da clínica"
          userType="enfermeiro"
          users={nurses}
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

export default NurseList;
