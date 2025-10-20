import useCrud from "@/Hook/useCrud";
import { DashboardNurseContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const DashboardNurseInsertProvider = ({ children }) => {
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
    coren: "",
    specialization: "",
    work_shift: "",
    level: "",
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
        role: "nurse",
      };

      const response = await Insert({
        endpoint: "/nurse",
        data: payload,
      });

      console.log(response);
      if (response.success) {
        toast.success("Enfermeiro(a) cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          birth_date: "",
          gender: "",
          coren: "",
          specialization: "",
          work_shift: "",
          level: "",
          postal_code: "",
          street: "",
          number: "",
          neighborhood: "",
          city: "",
          state: "",
          status: "active",
        });
      } else {
        toast.error("Erro ao cadastrar enfermeiro(a)!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao cadastrar enfermeiro(a)!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/dashboard/enfermeira");
  };

  return (
    <DashboardNurseContext.Provider
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
    </DashboardNurseContext.Provider>
  );
};

export default DashboardNurseInsertProvider;
