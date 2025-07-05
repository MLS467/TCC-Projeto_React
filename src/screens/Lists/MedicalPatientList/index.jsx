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
import CardListSection from "@/components/PatientList/CardListSection";
import CommonList from "@/components/common/CommonList";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import EmptyState from "@/components/common/EmptyState";
import { palette } from "@/constant/colors";
import AuthButton from "@/components/common/AuthButton";
import { useEffect, useContext } from "react";
import SpinnerScreen from "@/components/common/spinnerScreen";
import { ListContext } from "@/Context/ListContext";

// Constantes de endpoints específicos para área médica
const ENDPOINTS = {
  PATIENTS: `${import.meta.env.VITE_API_PATIENT_ENDPOINT}Completed`, // Buscar pacientes completados
  USER: `${import.meta.env.VITE_API_PATIENT_ENDPOINT}`, // Deletar usuários/pacientes
};

const PatientListScreen = () => {
  // Uso do contexto centralizado para gerenciar lista de pacientes
  const { data, isLoading, fetchPatients, deletePatient } =
    useContext(ListContext);

  /**
   * Carrega a lista inicial de pacientes ao montar o componente
   * Usa o endpoint específico para buscar pacientes completados (área médica)
   */
  useEffect(() => {
    fetchPatients(ENDPOINTS.PATIENTS);
  }, [fetchPatients]);

  /**
   * Função específica para deletar pacientes na tela médica
   * Utiliza a lógica centralizada do contexto ListContext
   */
  const handleDeletePatient = async (id) => {
    return await deletePatient(id, ENDPOINTS.USER);
  };

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
            <TitleText>Lista de Pacientes</TitleText>
            <SubtitleText>Gerencie e monitore todos os pacientes</SubtitleText>
          </div>
        </TitleRow>

        {data && data.length > 0 ? (
          <>
            <CardListSection data={data} />
            <CommonList data={data} onDelete={handleDeletePatient} />
          </>
        ) : (
          <EmptyState
            title="Nenhum paciente registrado"
            description="Quando houver pacientes cadastrados no sistema, eles aparecerão aqui com todas as informações relevantes."
            icon={
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V5.5L21 5V3H3V5L9 5.5V7.5L3 7V9L9 8.5V10.5L3 10V12H21V10L15 10.5V8.5L21 9Z"
                  fill="currentColor"
                />
              </svg>
            }
          />
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default PatientListScreen;
