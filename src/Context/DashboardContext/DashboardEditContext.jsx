import { createContext, useContext, useEffect, useState } from "react";
import { ChildRequestContext } from "../Service/ChildRequestContext";
import { toast } from "react-toastify";
import UseAuth from "../../Hook/useAuth";


export const DashboardEditContext = createContext({});


export const DashboardEditProvider = ({ children }) => {

  const { api } = useContext(ChildRequestContext);

  const [data, setData] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    neighborhood: '',
    apartment: '',
    age: 0,
    crm: '',
    specialty: '',
    user_id: '',
  });

  useEffect(() => {
    setFormData({
      name: data?.user?.name,
      email: data?.user?.email,
      phone: data?.user?.phone,
      city: data?.user?.city,
      street: data?.user?.street,
      neighborhood: data?.user?.neighborhood,
      apartment: data?.user?.apartment,
      age: data?.user?.age,
      crm: data?.crm,
      specialty: data?.specialty,
      id_administrator_fk: data?.id_administrator_fk,
      user_id: data?.user?.id,
    });
  }, [data])


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
        throw new Error("Erro ao fazer requisição!")
      }
      window.location.href = `/dashboard/${tipo}`;
      toast.success("Usuário atualizado com sucesso!");
    } catch (erro) {
      toast.error("Erro ao atualizar usuário!");
      console.error(erro.menssage);
    }
  }

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
        throw new Error("Erro ao fazer requisição!")
      }
      setData(result);
    } catch (erro) {
      console.error(erro.menssage);
    }
  }


  return (
    <DashboardEditContext.Provider value={data ? { EditUser, data, formData, handleInputChange, handleSubmit } : { EditUser, formData, handleInputChange, handleInputChange }}>
      {children}
    </DashboardEditContext.Provider>
  );
}