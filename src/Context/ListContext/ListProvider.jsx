import { useState, useContext, useCallback } from "react";
import { toast } from "sonner";
import { CrudContext } from "@/Context/crud/exports";
import { ListContext } from "./context";

/**
 * Provider que gerencia o estado e operações das listas de pacientes
 * Centraliza a lógica de carregamento e exclusão de pacientes
 * para ser reutilizada em diferentes telas (Enfermagem, Médicos, etc.)
 */
export const ListProvider = ({ children }) => {
  // Estado local para armazenar a lista de pacientes
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Acesso às funções CRUD do contexto principal
  const { ReadAll, Delete } = useContext(CrudContext);

  /**
   * Função para carregar lista de pacientes de um endpoint específico
   * @param {string} endpoint - URL do endpoint para buscar os pacientes
   * @returns {Promise} - Resultado da operação de busca
   */
  const fetchPatients = useCallback(
    async (endpoint) => {
      try {
        setLoading(true);
        console.log("Carregando pacientes do endpoint:", endpoint);

        const result = await ReadAll({ endpoint });

        if (result.success) {
          setData(result.data);
          console.log("Pacientes carregados com sucesso:", result.data.length);
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

  /**
   * Função para deletar um paciente específico
   * Realiza validações, faz a requisição ao backend e atualiza o estado local
   * @param {string|number} id - ID do paciente a ser deletado
   * @param {string} deleteEndpoint - Endpoint específico para deleção
   * @returns {Promise} - Resultado da operação de deleção
   */
  const deletePatient = useCallback(
    async (id, deleteEndpoint) => {
      try {
        console.log("Iniciando deleção do paciente:", {
          id,
          tipo: typeof id,
          endpoint: deleteEndpoint,
        });

        // Debug: Verificar autenticação no localStorage
        const storedData = localStorage.getItem("data");
        if (storedData) {
          const userData = JSON.parse(storedData);
          console.log("Status de autenticação:", {
            tokenPresente: !!userData.token,
            usuario: userData.user?.name || "N/A",
          });
        }

        // Validação do ID fornecido
        if (!id || (typeof id !== "string" && typeof id !== "number")) {
          const errorMsg = "ID inválido para deletar paciente";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }

        // Conversão e validação do endpoint
        if (!deleteEndpoint) {
          const errorMsg = "Endpoint de deleção não fornecido";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }

        // Conversão do ID para string para consistência
        const validId = String(id);
        console.log("Dados processados para deleção:", {
          idOriginal: id,
          idProcessado: validId,
          endpoint: deleteEndpoint,
        });

        // Execução da requisição de deleção
        const result = await Delete({
          endpoint: deleteEndpoint,
          id: validId,
        });

        console.log("Resposta da API para deleção:", result);

        if (result.success) {
          // Atualização do estado local - remove o paciente da lista
          setData((prevData) => {
            const updatedData = prevData.filter(
              (patient) => String(patient.id) !== validId
            );
            console.log("Lista atualizada:", {
              quantidadeAnterior: prevData.length,
              quantidadeAtual: updatedData.length,
              pacienteRemovido: validId,
            });
            return updatedData;
          });

          toast.success("Paciente removido com sucesso!");
          return result;
        } else {
          // Tratamento de erro retornado pela API
          const errorMsg = result.error || "Erro ao remover paciente";
          console.error("Erro da API:", errorMsg);
          toast.error(errorMsg);
          return result;
        }
      } catch (error) {
        // Tratamento de erros inesperados
        console.error("Erro inesperado ao deletar paciente:", error);
        const errorMsg = "Erro ao remover paciente";
        toast.error(errorMsg);
        return { success: false, error: error.message };
      }
    },
    [Delete]
  );

  /**
   * Função para limpar o estado da lista
   * Útil para quando o usuário navega entre diferentes telas
   */
  const clearData = useCallback(() => {
    console.log("Limpando dados da lista");
    setData([]);
    setLoading(false);
  }, []);

  /**
   * Função para recarregar a lista atual
   * Útil após operações que podem ter alterado os dados
   * @param {string} endpoint - Endpoint para recarregar
   */
  const refreshData = useCallback(
    async (endpoint) => {
      console.log("Recarregando dados da lista");
      return await fetchPatients(endpoint);
    },
    [fetchPatients]
  );

  // Valores e funções disponibilizadas para os componentes filhos
  const contextValue = {
    // Estado
    data,
    isLoading,

    // Funções de operação
    fetchPatients,
    deletePatient,
    clearData,
    refreshData,

    // Função para atualização manual do estado (uso especial)
    setData,
    setLoading,
  };

  return (
    <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
  );
};
