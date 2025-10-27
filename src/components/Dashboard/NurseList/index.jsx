import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";
import { useNavigate } from "react-router-dom";
import Confirmation from "@/components/common/Confirmation";

const NurseList = () => {
  const { ReadAll, Delete } = useCrud();
  const [nurses, setNurses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    nurse: null,
    isLoading: false,
  });

  useEffect(() => {
    const fetchNurses = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/nurse" });
        // Junta dados do enfermeiro e user em um só objeto
        const nursesData = response.data.data.map((nurse) => ({
          nurseId: nurse.id,
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
    navigate("nurse-form");
  };

  const handleEdit = (id) => {
    const nurse = nurses.find((n) => n.id === id);
    navigate("/dashboard/employee-update", {
      state: {
        id: nurse.nurseId,
        role: nurse.role,
      },
    });
  };

  const handleDelete = (nurse) => {
    if (!nurse || !nurse.nurseId) return;
    setConfirmationModal({
      isOpen: true,
      nurse: nurse,
      isLoading: false,
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmationModal.nurse) return;

    const nurse = confirmationModal.nurse;
    setConfirmationModal((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await Delete({
        endpoint: "/nurse",
        id: nurse.nurseId,
      });
      if (response.success) {
        toast.success(`Enfermeiro(a) ${nurse.name} excluído com sucesso!`);
        setNurses((prev) => prev.filter((n) => n.nurseId !== nurse.nurseId));
        setConfirmationModal({
          isOpen: false,
          nurse: null,
          isLoading: false,
        });
      } else {
        toast.error(`Erro ao excluir enfermeiro(a) ${nurse.name}`);
        setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
      }
    } catch {
      toast.error(`Erro ao excluir enfermeiro(a) ${nurse.name}`);
      setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleCancelDelete = () => {
    setConfirmationModal({
      isOpen: false,
      nurse: null,
      isLoading: false,
    });
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

      <Confirmation
        isOpen={confirmationModal.isOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirmar exclusão"
        message={`Tem certeza que deseja excluir o enfermeiro(a) "${confirmationModal.nurse?.name}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        isLoading={confirmationModal.isLoading}
      />
    </>
  );
};

export default NurseList;
