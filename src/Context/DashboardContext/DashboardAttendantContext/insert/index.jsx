import useCrud from "@/Hook/useCrud";
import { DashboardAttendantContext } from "./context.js";
import useAuth from "@/Hook/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const DashboardAttendantInsertProvider = ({ children }) => {
  const { Insert } = useCrud();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    sex: "",
    birth: "",
    place_of_birth: "",
    city: "",
    neighborhood: "",
    street: "",
    block: "",
    apartment: "",
    photo: "",
    active: "1",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newForm = { ...formData, [name]: value };
    if (name === "birth" && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      newForm.age = age;
    }
    setFormData(newForm);
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
        active: formData.active === "1" ? 1 : 0,
        role: "attendant",
      };

      const response = await Insert({
        endpoint: "/attendant",
        data: payload,
      });

      console.log(response);
      if (response.success) {
        toast.success("Atendente cadastrado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          sex: "",
          birth: "",
          place_of_birth: "",
          city: "",
          neighborhood: "",
          street: "",
          block: "",
          apartment: "",
          photo: "",
          active: "1",
        });
      } else {
        toast.error("Erro ao cadastrar atendente!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao cadastrar atendente catch!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/dashboard/atendente");
  };

  return (
    <DashboardAttendantContext.Provider
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
    </DashboardAttendantContext.Provider>
  );
};

export default DashboardAttendantInsertProvider;
