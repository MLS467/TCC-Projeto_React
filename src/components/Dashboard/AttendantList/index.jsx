import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";
import { useNavigate } from "react-router-dom";

const AttendantList = () => {
  const { ReadAll, Delete } = useCrud();
  const [attendants, setAttendants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAttendants = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/attendant" });
        const attendants = response.data.data.map((att) => ({
          attendantId: att.id,
          ...att,
          ...att.user,
        }));
        setAttendants(attendants);
      } catch (error) {
        console.error("Erro ao carregar atendentes", error);
        toast.error("Erro ao carregar atendentes");
        setAttendants([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendants();
  }, [ReadAll]);

  const handleAdd = () => {
    navigate("attendant-form");
  };

  const handleEdit = (id) => {
    const attendant = attendants.find((a) => a.id === id);
    navigate("/dashboard/employee-update", {
      state: {
        id: attendant.attendantId,
        role: attendant.role,
      },
    });
  };

  const handleDelete = async (attendant) => {
    if (!attendant || !attendant.attendantId) return;
    try {
      setLoading(true);
      const response = await Delete({
        endpoint: "/attendant",
        id: attendant.attendantId,
      });
      if (response.success) {
        toast.success(`Atendente ${attendant.name} excluído com sucesso!`);
        setAttendants((prev) =>
          prev.filter((a) => a.attendantId !== attendant.attendantId)
        );
      } else {
        toast.error(`Erro ao excluir atendente ${attendant.name}`);
      }
    } catch {
      toast.error(`Erro ao excluir atendente ${attendant.name}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCall = (attendant) => {
    toast.success(`Ligando para ${attendant.name}...`);
    if (navigator.userAgent.includes("Mobile")) {
      window.open(`tel:${attendant.phone}`);
    }
  };

  const handleEmail = (attendant) => {
    toast.success(`Abrindo email para ${attendant.name}...`);
    window.open(`mailto:${attendant.email}?subject=Contato via Sistema`);
  };

  return (
    <>
      {loading ? (
        <LoadingDashboard message="Carregando atendentes..." />
      ) : (
        <CommonUserList
          title="Lista de Atendentes"
          subtitle="Gerencie os atendentes da clínica"
          userType="atendente"
          users={attendants}
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

export default AttendantList;
