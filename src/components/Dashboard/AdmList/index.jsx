import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";
import { useNavigate } from "react-router-dom";
import Confirmation from "@/components/common/Confirmation";

const AdmList = () => {
  const { ReadAll, Delete } = useCrud();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    admin: null,
    isLoading: false,
  });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/adm" });
        // Junta dados do administrador e user em um só objeto
        const adminsData = response.data.data.map((adm) => ({
          adminId: adm.id,
          ...adm,
          ...adm.user,
        }));
        setAdmins(adminsData);
      } catch (error) {
        console.error("Erro ao carregar administradores:", error);
        toast.error("Erro ao carregar administradores");
        setAdmins([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, [ReadAll]);

  const handleAdd = () => {
    navigate("adm-form");
  };

  const handleEdit = (id) => {
    const admin = admins.find((a) => a.id === id);
    navigate("/dashboard/employee-update", {
      state: {
        id: admin.adminId,
        role: admin.role,
      },
    });
  };

  const handleDelete = (admin) => {
    if (!admin || !admin.adminId) return;
    setConfirmationModal({
      isOpen: true,
      admin: admin,
      isLoading: false,
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmationModal.admin) return;

    const admin = confirmationModal.admin;
    setConfirmationModal((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await Delete({
        endpoint: "/adm",
        id: admin.adminId,
      });
      if (response.success) {
        toast.success(`${admin.name} excluído com sucesso!`);
        setAdmins((prev) => prev.filter((a) => a.adminId !== admin.adminId));
        setConfirmationModal({
          isOpen: false,
          admin: null,
          isLoading: false,
        });
      } else {
        toast.error(`Erro ao excluir ${admin.name}`);
        setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
      }
    } catch {
      toast.error(`Erro ao excluir ${admin.name}`);
      setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleCancelDelete = () => {
    setConfirmationModal({
      isOpen: false,
      admin: null,
      isLoading: false,
    });
  };

  const handleCall = (admin) => {
    toast.success(`Ligando para ${admin.name}...`);
    if (navigator.userAgent.includes("Mobile")) {
      window.open(`tel:${admin.phone}`);
    }
  };

  const handleEmail = (admin) => {
    toast.success(`Abrindo email para ${admin.name}...`);
    window.open(`mailto:${admin.email}?subject=Contato via Sistema`);
  };

  return (
    <>
      {loading ? (
        <LoadingDashboard message="Carregando administradores..." />
      ) : (
        <CommonUserList
          title="Lista de Administradores"
          subtitle="Gerencie os administradores do sistema"
          userType="administrador"
          users={admins}
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
        message={`Tem certeza que deseja excluir ${confirmationModal.admin?.name}? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        isLoading={confirmationModal.isLoading}
      />
    </>
  );
};

export default AdmList;
