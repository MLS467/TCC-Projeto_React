import {
  PageWrapper,
  FixedHeader,
  LogoWrapper,
  AuthButtonWrapper,
  ContentWrapper,
  TitleRow,
  IconWrapper,
  TitleText,
  SubtitleText,
} from "./style";
import NursePatientList from "../../../components/Lists/NursePatientList";
import NavBar from "../../../components/common/NavBar";
import Logo from "../../../components/common/Logo";
import { palette } from "../../../constant/colors";
import AuthButton from "../../../components/common/AuthButton";
import { useEffect, useState, useContext, useCallback } from "react";
import SpinnerScreen from "../../../components/common/spinnerScreen";
import { toast } from "sonner";
import { CrudContext } from "../../../Context/crud/crud";

// Constantes fora do componente para evitar recriação
const ENDPOINTS = {
  PATIENTS: `${import.meta.env.VITE_API_USER_ENDPOINT}/flag`,
  USER: `${import.meta.env.VITE_API_USER_ENDPOINT}`,
};

const NursePatientListScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { ReadAll, Delete } = useContext(CrudContext);

  // Memoizar função de fetch para evitar re-criação
  const fetchPatients = useCallback(async () => {
    try {
      setLoading(true);
      const result = await ReadAll({ endpoint: ENDPOINTS.PATIENTS });

      if (result.success) {
        setData(result.data);
      } else {
        toast.error("Erro ao carregar pacientes");
      }
    } catch (error) {
      console.error("Erro ao carregar pacientes", error);
      toast.error("Erro ao carregar pacientes");
    } finally {
      setLoading(false);
    }
  }, [ReadAll]);

  // useEffect simplificado - só executa uma vez
  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  // Memoizar função de delete para evitar re-criação
  const DeletePatientNurse = useCallback(
    async (id) => {
      try {
        console.log(
          "DeletePatientNurse chamado com ID:",
          id,
          "Tipo:",
          typeof id
        );

        // Debug: Verificar token no localStorage
        const storedData = localStorage.getItem("data");
        console.log("Dados do localStorage:", storedData);

        if (storedData) {
          const userData = JSON.parse(storedData);
          console.log("Dados parseados:", userData);
          console.log("Token presente:", !!userData.token);
          if (userData.token) {
            console.log(
              "Token (primeiros 20 chars):",
              userData.token.substring(0, 20) + "..."
            );
          }
        }

        // Validar ID
        if (!id || (typeof id !== "string" && typeof id !== "number")) {
          toast.error("ID inválido para deletar paciente");
          return { success: false, error: "ID inválido" };
        }

        // Converter ID para string se necessário
        const validId = String(id);
        console.log("ID processado:", validId);
        console.log("Endpoint para delete:", ENDPOINTS.USER);

        const result = await Delete({ endpoint: ENDPOINTS.USER, id: validId });
        console.log("Resultado do delete:", result);

        if (result.success) {
          // Remove o paciente da lista local
          setData((prevData) =>
            prevData.filter((patient) => String(patient.id) !== validId)
          );
          toast.success("Paciente removido com sucesso!");
          return result;
        } else {
          console.error("Erro retornado pela API:", result.error);
          toast.error(result.error || "Erro ao remover paciente");
          return result;
        }
      } catch (error) {
        console.error("Erro ao deletar paciente:", error);
        toast.error("Erro ao remover paciente");
        return { success: false, error: error.message };
      }
    },
    [Delete]
  );

  if (isLoading) {
    return <SpinnerScreen message="Carregando lista de pacientes" />;
  }

  return (
    <PageWrapper>
      <FixedHeader>
        <NavBar>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <div />
          <AuthButtonWrapper>
            <AuthButton title={"Logout"} type={"logout"} />
          </AuthButtonWrapper>
        </NavBar>
      </FixedHeader>

      <ContentWrapper>
        <TitleRow>
          <IconWrapper>
            <svg width="50" height="50" fill="none" viewBox="0 0 24 24">
              <path
                d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.16 13.66 18 14.61 18 16.5V19h6v-2.5c0-2.33-4.67-3.5-6-3.5z"
                fill={palette[600]}
              />
            </svg>
          </IconWrapper>
          <div>
            <TitleText>Triagem de Pacientes - Enfermagem</TitleText>
            <SubtitleText>
              Avalie e direcione pacientes para atendimento médico
            </SubtitleText>
          </div>
        </TitleRow>
        <NursePatientList
          nursePatientData={data}
          onDelete={DeletePatientNurse}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default NursePatientListScreen;
