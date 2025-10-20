import CommonUserList from "../common/list";
import { toast } from "sonner";
import useCrud from "@/Hook/useCrud";
import { useEffect, useState } from "react";
import LoadingDashboard from "../LoadingDashboard";
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const { ReadAll, Delete } = useCrud();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleDelete = async (doctor) => {
    if (!doctor || !doctor.doctorId) return;
    try {
      setLoading(true);
      const response = await Delete({
        endpoint: "/doctor",
        id: doctor.doctorId,
      });
      if (response.success) {
        toast.success(`Dr(a). ${doctor.name} excluído com sucesso!`);
        setDoctors((prev) =>
          prev.filter((d) => d.doctorId !== doctor.doctorId)
        );
      } else {
        toast.error(`Erro ao excluir Dr(a). ${doctor.name}`);
      }
    } catch {
      toast.error(`Erro ao excluir Dr(a). ${doctor.name}`);
    } finally {
      setLoading(false);
    }
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
