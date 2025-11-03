import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";
import { useNavigate } from "react-router-dom";
import Confirmation from "@/components/common/Confirmation";

const DoctorList = () => {
  const { ReadAll, Delete } = useCrud();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    doctor: null,
    isLoading: false,
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await ReadAll({ endpoint: "/doctor" });
        // Junta dados do médico e user em um só objeto
        const doctorsData = response.data.data.map((doc) => ({
          doctorId: doc.id,
          ...doc,
          ...doc.user,
          role: "doctor", // Define o role para doctor
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
    navigate("doctor-form");
  };

  const handleEdit = (id) => {
    const doctor = doctors.find((d) => d.id === id);
    navigate("/dashboard/employee-update", {
      state: {
        id: doctor.doctorId,
        role: doctor.role,
      },
    });
  };

  const handleDelete = (doctor) => {
    if (!doctor || !doctor.doctorId) return;
    setConfirmationModal({
      isOpen: true,
      doctor: doctor,
      isLoading: false,
    });
  };

  const handleConfirmDelete = async () => {
    if (!confirmationModal.doctor) return;

    const doctor = confirmationModal.doctor;
    setConfirmationModal((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await Delete({
        endpoint: "/doctor",
        id: doctor.doctorId,
      });
      if (response.success) {
        toast.success(`Dr(a). ${doctor.name} excluído com sucesso!`);
        setDoctors((prev) =>
          prev.filter((d) => d.doctorId !== doctor.doctorId)
        );
        setConfirmationModal({
          isOpen: false,
          doctor: null,
          isLoading: false,
        });
      } else {
        toast.error(`Erro ao excluir Dr(a). ${doctor.name}`);
        setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
      }
    } catch {
      toast.error(`Erro ao excluir Dr(a). ${doctor.name}`);
      setConfirmationModal((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleCancelDelete = () => {
    setConfirmationModal({
      isOpen: false,
      doctor: null,
      isLoading: false,
    });
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

      <Confirmation
        isOpen={confirmationModal.isOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="Confirmar exclusão"
        message={`Tem certeza que deseja excluir o Dr(a). ${confirmationModal.doctor?.name}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        isLoading={confirmationModal.isLoading}
      />
    </>
  );
};

export default DoctorList;
