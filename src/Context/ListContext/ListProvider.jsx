import { useState, useContext, useCallback } from "react";
import { toast } from "sonner";
import { CrudContext } from "@/Context/crud/exports";
import { ListContext } from "./context";

export const ListProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { ReadAll, Delete } = useContext(CrudContext);

  const fetchPatients = useCallback(
    async (endpoint) => {
      try {
        setLoading(true);

        const result = await ReadAll({ endpoint });

        if (result.success) {
          setData(result.data);
          return { success: true, data: result.data };
        } else {
          toast.error("Erro ao carregar pacientes");
          return { success: false, error: "Erro ao carregar pacientes" };
        }
      } catch (error) {
        console.error("Erro ao carregar pacientes:", error);
        toast.error("Erro ao carregar pacientes");
        return { success: false, error: error.message };
      } finally {
        setLoading(false);
      }
    },
    [ReadAll]
  );

  const deletePatient = useCallback(
    async (id, deleteEndpoint) => {
      try {
        if (!id || (typeof id !== "string" && typeof id !== "number")) {
          const errorMsg = "ID inválido para deletar paciente";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }

        if (!deleteEndpoint) {
          const errorMsg = "Endpoint de deleção não fornecido";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }

        const validId = String(id);

        const result = await Delete({
          endpoint: deleteEndpoint,
          id: validId,
        });

        if (result.success) {
          setData((prevData) => {
            const updatedData = prevData.filter(
              (patient) => String(patient.id) !== validId
            );

            return updatedData;
          });

          toast.success("Paciente removido com sucesso!");
          return result;
        } else {
          const errorMsg = result.error || "Erro ao remover paciente";
          console.error("Erro da API:", errorMsg);
          toast.error(errorMsg);
          return result;
        }
      } catch (error) {
        console.error("Erro inesperado ao deletar paciente:", error);
        const errorMsg = "Erro ao remover paciente";
        toast.error(errorMsg);
        return { success: false, error: error.message };
      }
    },
    [Delete]
  );

  const clearData = useCallback(() => {
    setData([]);
    setLoading(false);
  }, []);

  const refreshData = useCallback(
    async (endpoint) => {
      return await fetchPatients(endpoint);
    },
    [fetchPatients]
  );

  const contextValue = {
    data,
    isLoading,
    fetchPatients,
    deletePatient,
    clearData,
    refreshData,
    setData,
    setLoading,
  };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};
