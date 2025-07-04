import { createContext, useContext, useEffect, useState } from "react";
import { ChildRequestContext } from "@/Context/Service/ChildRequestContext";
import { toast } from "react-toastify";

export const DashboardEditContext = createContext({});

export const DashboardEditProvider = ({ children }) => {
  const { api } = useContext(ChildRequestContext);

  const [title, setTitle] = useState(null);

  const [data, setData] = useState({});

  const [idAdministrator, setIdAdministrator] = useState(null);

  let getLocationId = JSON.parse(localStorage.getItem("data"))?.id || null;

  useEffect(() => {
    if (getLocationId) {
      const id_adm = atob(getLocationId);
      setIdAdministrator(id_adm);
    }
  }, [getLocationId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    neighborhood: "",
    apartment: "",
    age: 0,
    crm: "",
    specialty: "",
    user_id: "",
  });

  useEffect(() => {
    setFormData({
      active: data?.active,
      name: data?.user?.name,
      email: data?.user?.email,
      cpf: data?.user?.cpf,
      phone: data?.user?.phone,
      sex: data?.user?.sex,
      birth: data?.user?.birth,
      city: data?.user?.city,
      street: data?.user?.street,
      neighborhood: data?.user?.neighborhood,
      apartment: data?.user?.apartment,
      age: data?.user?.age,
      crm: data?.crm,
      coren: data?.coren,
      specialty: data?.specialty,
      id_administrator_fk: idAdministrator,
      user_id: data?.user?.id,
    });
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateUser = async (id, tipo) => {
    try {
      const { data } = await api.put(`/${tipo}/${id}`, formData);
      if (!data) {
        throw new Error("Erro ao fazer requisição!");
      }
      window.location.href = `/dashboard/${tipo}`;
      toast.success("Usuário atualizado com sucesso!");
    } catch (erro) {
      toast.error("Erro ao atualizar usuário!");
      console.error(erro.menssage);
    }
  };

  const handleSubmit = (e, id, tipo) => {
    e.preventDefault();
    updateUser(id, tipo);
  };

  const EditUser = async (id, tipo) => {
    try {
      const { data } = await api.get(`/${tipo}/${id}`);
      const result = data.data;
      console.log("aqui está o resultado --->", result);
      if (!result) {
        throw new Error("Erro ao fazer requisição!");
      }
      setData(result);
    } catch (erro) {
      console.error(erro.menssage);
    }
  };

  const setTitleEdit = (tipo) => {
    if (tipo === "doctor") {
      setTitle("Médico");
    } else if (tipo === "nurse") {
      setTitle("Enfermeiro");
    } else if (tipo === "attendant") {
      setTitle("Atendente");
    }
  };

  return (
    <DashboardEditContext.Provider
      value={
        data
          ? {
              EditUser,
              data,
              formData,
              handleInputChange,
              handleSubmit,
              setTitleEdit,
              title,
            }
          : {
              EditUser,
              formData,
              handleInputChange,
              setTitleEdit,
              title,
            }
      }
    >
      {children}
    </DashboardEditContext.Provider>
  );
};
