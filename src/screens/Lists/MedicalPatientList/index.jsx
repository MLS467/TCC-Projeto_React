import {
  PageWrapper,
  FixedHeader,
  LogoWrapper,
  AuthButtonWrapper,
  ContentWrapper,
} from "./style";
import CardListSection from "@/components/PatientList/CardListSection";
import CommonList from "@/components/common/CommonList";
import NavBar from "@/components/common/NavBar";
import Logo from "@/components/common/Logo";
import EmptyState from "@/components/common/EmptyState";
import CommonHeaderList from "@/components/common/CommonHeaderList";
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

      <CommonHeaderList
        title="Lista de Pacientes"
        description="Gerencie e monitore todos os pacientes"
        icon="people"
        iconColor={palette[600]}
      />

      <ContentWrapper>
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
