import useCrud from "@/Hook/useCrud";
import { DashboardDoctorContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const DashboardDoctorInsertProvider = ({ children }) => {
  const { Insert } = useCrud();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    birth_date: "",
    gender: "",
    crm: "",
    specialty: "",
    work_shift: "",
    postal_code: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    status: "active",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      let adminId = "";
      if (user && user.id) {
        try {
          adminId = atob(user.id);
        } catch {
          adminId = user.id;
        }
      }

      const payload = {
        ...formData,
        password: "password",
        id_administrator_fk: adminId,
        active: formData.status === "active" ? 1 : 0,
        role: "doctor",
      };

      const response = await Insert({
        endpoint: "/doctor",
        data: payload,
      });

      console.log(response);
      if (response.success) {
        toast.success("Médico cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          birth_date: "",
          gender: "",
          crm: "",
          specialty: "",
          work_shift: "",
          postal_code: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          state: "",
          status: "active",
        });
      } else {
        toast.error("Erro ao cadastrar médico!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao cadastrar médico!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/dashboard/medico");
  };

  return (
    <DashboardDoctorContext.Provider
      value={{
        isModalVisible,
        formData,
        loading,
        handleInputChange,
        handleSubmit,
        handleCancel,
      }}
    >
      {children}
    </DashboardDoctorContext.Provider>
  );
};

export default DashboardDoctorInsertProvider;
