import { createContext } from "react";
import useRequest from "../../Hook/useRequest";
import { toast } from "react-toastify";

export const CrudContext = createContext({});

export const CrudProvider = ({ children }) => {
  const { api } = useRequest();

  const Delete = async ({ endpoint, id }) => {
    try {
      console.log("CRUD Delete - Endpoint:", endpoint, "ID:", id);

      const response = await api.delete(`${endpoint}/${id}`);
      console.log("CRUD Delete - Response:", response);

      if (response.status !== 200 && response.status !== 204) {
        throw new Error(response.data?.message || "Erro ao deletar registro!");
      }

      toast.success("Registro deletado com sucesso!");
      return { success: true, data: response.data };
    } catch (error) {
      console.error("CRUD Delete - Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Erro ao deletar registro!";
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const Insert = async ({ endpoint, data }) => {
    try {
      const response = await api.post(endpoint, data);

      if (response.status !== 201 && response.status !== 200) {
        throw new Error("Erro ao inserir registro!");
      }

      toast.success("Registro inserido com sucesso!");
      return { success: true, data: response.data };
    } catch (error) {
      toast.error(error.message || "Erro ao inserir registro!");
      return { success: false, error: error.message };
    }
  };

  const Update = async ({ endpoint, id, data }) => {
    try {
      const response = await api.put(`${endpoint}/${id}`, data);

      if (response.status !== 200) {
        throw new Error("Erro ao atualizar registro!");
      }

      toast.success("Registro atualizado com sucesso!");
      return { success: true, data: response.data };
    } catch (error) {
      toast.error(error.message || "Erro ao atualizar registro!");
      return { success: false, error: error.message };
    }
  };

  const ReadOneRegister = async ({ endpoint, id }) => {
    try {
      const response = await api.get(`${endpoint}/${id}`);

      if (response.status !== 200) {
        throw new Error("Erro ao ler registro!");
      }

      return { success: true, data: response.data };
    } catch (error) {
      toast.error(error.message || "Erro ao ler registro!");
      return { success: false, error: error.message };
    }
  };

  const ReadAll = async ({ endpoint }) => {
    try {
      const response = await api.get(endpoint);

      if (response.status !== 200) {
        throw new Error("Erro ao ler registros!");
      }

      return { success: true, data: response.data };
    } catch (error) {
      toast.error(error.message || "Erro ao ler registros!");
      return { success: false, error: error.message };
    }
  };

  return (
    <CrudContext.Provider
      value={{ Delete, Insert, Update, ReadOneRegister, ReadAll }}
    >
      {children}
    </CrudContext.Provider>
  );
};
