import useRequest from "@/Hook/useRequest";
import { toast } from "sonner";
import { CrudContext } from "./context";

export const CrudProvider = ({ children }) => {
  const { api } = useRequest();

  const Delete = async ({ endpoint, id }) => {
    try {
      const response = await api.delete(`${endpoint}/${id}`);

      if (response.status !== 200 && response.status !== 204) {
        throw new Error(response.data?.message || "Erro ao deletar registro!");
      }

      return { success: true, data: response.data };
    } catch (error) {
      console.error("CRUD Delete - Error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Erro ao deletar registro!";
      return { success: false, error: errorMessage };
    }
  };

  const Insert = async ({ endpoint, data }) => {
    try {
      // Verificar se há arquivos no data
      const hasFiles = Object.values(data).some(
        (value) => value instanceof File
      );

      let requestData = data;
      let config = {};

      if (hasFiles) {
        // Se há arquivos, usar FormData
        requestData = new FormData();

        Object.keys(data).forEach((key) => {
          if (data[key] instanceof File) {
            requestData.append(key, data[key]);
          } else {
            requestData.append(key, data[key]);
          }
        });

        // Deixar o axios definir automaticamente o Content-Type para multipart/form-data
        // config.headers = {
        //   'Content-Type': 'multipart/form-data'
        // };
      }

      const response = await api.post(endpoint, requestData, config);

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
      console.log("CRUD Update - Dados recebidos:", data);

      // Verificar se há arquivos no data
      const hasFiles = Object.values(data).some(
        (value) => value instanceof File
      );
      console.log("CRUD Update - Tem arquivos?", hasFiles);

      let requestData = data;
      let config = {};

      if (hasFiles) {
        console.log("CRUD Update - Criando FormData...");
        // Se há arquivos, usar FormData
        requestData = new FormData();

        Object.keys(data).forEach((key) => {
          if (data[key] instanceof File) {
            console.log(
              `CRUD Update - Adicionando arquivo ${key}:`,
              data[key].name
            );
            requestData.append(key, data[key]);
          } else if (data[key] !== null && data[key] !== undefined) {
            console.log(`CRUD Update - Adicionando campo ${key}:`, data[key]);
            requestData.append(key, data[key]);
          }
        });

        // Deixar o axios definir automaticamente o Content-Type para multipart/form-data
        // config.headers = {
        //   'Content-Type': 'multipart/form-data'
        // };

        console.log("CRUD Update - FormData criado");
      } else {
        console.log("CRUD Update - Usando JSON normal");
      }

      console.log(
        "CRUD Update - Fazendo requisição para:",
        `${endpoint}/${id}`
      );

      // Se há o campo _method (para upload de arquivos), usar POST
      let response;
      if (
        data._method === "PUT" ||
        (hasFiles && requestData.get && requestData.get("_method") === "PUT")
      ) {
        console.log(
          "CRUD Update - Usando POST com _method=PUT para upload de arquivo"
        );
        response = await api.post(`${endpoint}/${id}`, requestData, config);
      } else {
        console.log("CRUD Update - Usando PUT normal");
        response = await api.put(`${endpoint}/${id}`, requestData, config);
      }

      if (response.status !== 200) {
        throw new Error("Erro ao atualizar registro!");
      }

      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const ReadOneRegister = async ({ endpoint, params }) => {
    try {
      const response = await api.get(`${endpoint}/${params}`);

      if (response.status !== 200) {
        throw new Error("Erro ao ler registro!");
      }

      return { success: true, data: response.data };
    } catch (error) {
      toast.error(error.message || "Erro ao ler registro!");
      return { success: false, error: error.message };
    }
  };

  const ReadAll = async ({ endpoint, params = "" }) => {
    try {
      let response = "";

      if (!params) response = await api.get(`${endpoint}`);
      else response = await api.get(`${endpoint}/${params}`);

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
